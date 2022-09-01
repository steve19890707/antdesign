import "reset-css";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background:#22282e;
    color:#fff;
  }
  .br {
    padding:20px 0;
    color:#8e8e8e ;
    &:nth-child(1){
      padding:0 0 20px 0 ;
    }
  }
  .loader {
    display:flex ;
    align-items:center ;
    justify-content:center ;
    margin-top:20px ;
  }
`;
const StyledApp = styled.div`
`;

export const App = () => {
  return <StyledApp>
    <GlobalStyle />
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </StyledApp>
};