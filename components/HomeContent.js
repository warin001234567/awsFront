import React, { Component, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Layout from "../components/Layout";

// const tab1Style = styled.input`
//   color: ${({ tab1Status }) =>
//     tab1Status ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)"};
// `;
// const tab2Style = styled.input`
//   color: ${({ tab2Status }) =>
//     tab2Status ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)"};
// `;
// const tab3Style = styled.input`
//   color: ${({ tab3Status }) =>
//     tab3Status ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)"};
// `;
// const tab4Style = styled.input`
//   color: ${({ tab4Status }) =>
//     tab4Status ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)"};
// `;

const HomeContent = (props) => {
  //   const [tab1Status, setTab1Status] = useState(true);
  //   const [tab2Status, setTab2Status] = useState(false);
  //   const [tab3Status, setTab3Status] = useState(false);
  //   const [tab4Status, setTab4Status] = useState(false);

  //   const tab1Checked = () => {
  //     setTab1Status(true);
  //     setTab2Status(false);
  //     setTab3Status(false);
  //     setTab4Status(false);
  //   };
  //   const tab2Checked = () => {
  //     setTab1Status(false);
  //     setTab2Status(true);
  //     setTab3Status(false);
  //     setTab4Status(false);
  //   };
  //   const tab3Checked = () => {
  //     setTab1Status(false);
  //     setTab2Status(false);
  //     setTab3Status(true);
  //     setTab4Status(false);
  //   };
  //   const tab4Checked = () => {
  //     setTab1Status(false);
  //     setTab2Status(false);
  //     setTab3Status(false);
  //     setTab4Status(true);
  //   };

  const toggleSignUp = () => setSignUpModal(!signUpModal);
  return (
    <div>
      {/* ----------- Banner ----------- */}
      <div className="vid-cont" style={{ overflow: "hidden", width: "100%" }}>
        <img
          className="fader"
          id="banner"
          src="../static/images/banner.jpg"
          width="100%"
          style={{ position: "absolute" }}
        />
        <img
          width="30%"
          src="../static/images/trailer_logo.png"
          style={{ position: "absolute", paddingTop: "8%", paddingLeft: "4%" }}
        />
        <p
          className="fader"
          id="release"
          style={{
            color: "white",
            fontSize: "1.4vw",
            position: "absolute",
            paddingTop: "21%",
            paddingLeft: "4%",
            zIndex: 5,
          }}
        >
          Release Date: 09 / 25 / 2019
        </p>
        <p
          className="fader"
          id="detail"
          style={{
            color: "white",
            fontSize: "1vw",
            position: "absolute",
            paddingTop: "24%",
            paddingLeft: "4%",
            zIndex: 5,
            lineHeight: "1.5vw",
          }}
        >
          Tim Goodman, a former Pokémon Trainer
          <br />
          team up with Detective Pikachu, his
          <br />
          father's Pokémon partner to find out what
          <br />
          happened to his father, Harry Goodman.
        </p>
        <video
          id="vid"
          loop
          width="100%"
          style={{ marginTop: "-8%", marginBottom: "-8%" }}
        >
          <source src="../static/videos/pokemon.mp4" type="video/mp4" />
        </video>
      </div>
      {/* ----------- Content ----------- */}
      <div className="tabs">
        <div className="tab-2">
          <tab1Style>
            <label id="ltab2-1" for="tab2-1" style={{ fontSize: "1.5vw" }}>
              Now Showing
            </label>
          </tab1Style>
          <input id="tab2-1" name="tabs-two" type="radio" checked />
          <div id="slide1">
            <div
              className="container-fluid"
              style={{
                paddingLeft: "10vw",
                paddingRight: "10vw",
                marginTop: "2vw",
              }}
            >
              <div className="row">
                <div className="col-sm-3">
                  <div
                    className="card my-1 pt-2 bg-dark text-white text-center"
                    onclick="document.body.style.overflow = 'hidden',document.getElementById('content-pop-wrapper').style.display='block',gradientsize()"
                    style={{ height: "95%", width: "100%", cursor: "pointer" }}
                  >
                    <img
                      src="blog.image"
                      className="card-img-top img-fluid"
                      alt="..."
                      style={{
                        height: "24vw",
                        width: "21vw",
                        objectFit: "contain",
                        marginTop: "0%",
                      }}
                    />
                    <div
                      className="card-body"
                      className="{'bg-dark text-white': blog.color}"
                    >
                      <p
                        className="card-title"
                        style={{ fontSize: "1.2vw", marginTop: "-0.5vw" }}
                      >
                        {/* <%blog.title %> */}
                      </p>
                      <p className="card-text">
                        {/* <% blog.thtitle %><br /> */}
                        <small className="text-muted">
                          Release Date:
                          {/* <% blog.releasedate %> */}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-2">
          <tab2Style>
            <label id="ltab2-2" for="tab2-2" style={{ fontSize: "1.5vw" }}>
              Coming Soon
            </label>
          </tab2Style>
          <input id="tab2-2" name="tabs-two" type="radio" />
          <div id="slide2">
            <div
              className="container-fluid"
              style={{
                paddingLeft: "10vw",
                paddingRight: "10vw",
                marginTop: "2vw",
              }}
            >
              <div className="row">
                <div className="col-sm-3" v-for="blog in blogSearchResult">
                  <div
                    className="card my-3 pt-2 bg-dark text-white text-center"
                    onclick="document.body.style.overflow = 'hidden',document.getElementById('content-pop-wrapper').style.display='block',gradientsize()"
                    style={{ height: "95%", width: "100%", cursor: "pointer" }}
                  >
                    <img
                      src="blog.image"
                      className="card-img-top img-fluid"
                      alt="..."
                      style={{
                        height: "24vw",
                        width: "21vw",
                        objectFit: "contain",
                        marginTop: "0%",
                      }}
                    />
                    <div
                      className="card-body"
                      className="{'bg-dark text-white': blog.color}"
                    >
                      <p
                        className="card-title"
                        style={{ fontSize: "1.2vw", marginTop: "-0.5vw" }}
                      >
                        {/* <% blog.title %> */}
                      </p>
                      <p className="card-text">
                        {/* <% blog.thtitle %> */}
                        <br />
                        <small className="text-muted">
                          Release Date: 22
                          {/* <% blog.releasedate %> */}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-2">
          <tab3Style>
            <label id="ltab2-3" for="tab2-3" style={{ fontSize: "1.5vw" }}>
              IMAX
            </label>
          </tab3Style>
          <input id="tab2-3" name="tabs-two" type="radio" />
          <div id="slide3">
            <div
              className="container-fluid"
              style={{
                paddingLeft: "10vw",
                paddingRight: "10vw",
                marginTop: "2vw",
              }}
            >
              <div className="row">
                <div className="col-sm-3" v-for="blog in blogSearchResult">
                  <div
                    className="card my-3 pt-2 bg-dark text-white text-center"
                    onclick="document.body.style.overflow = 'hidden',document.getElementById('content-pop-wrapper').style.display='block',gradientsize()"
                    style={{ height: "95%", width: "100%", cursor: "pointer" }}
                  >
                    <img
                      src="blog.image"
                      className="card-img-top img-fluid"
                      alt="..."
                      style={{
                        height: "24vw",
                        width: "21vw",
                        objectFit: "contain",
                        marginTop: "0%",
                      }}
                    />
                    <div
                      className="card-body"
                      className="{'bg-dark text-white': blog.color}"
                    >
                      <p
                        className="card-title"
                        style={{ fontSize: "1.2vw", marginTop: "-0.5vw" }}
                      >
                        {/* <% blog.title %> */}
                      </p>
                      <p className="card-text">
                        {/* <% blog.thtitle %> */}
                        <br />
                        <small className="text-muted">
                          Release Date: 33
                          {/* <% blog.releasedate %> */}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-2">
          <tab4Style>
            <label id="ltab2-4" for="tab2-4" style={{ fontSize: "1.5vw" }}>
              4DX
            </label>
          </tab4Style>
          <input id="tab2-4" name="tabs-two" type="radio" />
          <div id="slide4">
            <div
              className="container-fluid"
              style={{
                paddingLeft: "10vw",
                paddingRight: "10vw",
                marginTop: "2vw",
              }}
            >
              <div className="row">
                <div className="col-sm-3">
                  <div
                    className="card my-3 pt-2 bg-dark text-white text-center"
                    onclick="document.body.style.overflow = 'hidden',document.getElementById('content-pop-wrapper').style.display='block',gradientsize()"
                    style={{ height: "95%", width: "100%", cursor: "pointer" }}
                  >
                    <img
                      src="blog.image"
                      className="card-img-top img-fluid"
                      alt="..."
                      style={{
                        height: "24vw",
                        width: "21vw",
                        objectFit: "contain",
                        marginTop: "0%",
                      }}
                    />
                    <div
                      className="card-body"
                      className="{'bg-dark text-white': blog.color}"
                    >
                      <p
                        className="card-title"
                        style={{ fontSize: "1.2vw", marginTop: "-0.5vw" }}
                      >
                        {/* <% blog.title %> */}
                      </p>
                      <p className="card-text">
                        {/* <% blog.thtitle %> */}
                        <br />
                        <small className="text-muted">
                          Release Date: 44
                          {/* <% blog.releasedate %> */}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        #release {
          font-family: "Roboto Condensed";
          letter-spacing: 0.5vh;
        }
        #detail {
          font-family: "Roboto Condensed";
          letter-spacing: 0.3vh;
        }
        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
        }
        .tabs {
          margin-top: 3
          background-color: black;
          display: block;
          display: -webkit-flex;
          display: -moz-flex;
          display: flex;
          -webkit-flex-wrap: wrap;
          -moz-flex-wrap: wrap;
          flex-wrap: wrap;
          margin: 0 4%;
          overflow: hidden;
        }
        .tabs [class^="tab"] label,
        .tabs [class*=" tab"] label {
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          display: block;
          font-size: 1.1em;
          font-weight: 300;
          line-height: 0.1em;
          padding: 2rem 0;
          text-align: center;
        }
        .tabs [class^="tab"] [type="radio"],
        .tabs [class*=" tab"] [type="radio"] {
          border-bottom: 1px solid rgba(239, 237, 239, 0.5);
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          display: block;
          width: 100%;
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
        }
        .tabs [class^="tab"] [type="radio"]:hover,
        .tabs [class^="tab"] [type="radio"]:focus,
        .tabs [class*=" tab"] [type="radio"]:hover,
        .tabs [class*=" tab"] [type="radio"]:focus {
          border-bottom: 1px solid rgb(28, 14, 150);
        }

        .tabs [class^="tab"] label:hover,
        .tabs [class*=" tab"] label:hover {
          color: rgba(255, 255, 255, 1);
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
        }
        .tabs [class^="tab"] [type="radio"]:checked,
        .tabs [class*=" tab"] [type="radio"]:checked {
          border-bottom: 2px solid rgb(28, 14, 150);
          box-shadow: 0 0 0 0 rgb(28, 14, 150) inset, 0 0 0 1px rgb(28, 14, 150);
        }
        .tabs [class^="tab"] [type="radio"]:checked + div,
        .tabs [class*=" tab"] [type="radio"]:checked + div {
          opacity: 1;
        }
        .tabs [class^="tab"] [type="radio"] + div,
        .tabs [class*=" tab"] [type="radio"] + div {
          display: block;
          opacity: 0;
          padding: 2rem 0;
          width: 90%;
          -webkit-transition: all 0.3s ease-in-out;
          -moz-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }
        .tabs .tab-2 {
          width: 25%;
        }
        .tabs .tab-2 [type="radio"] + div {
          width: 400%;
          margin-left: 400%;
        }
        .tabs .tab-2 [type="radio"]:checked + div {
          margin-left: 0;
        }
        .tabs .tab-2 [type="radio"] + #slide2 {
          margin-left: 300%;
        }
        .tabs .tab-2 [type="radio"]:checked + #slide2 {
          margin-left: -100%;
        }
        .tabs .tab-2 [type="radio"] + #slide3 {
          margin-left: 400%;
        }
        .tabs .tab-2 [type="radio"]:checked + #slide3 {
          margin-left: -200%;
        }
        .tabs .tab-2:last-child [type="radio"] + div {
          margin-left: 500%;
        }
        .tabs .tab-2:last-child [type="radio"]:checked + div {
          margin-left: -300%;
        }
      `}</style>
    </div>
  );
};

export default HomeContent;
