import React, { Component, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Nav, Form, FormControl } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import * as authActions from "../store/action/auth";

const Navbar = (props) => {
  const { buttonLabel, className } = props;
  const dispatch = useDispatch();

  const authHandler = async () => {
    let action = authActions.signup("qazwsxedc", "qwerty");
    try {
      const test = await dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };

  const [modal, setModal] = useState(false);

  const toggleSignIn = () => setModal(!modal);

  return (
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
            onClick={toggleSignIn}
            style={{ cursor: "pointer" }}
          >
            {" "}
            SIGN IN
          </a>
          <a
            id="signupbtn"
            className="mr-3 text-white"
            // onClick={toggleSignUp}
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
      <Modal isOpen={modal} toggle={toggleSignIn} className={className}>
        <ModalHeader toggle={toggleSignIn}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              authHandler();
              toggleSignIn();
            }}
          >
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggleSignIn}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Navbar;
