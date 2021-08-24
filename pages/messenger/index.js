import { Fragment, useState } from "react";
import LeftSide from "../../containers/leftSidebar";
import Chitchat from "../../containers/chatBoard";
import RightSide from "../../containers/rightSidebar";
import ThemeCustomizer from "../../containers/themeCustomizer";
import { parseCookies } from "nookies";
import withAuth from "../withAuth";
function Home() {
  return (
    <Fragment>
      <div className="chitchat-container sidebar-toggle ">
        <LeftSide />
        <Chitchat />
        <RightSide />
      </div>
      <ThemeCustomizer />
    </Fragment>
  );
}
export default Home;
