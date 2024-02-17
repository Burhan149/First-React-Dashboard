
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../index.css';
import { LogIn, Menu, Settings } from "react-feather";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import NavMenu from "../Navbar";
import { myStyle } from "../Styleconfig";

const Layout = ({ children }) => {
  // Offcanvas
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col className="d-none d-md-block side-bar">
            <NavMenu />
          </Col>

          {/* Login */}
          <Col
            className="bg-light login-signup"
            style={{ marginLeft: window.innerWidth > 768 ? "200px" : "0px" }}
          >
            {/* Header */}
            <Row className="m-2 ">
              <Col
                className=" p-3  rounded "
                style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              >
                <div className="d-flex icons-menu ">
                  <div>
                    <div className="d-block d-md-none">
                      <Menu size={20} color="black" onClick={handleShow} />
                    </div>
                  </div>

                  <div className={`${myStyle.FlexCenter} gap-3`}>
                    <div
                      className={`${myStyle.FlexCenter} gap-1`}
                      role="button"
                    >
                      <LogIn size={20} color="black" />
                      Login
                    </div>

                    <div
                      className={`${myStyle.FlexCenter} gap-1`}
                      role="button"
                    >
                      <Settings size={20} color="black" />
                      Settings
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* content */}
            <Row>
              <Col className="p-2 rounded m-3 ">
                  {children}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Layout;
