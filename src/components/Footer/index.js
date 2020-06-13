import React from "react";
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap";

const Footer = (props) => {
  return (
    <Row className="border-top mt-4">
      {props.hasMenuBoxOne && (
        <Col md="6">
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Box 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      )}

      {props.hasMenuBoxTwo && (
        <Col md="6">
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Box 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      )}
    </Row>
  );
};

Footer.defaultProps = {
  hasMenuBoxOne: true,
  hasMenuBoxTwo: true,
};

const LINKS = [{ id: 1, link: "/", name: "name" }];
export { LINKS };
export default Footer;
