import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { MenuData } from "../data/MenuData";
import { Button } from "./Button";

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 0rem 1rem;
  text-decoration: none;
`;
// ----------------------------------

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background: red;
  z-index: 100;
  position: flex;
  padding: 1rem 2rem;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
const MenuBars = styled.i`
  display: none;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">EX</Logo>
      <MenuBars></MenuBars>
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primay={true}>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};
export default Navbar;
