import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../index.css";
import { LogIn, Menu, Settings } from "react-feather";
import { myStyle } from "./Styleconfig";
const App = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="d-none d-md-block side-bar " style={{marginLeft : window.innerWidth >768 ? '200px' :'0px'}}>
          <div className="nav-links d-flex flex-column">
            <span>Dashboard</span>
            <span>Profile</span>
            <span>Wholesale</span>
            <span>Invoice</span>
          </div>
        </Col>

        {/* Login */}
        <Col className="bg-light login-signup">
          <Row className="m-2 ">

            <Col
              className=" p-3 mb-3 rounded "
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            >
              <div className="d-flex icons-menu ">
                <div>
                  <div className="d-block d-md-none">
                    <Menu size={20} color="black" />
                  </div>
                </div>
                 
                <div className={`${myStyle.FlexCenter} gap-3`}>

                 <div className={`${myStyle.FlexCenter} gap-1`} role="button">
                  <LogIn size={20} color="black" />
                  Login
                 </div>

                 <div className={`${myStyle.FlexCenter} gap-1`} role="button">
                  <Settings size={20} color="black" />
                  Settings
                 </div>

                </div>

              </div>
            </Col>
          </Row>


          {/* content */}
          <Row>
            <Col className="bg-secondary">Content</Col>
          </Row>

        </Col>
      </Row>
    </Container>
  );
};

export default App;
