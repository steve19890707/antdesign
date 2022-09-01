import React from 'react';
import { Breadcrumb, Layout } from 'antd';
// ant component
import { AlertPart } from "../Common/antPart";
import { Aside } from "./Aside";
const { Content } = Layout;

export const CompLayout = ({
  items = [],
  defaultItem = "",
  breadcrumb = [
    "pageName",
    "pageOption"
  ],
  alertProps = {
    message: "Tips",
    description: "",
    type: "success"
  },
  alertStatus = false,
  AlertOnClose = () => { },
  children
}) => {
  return <>
    <Aside items={items} defaultItem={defaultItem} />
    <Content
      style={{
        padding: '0 30px 30px 30px',
        margin: 0,
        boxSizing: 'border-box',
        minHeight: 'calc(100vh - 124px)',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
          color: '#fff',
          fontSize: '16px',
        }}
      >
        {breadcrumb.map((v, k) => <Breadcrumb.Item key={k}>{v}</Breadcrumb.Item>
        )}
      </Breadcrumb>
      {children}
      {alertStatus && <AlertPart
        message={alertProps.message}
        description={alertProps.description}
        type={alertProps.type}
      />}
    </Content>
  </>
}