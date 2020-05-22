import React, { useEffect } from "react";
// import Navbar from "../components/Navbar";
import Head from "next/head";
import Layout from "../components/Layout";
import { createStore } from "redux";
import authReducer from "../store/reducer/auth";
import { Provider } from "react-redux";

const store = createStore(authReducer);

const App = (props) => {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>.Ticket Cineplex</title>
          <link rel="icon" type="image/png" href="resource/icon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Quicksand|Roboto+Condensed"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Mitr"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Kanit"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            crossorigin="anonymous"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
          <link rel="stylesheet" type="text/css" href="/css/style.css" />
        </Head>
        <Layout></Layout>
      </div>
    </Provider>
  );
};

export default App;
