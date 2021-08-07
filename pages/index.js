import { useEffect, useState } from "react";
import Landing from "./landing";
import Signin from "./auth/signIn";
import Messener from "./messenger/index";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
export default function Home() {
  const [cookies, getCookie] = useCookies(["credentials"]);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    getCookie("credentials");
    cookies.credentials === "undefined" ? setAuth(false) : setAuth(true);
  }, []);

  return (
    <CookiesProvider>
      {/* {auth ? <Messener credentials={cookies.credentials} /> : <Signin />} */}
      <Signin />
    </CookiesProvider>
  );
}
