import React from "react";
import styled from "styled-components";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { CompLayout } from "../Common/CompLayout";
// ant component
import { AffixPart, DropdownPart, AutoCompleteInputPart, TimelinePart } from "../Common/antPart";

const items = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `home${key}`,
    icon: React.createElement(icon),
    label: `homeNav${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `homeNav${key}Option${j + 1}`,
      };
    }),
  };
});

const StyledHome = styled.div`
.timeline {
  width:50% ;
  margin:0 auto 0 0;
  border-radius:8px ;
  padding: 50px 30px;
  box-sizing:border-box ;
  background-color:#fff ;
}

`;
export const Home = () => {
  return <CompLayout
    items={items}
    defaultItem="homeNav1Option1"
    breadcrumb={['home', 'index']}
    children={
      <StyledHome>
        <div className="br">affix part:</div>
        <AffixPart onClick={() => console.log('Affix')} />
        <div className="br">dropdown part:</div>
        <DropdownPart items={[
          {
            key: '1',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st link
              </a>
            ),
          },
          {
            key: '2',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd link
              </a>
            ),
          },
          {
            key: '3',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd link
              </a>
            ),
          },
        ]} />
        <div className="br">autoComplete input part(E-mail):</div>
        <AutoCompleteInputPart
          placeholder="typing your email"
        />
        <div className="br">time line part:</div>
        <div className="timeline">
          <TimelinePart
            timeline={[
              {
                color: '#1890ff',
                ClockCircle: false,
                content: 'Create a services site 2022-08-30'
              },
              {
                color: 'green',
                ClockCircle: false,
                content: 'Create a services site 2022-09-01'
              },
              {
                color: '#1890ff',
                ClockCircle: true,
                content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
              },
              {
                color: 'red',
                ClockCircle: false,
                content: 'Network problems being solved 2022-09-03'
              },
              {
                color: '#1890ff',
                ClockCircle: true,
                content: 'Technical testing 2022-09-10'
              },
            ]}
          />
        </div>
      </StyledHome >
    }>
  </CompLayout >
}