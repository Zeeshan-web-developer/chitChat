import { useState, useEffect } from "react";
import ContactSearch from "./contactSearch";
import ChatedUsers from "./chatedUsers";
import Calls from "./calls";
import { useDispatch, useSelector } from "react-redux";
import { MessageSquare, UserPlus, Phone, Search, Plus } from "react-feather";
import { Nav, NavLink, NavItem, TabContent, TabPane } from "reactstrap";
import {
  setActiveTab,
  chatededUsers,
  fetchUsers,
  setRoster,
} from "../../redux/actions/index";
import { getRosterItems } from "../../stanza/chatClient";

const ChatSection = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [ChatContact, setChatContact] = useState(false);
  const dispatch = useDispatch();
  const atab = useSelector((state) => state.user.activeTab);
  const jid = useSelector((state) => state.user.currentUser.jid);
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
  // useEffect(() => {
  //   let rosterAray = getRosterItems();
  //   dispatch(setRoster(rosterAray));
  // }, []);

  return (
    <div className="chat custom-scroll">
      <div className="theme-title">
        <div className="media">
          <div>
            <h2>Chat</h2>
            <h4>Start New Conversation</h4>
          </div>
          <div className="media-body text-right">
            <a
              className="icon-btn btn-outline-light btn-sm search contact-search"
              href="#"
              onClick={() => setSearchToggle(true)}
            >
              {" "}
              <Search />
            </a>
            <form
              className={`form-inline search-form ${
                searchToggle ? "open" : ""
              }`}
            >
              <div className="form-group">
                <input
                  className="form-control-plaintext"
                  type="search"
                  placeholder="Search.."
                />
                <div
                  className="icon-close close-search"
                  onClick={() => setSearchToggle(false)}
                ></div>
              </div>
            </form>
            <a
              className="icon-btn btn-primary btn-fix chat-cont-toggle outside"
              href="#"
              onClick={() => setChatContact(!ChatContact)}
            >
              <Plus />
            </a>
          </div>
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
            <Calls />
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
