import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import "../public/assets/scss/color.scss";
import { ToastContainer } from "react-toastify";
import ChatContextProvider from "../helpers/chatContext/chatCtx";
import CustomizerContextProvider from "../helpers/customizerContext/customizerCtx";
import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store/store";
import store from "../redux/store/store";
export default function MyAppComponent({ Component, pageProps }) {
  const router = useRouter();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.body.classList.add("sidebar-active");

    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Chitchat</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Chitchat" />
        <meta name="keywords" content="Chitchat" />
        <meta name="author" content="Chitchat" />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          type="text/scss"
          href=""
          media="screen"
          id="color"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,600&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      {loader && (
        <div className="chitchat-loader">
          <div>
            <img src="/assets/images/logo/logo_big.png" alt="" />
            <h3>Simple, secure messaging for fast connect to world..!</h3>
          </div>
        </div>
      )}
      <div>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
          <CustomizerContextProvider>
            <ChatContextProvider>
              <Component {...pageProps} />
            </ChatContextProvider>
          </CustomizerContextProvider>
          <ToastContainer />
          {/* </PersistGate> */}
        </Provider>
      </div>
    </Fragment>
  );
}
