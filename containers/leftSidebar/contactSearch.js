import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useContext } from "react";
import { FormGroup, Input } from "reactstrap";
import dateTime from "date-time";
import { Nav, TabContent } from "reactstrap";

import {
  fetchUsers,
  setChatWith,
  setActiveTab,
  chatededUsers,
  addNewUSer,
  removeRecentUser,
} from "../../redux/actions/index";

function form() {
  const dispatch = useDispatch();
  const accountId = useSelector((state) => state.user.accountId);
  const usersP = useSelector((state) => state.user.users);
  const recentUsers = useSelector((state) => state.user.chatedUsers);
  const [searchTerm, setSearch] = useState(null);

  const [chatSubTab, setChatSubTab] = useState("contacts");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const addNew = (item, e) => {
    let found = false;

    for (var i = 0; i < recentUsers.length; i++) {
      if (recentUsers[i].id === item.id) {
        found = true;
        break;
      }
    }
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
          lastMessageAt: "2021-08-07 10:18:32",
          mesg: "hii",
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
            {usersP.length > 0 &&
              usersP[0]
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
