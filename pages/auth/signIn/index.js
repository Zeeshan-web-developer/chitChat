import React, { useState } from "react";
import { useRouter } from "next/router";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import axios from "../../../api/index";
import Cookies from "universal-cookie";
import { isFormValid } from "./functions";
import chatClient from "../../../stanza/chatClient";
import {
  setUser,
  setUSerStatus,
  setClient,
  setLoginError,
  loginLoding,
} from "../../../redux/actions/index";
const DOMAIN = process.env.NEXT_PUBLIC_REACT_APP_DEFAULT_DOMAIN;
var md5 = require("md5");
const Auth_SignIn = (props) => {
  const loginErrors = useSelector((state) => state.user.loginErrors);
  const loading = useSelector((state) => state.user.loading);
  const router = useRouter();
  const dispatch = useDispatch();
  let AuthToken;
  const [credential, setCredential] = useState({
    username: "",
    password: "",
    accountName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  // simple  login
  const userLogin = async (event) => {
    const { username, password, accountName } = credential;
    event.preventDefault();
    if (isFormValid(username, password, accountName)) {
      dispatch(loginLoding(true));
      verifyKazooCredentials(username, password, accountName);
    } else {
      dispatch(setLoginError("Please Fill all the Fields"));
    }
  };

  const verifyKazooCredentials = async (username, password, accountName) => {
    let encriptedCredentials = md5(username + ":" + password);
    try {
      let res = await axios.put("user_auth", {
        data: {
          credentials: encriptedCredentials,
          account_name: accountName,
        },
      });

      if (res.status === 201) {
        const _username = res.data.data.owner_id + "@" + DOMAIN;
        AuthToken = res.data.auth_token;
        console.log("auth", AuthToken);
        doConnection(_username);
      } else {
        console.log("username or password or accountName wrong");
      }
    } catch (err) {
      console.log("error: " + err);
      dispatch(setLoginError("Invalid Username or Password"));
      dispatch(loginLoding(false));
    }
  };
  const doConnection = (_username) => {
    let client = chatClient(_username, credential.password);

    client.on("auth:success", (msg) => {
      console.log("auth success", msg);
      dispatch(setClient(client));
      dispatch(setUser(credential.username));
      const { username, password } = credential;
      const cookies = new Cookies();
      let d = new Date();
      d.setTime(d.getTime() + 100 * 24 * 60 * 60 * 1000);
      cookies.set(
        "credentials",
        JSON.stringify({
          username,
          password,
          AuthToken,
        }),
        { path: "/", expires: d }
      );

      router.push("/messenger");
    });
    client.on("available", (presence) => dispatch(setUSerStatus("available")));
    client.connect();
  };

  const displayErrors = () =>
    loginErrors.map((error, i) => (
      <Alert key={i} color="danger">
        {error}
      </Alert>
    ));

  const redirectToSignUpPage = () => {
    console.log("signup");
    router.push("/auth/signUp");
  };

  return (
    <div className="login-page1">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 p-0">
            <div className="login-contain-main">
              <div className="left-page">
                <div className="login-content">
                  <div className="login-content-header">
                    <a href="#">
                      <img
                        className="image-fluid"
                        src="/assets/images/logo/landing-logo.png"
                        alt="images"
                      />
                    </a>
                  </div>
                  <h3>Hello Everyone , We are Chitchat</h3>
                  <h4>Welcome to chitchat please login to your account.</h4>
                  {loginErrors.length > 0 && displayErrors()}
                  <form className="form1">
                    <div className="form-group">
                      <label
                        className="col-form-label"
                        htmlFor="inputusername3"
                      >
                        Username
                      </label>
                      <input
                        className="form-control"
                        id="inputusername3"
                        onChange={(e) => handleChange(e)}
                        name="username"
                        value={credential.username}
                        type="username"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="col-form-label"
                        htmlFor="inputPassword3"
                      >
                        Password
                      </label>
                      <span> </span>
                      <input
                        className="form-control"
                        id="inputPassword3"
                        onChange={(e) => handleChange(e)}
                        name="password"
                        type="password"
                        value={credential.password}
                        placeholder="*******"
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label" htmlFor="accountName">
                        Account Name
                      </label>
                      <span> </span>
                      <input
                        className="form-control"
                        id="accountName"
                        onChange={(e) => handleChange(e)}
                        name="accountName"
                        type="text"
                        value={credential.accountName}
                        placeholder="account name"
                      />
                    </div>
                    <div className="form-group">
                      <div className="rememberchk">
                        <div className="input-text form-check pl-0">
                          <input
                            type="checkbox"
                            id="gridCheck1"
                            aria-label="Checkbox for following text input"
                          />
                          <label
                            className="form-check-label ml-2 mr-auto"
                            htmlFor="gridCheck1"
                          >
                            Remember Me.
                          </label>
                          <h6>Forgot Password?</h6>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="buttons">
                        <button
                          disabled={loading}
                          className="btn btn-primary button-effect"
                          onClick={userLogin}
                          type="submit"
                        >
                          {loading && <Spinner color="dark" size="sm" />}
                          Login
                        </button>
                        <button
                          className="btn button-effect btn-signup"
                          onClick={() => redirectToSignUpPage()}
                        >
                          SignUp
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="line">
                    <h6>OR Connect with</h6>
                  </div>
                  <div className="medialogo">
                    <ul>
                      <li>
                        <a
                          className="icon-btn btn-danger button-effect"
                          href="#"
                        >
                          <i className="fa fa-google"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="icon-btn btn-primary button-effect"
                          href="#"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="icon-btn btn-facebook button-effect"
                          href="#"
                        >
                          <i className="fa fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="termscondition">
                    <h4 className="mb-0">
                      <span>*</span>Terms and condition<b>&amp;</b>Privacy
                      policy
                    </h4>
                  </div>
                </div>
              </div>
              <div className="right-page">
                <div className="right-login animat-rate">
                  <div className="animation-block">
                    <div className="bg_circle">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="cross"></div>
                    <div className="cross1"></div>
                    <div className="cross2"></div>
                    <div className="dot"></div>
                    <div className="dot1"></div>
                    <div className="maincircle"></div>
                    <div className="top-circle"></div>
                    <div className="center-circle"></div>
                    <div className="bottom-circle"></div>
                    <div className="bottom-circle1"></div>
                    <div className="right-circle"></div>
                    <div className="right-circle1"></div>
                    <img
                      className="heart-logo"
                      src="/assets/images/login_signup/5.png"
                      alt="login logo"
                    />
                    <img
                      className="has-logo"
                      src="/assets/images/login_signup/4.png"
                      alt="login logo"
                    />
                    <img
                      className="login-img"
                      src="/assets/images/login_signup/1.png"
                      alt="login logo"
                    />
                    <img
                      className="boy-logo"
                      src="/assets/images/login_signup/6.png"
                      alt="login boy logo"
                    />
                    <img
                      className="girl-logo"
                      src="/assets/images/login_signup/7.png"
                      alt="girllogo"
                    />
                    <img
                      className="cloud-logo"
                      src="/assets/images/login_signup/2.png"
                      alt="login logo"
                    />
                    <img
                      className="cloud-logo1"
                      src="/assets/images/login_signup/2.png"
                      alt="login logo"
                    />
                    <img
                      className="cloud-logo2"
                      src="/assets/images/login_signup/2.png"
                      alt="login logo"
                    />
                    <img
                      className="cloud-logo3"
                      src="/assets/images/login_signup/2.png"
                      alt="login logo"
                    />
                    <img
                      className="cloud-logo4"
                      src="/assets/images/login_signup/2.png"
                      alt="login logo"
                    />
                    <img
                      className="has-logo1"
                      src="/assets/images/login_signup/4.png"
                      alt="login logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth_SignIn;
