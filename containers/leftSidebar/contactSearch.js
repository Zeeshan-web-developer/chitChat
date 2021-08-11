import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import dateTime from "./datetime";
import { Nav, TabContent } from "reactstrap";
import { getRosterItems } from "../../stanza/chatClient";
import {
  fetchUsers,
  setChatWith,
  setActiveTab,
  chatededUsers,
  addNewUSer,
  removeRecentUser,
  updateLastMessageTime,
} from "../../redux/actions/index";

function form() {
  const dispatch = useDispatch();
  const jid = useSelector((state) => state.user.currentUser.jid);
  var jidLoggedInUser = jid && jid.split("@")[0];
  const usersP = useSelector((state) => state.user.users);
  const filteredUsers =
    usersP.length > 0 &&
    usersP[0].filter((user) => user.id !== jidLoggedInUser);
  const recentUsers = useSelector((state) => state.user.chatedUsers);
  const [searchTerm, setSearch] = useState(null);
  const [chatSubTab, setChatSubTab] = useState("contacts");
  const client = useSelector((state) => state.user.client);
  const [roster, setRoster] = useState([]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const addNew = (item, e) => {
    let found = false;
    let foundID;
    /* SEARCH CONTACT IN CHAT TAB  RETURN:TRUE IF PRESENT,RETURN FALSE IF NOT PRESENT */
    for (var i = 0; i < recentUsers.length; i++) {
      if (recentUsers[i].id === item.id) {
        found = true;
        foundID = recentUsers[i].id;
        break;
      }
    }

    /* if contact is present append messages */
    if (found) {
      let objIndex = recentUsers.findIndex((obj) => obj.id == foundID);
      dispatch(updateLastMessageTime({ id: objIndex, time: dateTime() }));
    }
    /* If not present in chat section.if any other is present without mesg attribute remove first then add*/
    if (!found) {
      recentUsers.map((ci) => {
        if (!ci.hasOwnProperty("mesg")) {
          dispatch(removeRecentUser(ci.id));
        }
      });
      dispatch(
        addNewUSer({
          id: item.id,
          first_name: item.first_name,
          lastMessageAt: dateTime(),
          mesg: `msg at ${dateTime()}`,
        })
      );
    }
  };

  const changeChatClick = (e) => {
    document.querySelectorAll(".chat-main li").forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    document.querySelector(".sidebar-toggle").classList.add("mobile-menu");
  };

  const addToRoster = async (item) => {
    try {
      let contacts = await client.getRoster();
      let jidd = item.id + "@mongoose.mysmartpbx.org";
      console.log("roster", contacts.items);

      client.updateRosterItem({
        jid: jidd,
        name: item.first_name,
        groups: [],
      });
      client.subscribe(jidd, () => console.log("subscrption request sent"));
      acceptRequest();
    } catch (e) {
      console.log("error in sending friend  request", e);
    }
  };
  const acceptRequest = () => {
    console.log("listening");
    client.on("subscribe", (ReceivedPresence) =>
      client.acceptSubscription(ReceivedPresence.from)
    );
  };

  return (
    <form>
      <FormGroup>
        <Input
          type="email"
          name="email"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormGroup>
      <div className="theme-tab">
        <Nav tabs id="myTab1" role="tablist"></Nav>
        <TabContent activeTab={chatSubTab}>
          <ul className="chat-main">
            {filteredUsers.length > 0 &&
              filteredUsers
                .filter((data) => {
                  if (searchTerm == null) {
                    return data;
                  } else if (
                    data.first_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return data;
                  }
                })
                .map((chatlist, i) => {
                  return (
                    <li
                      className={`${1 === chatlist.id ? "active" : ""}`}
                      key={i}
                      onClick={(e) => {
                        changeChatClick(e, chatlist);
                        dispatch(setChatWith(chatlist.first_name));
                        dispatch(setActiveTab("chat"));
                        dispatch(chatededUsers("new"));
                        addNew(chatlist, e);
                        addToRoster(chatlist);
                      }}
                    >
                      <div className="chat-box">
                        <div
                          className={`profile  ${chatlist.last_name}`}
                          style={{
                            backgroundImage: `url('assets/images/${chatlist.thumb}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "block",
                          }}
                        >
                          <img
                            className="bg-img"
                            src={`assets/images/${chatlist.thumb}`}
                            alt="Avatar"
                            style={{ display: "none" }}
                          />
                        </div>
                        <div className="details">
                          <h5>{chatlist.first_name}</h5>
                          <h6>Team Leader</h6>
                        </div>
                        <div className="date-status">{chatlist.last_name}</div>
                      </div>
                    </li>
                  );
                })}
          </ul>
        </TabContent>
      </div>
    </form>
  );
}

export default form;
