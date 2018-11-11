import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

import Header from "./Header";
import Meta from "./Meta";

const theme = {
  red: "tomato",
  black: "#393939",
  grey: "#3A3A3A",
  greyLight: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0,.09"
};

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
