import React, { Component, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Nav, Form, FormControl } from "react-bootstrap";

const Navbar = () => (
  <div>
    <Nav
      className={
        "solid-nav pt-3 navbar navbar-expand-lg justify-content-between"
      }
      style={{ position: "fixed", width: "100%", zIndex: 10 }}
    >
      <Link href="./">
        <a class="navbar-brand m-0 pl-3">
          <img
            id="logo"
            src="../static/logos/logo.png"
            style={{ width: "60%" }}
          />
        </a>
      </Link>
      <Form inline className=" my-2 my-lg-0" id="login-cont">
        <a
          id="signinbtn"
          className="mr-4 text-white"
          onClick="document.getElementById('modal-wrapper').style.display='block',signin()"
          style={{ cursor: "pointer" }}
        >
          SIGN IN
        </a>
        <a
          id="signupbtn"
          className="mr-3 text-white"
          onClick="document.getElementById('modal-wrapper').style.display='block',signup()"
          style={{ cursor: "pointer" }}
        >
          SIGN UP
        </a>
        <FormControl
          type="text"
          aria-label="Search"
          className="mr-2 myform pl-2 pb-1"
          style={{
            height: "5%",
            width: "13vw",
            borderRadius: "45px / 45px",
          }}
        />
        <i
          className="fa fa-search fa-sm m-0"
          style={{ color: "white", cursor: "pointer" }}
          aria-hidden="true"
        ></i>
      </Form>
    </Nav>
  </div>
);

export default Navbar;
