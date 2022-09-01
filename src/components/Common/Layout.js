import { Layout } from 'antd';
import styled from "styled-components";
import { AppHeader } from "./Header";
import { AppFooter } from './Footer';
const StyledLayout = styled.div`
  .ant-breadcrumb-separator {
    color:#fff ;
  }
  .ant-breadcrumb a:hover, .ant-breadcrumb li:last-child, .ant-breadcrumb li:last-child a {
    color:#1890ff;
    font-weight:bold ;
  }
`;
export const AppLayout = ({ children }) => {
  return <>
    <StyledLayout>
      <Layout style={{ background: 'transparent' }}>
        <AppHeader />
        <Layout style={{ background: 'transparent' }}>
          {children}
        </Layout>
        <AppFooter />
      </Layout>
    </StyledLayout>
  </>
}