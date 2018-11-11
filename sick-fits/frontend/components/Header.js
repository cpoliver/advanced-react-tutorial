import React from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import styled from "styled-components";

import Nav from "./Nav";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin-left: 2rem;
  z-index: 2;

  h1 {
    font-size: 4rem;
  }

  a {
    color: ${props => props.theme.black};
    padding: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  img {
    align-self: center;
    height: 64px;
    margin-right: 1rem;
  }

  @media (max-w9dth: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    align-items: stretch;
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;

    @media (max-widthl 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }

  .sub-bar {
    border-bottom: 1px solid ${props => props.theme.greyLight};
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <img src="/static/old-crow-logo.png" />
        <div>
          <Link href="/">
            <h1>
              <a>Old Crow</a>
            </h1>
          </Link>
        </div>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;
