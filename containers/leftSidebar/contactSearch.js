import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import Logo from "./1.jpg";
import { Nav, TabContent } from "reactstrap";
import Avatar from "react-avatar";
import { Phone, Video } from "react-feather";
import {
  fetchUsers,
  setChatWith,
  setActiveTab,
  chatededUsers,
  addNewUSer,
  removeRecentUser,
  updateLastMessageTime,
  setAllUsers,
} from "../../redux/actions/index";

function form() {
  let onlineU;
  const dispatch = useDispatch();
  const jid = useSelector((state) => state.user.currentUser.jid);
  var jidLoggedInUser = jid && jid.split("@")[0];
  const usersP = useSelector((state) => state.user.users);
  const allusers = useSelector((state) => state.user.allusers);
  const [filtered, setFiltered] = useState("");
  let filteredUsers;

  const recentUsers = useSelector((state) => state.user.chatedUsers);
  const chatWithID = useSelector((state) => state.user.chatWith.id);
  const [searchTerm, setSearch] = useState(null);
  const [chatSubTab, setChatSubTab] = useState("contacts");
  const [onlineusers, setOnlineusers] = useState([]);
  const client = useSelector((state) => state.user.client);
  let alluserStatus = useSelector((state) => state.user.alluserStatus);
  const filterd = () => {
    filteredUsers =
      usersP.length > 0 &&
      usersP[0].filter((user) => user.id !== jidLoggedInUser);

    return filteredUsers;
  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setFiltered(filterd());
  }, [usersP]);

  useEffect(() => {
    console.log("useeffect 2nd", alluserStatus, filteredUsers, filtered);
    if (filtered && alluserStatus) {
      onlineU = mergedAray();
      console.log("Online users", alluserStatus, filtered, filteredUsers);
      setOnlineusers(onlineU);
    }
  }, [alluserStatus, filtered]);

  const mergedAray = () => {
    const mergeArray =
      filtered &&
      filtered.map((userItem) => {
        let classesItem = alluserStatus.find((item) => item.id === userItem.id);
        return classesItem
          ? { ...userItem, ...classesItem }
          : { ...userItem, onlineStatus: "offline" };
      });

    console.log("Online users merged", mergeArray);
    return mergeArray;
  };

  //This function is used to add new user in the recent users
  const addNew = (item) => {
    let found = false;
    let foundID;
    /* SEARCH CONTACT IN CHAT TAB  RETURN:TRUE IF PRESENT,RETURN FALSE IF NOT PRESENT */
    for (var i = 0; i < recentUsers.length; i++) {
      console.log("new item id", item.id);
      if (recentUsers[i].id === item.id + "@mongoose.mysmartpbx.org") {
        found = true;
        foundID = recentUsers[i].id;
        break;
      }
    }

    /* if user is already present then remove all users without message attribute then add into recent list*/
    if (found) {
      recentUsers.map((ci) => {
        if (!ci.hasOwnProperty("mesg")) {
          dispatch(removeRecentUser(ci.id));
          dispatch(
            addNewUSer({
              id: item.id + "@mongoose.mysmartpbx.org",
              first_name: item.first_name,
              status: item.onlineusers,
              onlineStatus: item.onlineStatus,
              status: item.onlineStatus,
            })
          );
        }
      });
    }
    /* If not present in chat section.if any other is present without mesg attribute remove first then add*/
    if (!found) {
      recentUsers.map((ci) => {
        if (!ci.hasOwnProperty("mesg")) {
          dispatch(removeRecentUser(ci.id));
          console.log("remove first");
        }
      });
      dispatch(
        addNewUSer({
          id: item.id + "@mongoose.mysmartpbx.org",
          first_name: item.first_name,
          status: item.onlineusers,
          onlineStatus: item.onlineStatus,
          status: item.onlineStatus,
        })
      );
    }
  };

  const contactLogMain = (e) => {
    document.querySelectorAll(".contact-log-main li").forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  //This is used to send frind request ,it sends xmpp mesage if any user is not in our roster
  const addToRoster = async (item) => {
    let jidd = item.id + "@mongoose.mysmartpbx.org";
    let contacts1 = await client.getRoster();
    let length = contacts1.items.length;
    let found = false;
    length > 0 &&
      contacts1.items.map((user) => {
        if (user.jid === jidd) {
          console.log("user is in my  roster");
          found = true;
        }
      });

    if (!found) {
      console.log("not found", client);
      let obj = {
        jid: jidd,
        name: item.first_name,
        groups: [],
      };
      client.updateRosterItem(obj);
      setTimeout(() => {
        client.subscribe(jidd, () => console.log("subscrption request sent"));
        acceptRequest();
      }, 1000);
    }
  };
  const acceptRequest = () => {
    console.log("listening");
    client.on("subscribe", (ReceivedPresence) =>
      client.acceptSubscription(ReceivedPresence.from)
    );
  };

  if (!onlineusers) {
    return <div>Loading...</div>;
  } else if (!filtered) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
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
          <div className="theme-tab tab-icon">
            <Nav tabs id="myTab1" role="tablist"></Nav>
            <TabContent activeTab={chatSubTab}>
              <ul className="contact-log-main">
                {onlineusers
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
                    chatlist["status"] = "sending";
                    return (
                      <li
                        className={`${
                          chatWithID ===
                          chatlist.id + "@mongoose.mysmartpbx.org"
                            ? "active"
                            : ""
                        }`}
                        key={i}
                        onClick={(e) => {
                          contactLogMain(e);
                          dispatch(
                            setChatWith({
                              name: chatlist.first_name,
                              status: chatlist.onlineStatus,
                              id: chatlist.id + "@mongoose.mysmartpbx.org",
                            })
                          );
                          dispatch(setActiveTab("chat"));
                          dispatch(chatededUsers("new"));
                          addNew(chatlist, e);
                          addToRoster(chatlist);
                        }}
                      >
                        <div className="contact-box">
                          <div
                            className={`profile ${chatlist.onlineStatus}`}
                            style={{
                              backgroundImage: `url(${Logo})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              display: "block",
                            }}
                          >
                            <img
                              className="bg-img"
                              src={Logo}
                              alt="Avatar"
                              style={{ display: "none" }}
                            />
                          </div>

                          <div className="details">
                            <h5>{chatlist.first_name}</h5>
                            <h6>+21 3523 25544 </h6>
                          </div>
                          <div className="contact-action">
                            <div className="icon-btn btn-outline-primary btn-sm button-effect">
                              <Phone />
                            </div>
                            <div className="icon-btn btn-outline-success btn-sm button-effect">
                              <Video />
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </TabContent>
          </div>
        </form>
      </>
    );
  }
}
export default form;
