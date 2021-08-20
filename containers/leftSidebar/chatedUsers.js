import React, { useEffect } from "react";
import { Nav, TabContent } from "reactstrap";
import { setChatWith, removeRecentUser } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./1.jpg";
function chatedUsers() {
  const dispatch = useDispatch();
  const unmount = useSelector((state) => state.user.componentUnmount);
  const recentUSers = useSelector((state) => state.user.chatedUsers);
  const chatWithID = useSelector((state) => state.user.chatWith.id);
  const changeChatClick = (e) => {
    document.querySelectorAll(".chat-main li").forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    document.querySelector(".sidebar-toggle").classList.add("mobile-menu");
  };

  const Tipin = (e) => {
    e.currentTarget.classList.toggle("pined");
  };
  const checkHasMessages = () => {
    recentUSers.map((ci) => {
      if (!ci.hasOwnProperty("mesg")) {
        dispatch(removeRecentUser(ci.id));
      }
    });
  };
  useEffect(() => {
    if (unmount) {
      checkHasMessages();
    }
  }, [unmount]);

  let SotedUsers = recentUSers.sort((a, b) => {
    return new Date(b.lastMessageAt) - new Date(a.lastMessageAt);
  });

  return (
    <div className="theme-tab">
      <Nav tabs id="myTab1" role="tablist"></Nav>
      <TabContent>
        <ul className="chat-main">
          {SotedUsers.map((chatlist, i) => {
            return (
              <li
                className={`${chatWithID === chatlist.id ? "active" : ""}`}
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
                  i > 0 ? checkHasMessages() : null;
                }}
              >
                <div className="chat-box">
                  <div
                    className={`profile  ${chatlist.onlineStatus}`}
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
                    <h6>{chatlist.mesg}</h6>
                  </div>
                  <div className="date-status">
                    <i className="ti-pin2" onClick={(e) => Tipin(e)}></i>
                    <h6>{chatlist.lastMessageAt}</h6>
                    {chatlist.status === "Sending" || "Failed" || "Seen" ? (
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
                    )}
                    {chatlist.status === "8" ? (
                      <div className="badge badge-primary sm">
                        {chatlist.status}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </TabContent>
    </div>
  );
}

export default chatedUsers;
