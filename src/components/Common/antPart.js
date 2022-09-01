import { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Affix, Button, Dropdown, Menu, AutoComplete, DatePicker, Space, Alert, Badge, Calendar, Timeline } from 'antd';
import moment from 'moment';
import cx from "classnames";
import styled from "styled-components";
import { noop } from 'lodash';

// Button
const StyledButton = styled.div`
  &.timeout button {
    color: #bfbfbf;
    pointer-events: none;
  }
`;
export const ButtonPart = ({
  btnValue = 'Default Button',
  alertStatus = false,
  onClick = () => { }
}) => {
  return <StyledButton className={cx({ timeout: alertStatus })}>
    <Button onClick={onClick}>{btnValue}</Button>
  </StyledButton>
}

// Alert
export const AlertPart = ({
  message = "Tips",
  description = "",
  type = "success"
}) => {
  const cssStyle = {
    'position': 'fixed',
    'zIndex': 99,
    'top': '25px',
    'left': '50%',
    'transform': 'translateX(-50%)',
    'width': '450px'
  }
  return <div style={cssStyle}>
    <Alert
      message={message}
      description={description}
      type={type}
      showIcon
      closable
      onClose={(e) => { }}
    />
  </div>
}

// Affix
export const AffixPart = ({
  offsetTop = 15,
  type = 'primary',
  content = 'Affix top',
  onClick = () => { }
}) => {
  return <Affix offsetTop={offsetTop}>
    <Button type={type} onClick={onClick}>
      {content}
    </Button>
  </Affix>
}


// Dropdown
export const DropdownPart = ({
  items = [],
  placement = 'bottom',
  dropdownName = 'Dropdown'
}) => {
  const menu = (
    <Menu
      items={items}
    />
  );
  return <Dropdown
    overlay={menu}
    placement={placement}
    arrow={{
      pointAtCenter: true,
    }}
  >
    <Button>{dropdownName}</Button>
  </Dropdown>
};

// AutoComplete input
const { Option } = AutoComplete;
export const AutoCompleteInputPart = ({
  width = 200,
  placeholder = 'input here',
  array = ['gmail.com', 'fresco.com', 'steve.com']
}) => {
  const [result, setResult] = useState([]);
  const handleSearch = (value) => {
    let res = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = array.map((domain) => `${value}@${domain}`);
    }

    setResult(res);
  };
  return <AutoComplete
    style={{
      width: width,
    }}
    onSearch={handleSearch}
    placeholder={placeholder}
  >
    {result.map((email) => (
      <Option key={email} value={email}>
        {email}
      </Option>
    ))}
  </AutoComplete>
};

// DatePicer
const { RangePicker } = DatePicker;
export const RangePickerPart = ({
  dateFormat = "YYYY/MM/DD",
  defaultDate = {
    start: "2023/01/01",
    end: "2023/01/01"
  },
  onChange = () => { }
}) => {
  return <Space direction="vertical" size={12}>
    <RangePicker
      defaultValue={[moment(defaultDate.start, dateFormat), moment(defaultDate.end, dateFormat)]}
      format={dateFormat}
      onChange={onChange}
    />
  </Space>
}

// Calendar
const getListData = (value, costumScheduleList = noop) => {
  let listData;
  return costumScheduleList(value, listData) || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const StyleEvents = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  .ant-badge-status {
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .notes-month {
    font-size: 28px;
    text-align: center;
  }
  .notes-month section {
    font-size: 28px;
  }
`;
export const CalendarPart = ({ costumScheduleList = noop }) => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value, costumScheduleList);
    return (
      <StyleEvents>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </StyleEvents>
    );
  };
  return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
};

// Timeline
export const TimelinePart = ({ timeline = [] }) => {
  return <Timeline mode="alternate">
    {timeline.map((v, k) => {
      if (v.ClockCircle) {
        return <Timeline.Item key={k} color={v.color}
          dot={
            <ClockCircleOutlined
              style={{
                fontSize: '16px',
              }}
            />
          }
        >{v.content}</Timeline.Item>
      } else {
        return <Timeline.Item key={k} color={v.color}>{v.content}</Timeline.Item>
      }
    })}
  </Timeline>
}