import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

import Header from "./Header";
import Meta from "./Meta";

const theme = {
  black: "#0C0C0C",
  grey: "#3A3A3A",
  greyLight: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0,.09"
};

injectGlobal`
  @font-face {
    font-family: 'EB Garamond';
    src: url('/static/EBGaramond-Regular.woff') format('woff2');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: 'EB Garamond';
    src: url('/static/EBGaramond-SemiBold.woff') format('woff2');
    font-style: normal;
    font-weight: bold;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing:  inherit;
  }

  body {
    font-family: 'EB Garamond';
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  color: ${props => props.theme.black};
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem;
`;

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
