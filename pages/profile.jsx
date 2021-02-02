import Main from "../components/layout/main";
import React, { useState } from "react";
import {
  Space,
  Input,
  Select,
  // DatePicker,
  // message,
  // Alert,
  allowClear,
  Button,
} from "antd";
import {
  SmileTwoTone,
  MailFilled,
  MobileFilled,
  BankFilled,
} from "@ant-design/icons";

function Profile() {
  const { Option } = Select;
  const [date, setDate] = useState(null);

  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <Main>
      <h1>會員頁</h1>
      <Input
        size="large"
        placeholder="請輸入暱稱"
        allowClear
        prefix={<SmileTwoTone />}
      />
      <Input
        size="large"
        placeholder="請輸入信箱"
        disabled
        prefix={<MailFilled />}
      />
      <Input
        size="large"
        placeholder="請輸入電話"
        allowClear
        maxLength="10"
        prefix={<MobileFilled />}
      />

      {/* <DatePicker size="large" onChange={handleChange} />
      <Alert
        message="Selected Date"
        description={date ? date.format("YYYY-MM-DD") : "None"}
      /> */}

      <Input.Group compact>
        <Select defaultValue="0">
          <Option value="0">請選擇銀行代碼</Option>
          <Option value="812">台新銀行</Option>
        </Select>
        <Input size="large" placeholder="銀行代碼" />
      </Input.Group>
      <Input
        size="large"
        placeholder="銀行帳號"
        allowClearprefix={<BankFilled />}
      />

      <Space size={[8, 16]} wrap>
        <Button type="primary" size="large">
          儲存
        </Button>
        <Button type="primary" size="large">
          取消
        </Button>
      </Space>
    </Main>
  );
}
export default Profile;
