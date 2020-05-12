import React from 'react';
import styled from 'styled-components';
import './App.css';
// import logo from './ /images/logotextthing.png'
import logo from './images/logotextthin.png'

const NavbarContainerComputer = styled.div`
  margin: auto;
  height: 4.5em;
  position: relative;
  border-bottom: solid 1.5px #bdbdbd;
  opacity: 0.48;
  background-color: yellow;
  z-index: 1000;
  height: 4.5em;
  width: 100%;
  transition-duration: 1.5s;
`

const NavbarLogo = styled.div`
  height: 100%;
  float: left;
  padding: 10px 0;
  margin: 0 0 0 20px;

  a img {
    max-height: 100%;
  }
  
`

const NavLink = styled.a(
  `
  .nav-link {
    position: relative;
  }

  .nav-link:after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 0%;
    height: 3px;
    display: block;
    margin-top: 1px;
    right: 0;
    /* background: #fff; */
    opacity: 1;
    background: var(--HyperloopRed);
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  `
)

const NavMenu = styled.nav`
  float: right;
  height: 100%;
  min-width: 60%;
  position: relative;
  right: 0%;
  
  ul {
    list-style: none;
    height: 80%;
    top: 10%;
    text-decoration: none;
    position: relative;
    display: flex;
    margin-right: 1.5em;
  }

  ul li {
    text-decoration: none;
    text-transform: uppercase;
    margin: auto;
    padding: 0 15px 0 15px;
    display: inline-block;
  }
`

function Header() {
  return (
    <header>
        <NavbarContainerComputer>
          <NavbarLogo>
            <a href="https://hyperloop.cornell.edu"><img
                src= {logo} alt="Hyperloop Logo"
                /></a>
          </NavbarLogo>
          <NavMenu>
            <ul>
              <li><NavLink href = "https://hyperloop.cornell.edu/about" >About</NavLink></li>
              <li><NavLink href = "https://hyperloop.cornell.edu/team">Team</NavLink></li>
              <li><NavLink href = "https://hyperloop.cornell.edu/design">Design</NavLink></li>
              <li><NavLink href = "https://hyperloop.cornell.edu/sponsors">Sponsors</NavLink></li>
            </ul>
        </NavMenu>
        </NavbarContainerComputer>
        </header>
  );
}

export default Header;
