import { useEffect, useState } from "react";
import Landing from "./landing";
import Signin from "./auth/signIn";
import Messener from "./messenger/index";
export default function Home() {
  const [auth, setAuth] = useState(false);
  // useEffect(() => {
  //   const cookie = getCookie("credentials");
  //   cookies.credentials === "undefined" ? setAuth(false) : setAuth(true);
  //   console.log("Credentials", cookie);
  // }, []);

  return <Signin />;
}
