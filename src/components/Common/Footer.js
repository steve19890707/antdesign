import { Layout } from 'antd';
import styled from "styled-components";
const { Footer } = Layout;

const StyledAppFooter = styled.div``;

export const AppFooter = () => {
  return <Footer
    style={{
      textAlign: 'center',
      background: '#434b53',
      color: '#fff'
    }}>
    <StyledAppFooter>
      Steve Design ©2022 Created by Ant UED
    </StyledAppFooter>
  </Footer>
}