import React, { useState } from "react";
import { Nav, NavLink, NavItem, TabContent, TabPane } from "reactstrap";
import {
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  ArrowDownLeft,
  ArrowDownRight,
  Video,
  CornerLeftDown,
  ArrowUpRight,
} from "react-feather";
const callLogMain = (e) => {
  document.querySelectorAll(".call-log-main li").forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

function calls() {
  const [callSubTab, setCallSubTab] = useState("all");
  return (
    <div className="theme-tab tab-icon">
      <Nav tabs id="contactTab" role="tablist">
        <NavItem>
          <NavLink
            className={callSubTab === "all" ? "active" : ""}
            onClick={() => setCallSubTab("all")}
          >
            All
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={callSubTab === "incoming" ? "active" : ""}
            onClick={() => setCallSubTab("incoming")}
          >
            {" "}
            <PhoneIncoming />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={callSubTab === "outgoing" ? "active" : ""}
            onClick={() => setCallSubTab("outgoing")}
          >
            {" "}
            <PhoneOutgoing />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={callSubTab === "cancel" ? "active" : ""}
            onClick={() => setCallSubTab("cancel")}
          >
            {" "}
            <PhoneMissed />
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={callSubTab}>
        <TabPane tabId="all" className="fade show">
          <ul className="call-log-main">
            <li className="active" onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                ></div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowDownLeft />
                    3:30 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    <ArrowDownRight />
                    3:10 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/2.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <CornerLeftDown className="missed" />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-danger button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    <ArrowDownRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/2.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    <ArrowDownRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowDownRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </TabPane>
        <TabPane tabId="cancel" className="fade show">
          <ul className="call-log-main">
            <li className="active" onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/2.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <CornerLeftDown className="missed" />
                    3:30 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-danger button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <CornerLeftDown className="missed" />
                    3:10 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-danger button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/2.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <CornerLeftDown className="missed" />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-danger button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <CornerLeftDown className="missed" />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-danger button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/2.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <CornerLeftDown className="missed" />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-danger button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <CornerLeftDown className="missed" />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-danger button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </TabPane>
        <TabPane tabId="incoming" className="fade show">
          <ul className="call-log-main">
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowDownRight />
                    3:10 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/2.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowDownRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowDownRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/2.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowDownRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowDownRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </TabPane>
        <TabPane tabId="outgoing" className="fade show">
          <ul className="call-log-main">
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowUpRight />
                    3:10 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/2.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowUpRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowUpRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile offline"
                  style={{
                    backgroundImage: `url('assets/images/contact/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/2.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowUpRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Phone />
                  </div>
                </div>
              </div>
            </li>
            <li onClick={(e) => callLogMain(e)}>
              <div className="call-box">
                <div
                  className="profile online"
                  style={{
                    backgroundImage: `url('assets/images/contact/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "block",
                  }}
                >
                  <img
                    className="bg-img"
                    src="/assets/images/contact/1.jpg"
                    alt="Avatar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="details">
                  <h5>Jony Lynetin</h5>
                  <h6>
                    {" "}
                    <ArrowUpRight />
                    3:00 pm
                  </h6>
                </div>
                <div className="call-status">
                  <div className="icon-btn btn-outline-success button-effect btn-sm">
                    <Video />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default calls;
