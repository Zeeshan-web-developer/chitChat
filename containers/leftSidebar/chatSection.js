import { useState, useContext, useEffect } from "react";
import ContactSearch from "./contactSearch";
import ChatedUsers from "./chatedUsers";
import { useDispatch, useSelector } from "react-redux";
import { MessageSquare, UserPlus, Phone } from "react-feather";
import { Nav, NavLink, NavItem, TabContent, TabPane } from "reactstrap";
import {
  setActiveTab,
  chatededUsers,
  fetchUsers,
} from "../../redux/actions/index";
const ChatSection = () => {
  const dispatch = useDispatch();
  const atab = useSelector((state) => state.user.activeTab);
  const [activeTab, setActivetab] = useState("chat");
  const activeNav = useSelector((state) => state.user.newContact);
  const ToggleTab = (tab) => {
    setActivetab(tab);
    if (tab === "chat") {
      dispatch(setActiveTab("chat"));
    } else if (tab === "contact") {
      dispatch(setActiveTab("contact"));
    } else {
      dispatch(setActiveTab("call"));
    }
  };

  return (
    <div className="chat custom-scroll">
      <div className="theme-title">
        <div className="media">
          <div>
            <h2>Chat</h2>
            <h4>Start New Conversation</h4>
          </div>
          <div className="media-body text-right"></div>
        </div>
      </div>
      <div className="theme-tab tab-sm chat-tabs logo-warpper">
        <Nav
          tabs
          id="myTab"
          role="tablist"
          style={{ borderBottom: "1px solid #eff1f2" }}
        >
          <NavItem>
            <NavLink
              className={`button-effect step4 ${
                atab === "chat" ? "active" : ""
              }`}
              onClick={() => ToggleTab("chat")}
              data-intro="Start chat"
            >
              <MessageSquare />
              Chat
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={`button-effect ${atab === "call" ? "active" : ""}`}
              onClick={() => ToggleTab("call")}
            >
              <Phone />
              call
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={`button-effect ${atab === "contact" ? "active" : ""}`}
              onClick={() => {
                ToggleTab("contact");
                dispatch(chatededUsers("contact"));
                dispatch(fetchUsers());
              }}
            >
              <UserPlus />
              Contact
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane
            tabId="chat"
            className="fade show"
            id="chat"
            role="tabpanel"
            aria-labelledby="chat-tab"
          >
            <ChatedUsers />
          </TabPane>
          <TabPane
            tabId="call"
            className="fade show"
            id="call"
            role="tabpanel"
            aria-labelledby="chat-tab"
          >
            <ChatedUsers />
          </TabPane>

          <TabPane
            tabId="contact"
            className="fade show"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {activeNav === "contact" ? <ContactSearch /> : <ChatedUsers />}
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default ChatSection;
