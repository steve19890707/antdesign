import React, { useState } from "react";
import styled from "styled-components";
import moment from 'moment';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { CompLayout } from "../Common/CompLayout";
// ant component
import { ButtonPart, RangePickerPart } from "../Common/antPart";

const items = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `aboutUs${key}`,
    icon: React.createElement(icon),
    label: `aboutUsNav${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `aboutUsNav${key}Option${j + 1}`,
      };
    }),
  };
});

const StyledAboutUs = styled.div``;
export const AboutUs = () => {
  const [dateRang, setDateRange] = useState({
    start: "2022/08/29",
    end: "2022/09/29"
  })
  const [alertStatus, setAlertStatus] = useState(false);
  return <CompLayout
    items={items}
    defaultItem="aboutUsNav1Option1"
    breadcrumb={['about us', 'index']}
    alertProps={{
      message: "Current Date Range",
      description: `start:${dateRang.start}, end:${dateRang.end}`,
      type: "success"
    }}
    alertStatus={alertStatus}
    children={
      <StyledAboutUs>
        <div className="br">datepicker part:</div>
        <RangePickerPart
          defaultDate={{
            start: dateRang.start,
            end: dateRang.end
          }}
          onChange={(e) => {
            const startDate = moment(e[0]).format('YYYY/MM/DD');
            const endDate = moment(e[1]).format('YYYY/MM/DD');
            setDateRange({
              start: startDate,
              end: endDate
            })
          }} />
        <div className="br">button part:</div>
        <ButtonPart
          btnValue="check date props"
          alertStatus={alertStatus}
          onClick={() => {
            if (alertStatus) {
              return
            } else {
              setAlertStatus(true)
              const timeout = setTimeout(() => {
                setAlertStatus(false)
                return () => clearTimeout(timeout)
              }, 3000);
            }
          }}
        />
      </StyledAboutUs>
    }>
  </CompLayout>
}