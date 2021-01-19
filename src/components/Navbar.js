import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { MenuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

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
  z-index: 100;
  position: flex;
  padding: 1rem 2rem;
  position: fixed;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 25px;
    width: 25px;
    margin: auto 0px;
    cursor: pointer;
  }
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

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">EX</Logo>
      <MenuBars onClick={toggle} />
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
