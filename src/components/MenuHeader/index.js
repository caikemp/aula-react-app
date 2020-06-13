import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Categories } from "../../utils/Categories";

import { NavLink as RRNavLink } from "react-router-dom";

const MenuHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Navbar</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/contact">
              Contato
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Produtos
            </DropdownToggle>
            <DropdownMenu right>
              {Categories.map((category) => (
                <DropdownItem key={category.id}>{category.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink tag={RRNavLink} to="/about">
              Sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/admin">
              Adminstrador
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/login">
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MenuHeader;
