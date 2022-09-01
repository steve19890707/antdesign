import { Layout, Menu } from 'antd';
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const StyledLogo = styled.div`
  position: relative;
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  &:before {
    content:'LOGO' ;
    position: absolute;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    width:100%;
    height:100% ;
    transform:translate(-50%,-50%) ;
    top:50% ;
    left:50% ;
    color:#fff ;
    font-weight:bold ;
    font-size:20px ;
  }
`;
export const AppHeader = () => {
  const headerNav = [
    'Home',
    'About-Us',
    'Product',
    'Other'
  ]
  const pathname = useLocation().pathname;
  const fetchPathname = () => {
    switch (pathname) {
      case '/about-us':
        return '2';
      case '/product':
        return '3';
      case '/other':
        return '4';
      default:
        return '1';
    }
  }
  return <Header>
    <StyledLogo />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[fetchPathname()]}
      items={headerNav.map((value, index) => {
        const key = index + 1;
        return {
          key,
          label: (
            <Link to={`/${headerNav[index].toLowerCase()}`}>
              {value}
            </Link>
          ),
        };
      })}
    />
  </Header>

}