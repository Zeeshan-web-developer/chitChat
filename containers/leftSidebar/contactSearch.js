import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import dateTime from "./datetime";
import Logo from "./1.jpg";
import { Nav, TabContent } from "reactstrap";
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

  const addNew = (item) => {
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
          status: item.onlineusers,
          mesg: `msg at ${dateTime()}`,
          onlineStatus: item.onlineStatus,
          lastMessageAt: dateTime(),
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
          <div className="theme-tab">
            <Nav tabs id="myTab1" role="tablist"></Nav>
            <TabContent activeTab={chatSubTab}>
              <ul className="chat-main">
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
                    return (
                      <li
                        className={`${1 === chatlist.id ? "active" : ""}`}
                        key={i}
                        onClick={(e) => {
                          changeChatClick(e, chatlist);
                          dispatch(
                            setChatWith({
                              name: chatlist.first_name,
                              status: chatlist.onlineStatus,
                              id: chatlist.id,
                            })
                          );
                          dispatch(setActiveTab("chat"));
                          dispatch(chatededUsers("new"));
                          addNew(chatlist, e);
                          addToRoster(chatlist);
                        }}
                      >
                        <div className="chat-box">
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
                            {/* <h6>{chatlist.mesg}</h6> */}
                          </div>
                          <div className="date-status">
                            <i
                              className="ti-pin2"
                              onClick={(e) => Tipin(e)}
                            ></i>
                            {/* <h6>{chatlist.lastSeenDate}</h6> */}
                            {/* {chatlist.status === "Sending" || "Failed" || "Seen" ? (
                      <h6
                        className={`${
                          chatlist.status === "Sending"
                            ? "font-dark"
                            : chatlist.status === "Failed"
                            ? "font-danger"
                            : "font-success"
                        }  status`}
                      >
                        {chatlist.status === "8" ? "" : chatlist.status}
                      </h6>
                    ) : (
                      ""
                    )} */}
                            {/* {chatlist.status === "8" ? (
                      <div className="badge badge-primary sm">
                        {chatlist.status}
                      </div>
                    ) : (
                      ""
                    )} */}
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
