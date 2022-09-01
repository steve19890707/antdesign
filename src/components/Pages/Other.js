import React from "react";
import styled from "styled-components";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { CompLayout } from "../Common/CompLayout";
// ant component
import { CalendarPart } from "../Common/antPart";

const items = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `other${key}`,
    icon: React.createElement(icon),
    label: `otherNav${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `otherNav${key}Option${j + 1}`,
      };
    }),
  };
});

const StyledOther = styled.div`
  .calendar {
    width:80%;
    margin: 2% auto ;
  }

`;

const costumScheduleList = (value = {}, listData = []) => {
  switch (value.month()) {
    // aug
    case 7:
      switch (value.date()) {
        case 5:
          return listData = [
            {
              type: 'warning',
              content: '8/5 warning event.',
            },
            {
              type: 'success',
              content: 'usual event.',
            },
          ]
        case 15:
          return listData = [
            {
              type: 'warning',
              content: 'This is warning event.',
            },
            {
              type: 'success',
              content: 'This is usual event.',
            },
            {
              type: 'error',
              content: 'This is error event.',
            },
          ];
        case 30:
          return listData = [
            {
              type: 'warning',
              content: 'This is warning event',
            },
            {
              type: 'success',
              content: 'This is very long usual event。。....',
            },
            {
              type: 'error',
              content: 'This is error event 1.',
            },
            {
              type: 'error',
              content: 'This is error event 2.',
            },
            {
              type: 'error',
              content: 'This is error event 3.',
            },
            {
              type: 'error',
              content: 'This is error event 4.',
            },
          ];
        default:
          break;
      }
      break;
    // sep
    case 8:
      switch (value.date()) {
        case 10:
          return listData = [
            {
              type: 'warning',
              content: '9/10 warning event.',
            },
            {
              type: 'success',
              content: 'usual event.',
            },
          ]
        default:
          break;
      }
      break;
    default:
      break;
  }
}
export const Other = () => {
  return <CompLayout
    items={items}
    defaultItem="otherNav1Option1"
    breadcrumb={['other', 'index']}
    children={
      <StyledOther>
        <div className="br">Calendar part:</div>
        <div className="calendar">
          <CalendarPart costumScheduleList={costumScheduleList} />
        </div>
      </StyledOther>
    }>
  </CompLayout>
}