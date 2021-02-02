import React, { useState, useEffect } from "react";
import Main from "../components/layout/main";
import { Form, Space, Input, Button, message, Image } from "antd";
import { register, login } from "./api/api";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Login() {
  const initAccountInfo = {
    email: "",
    password: "",
  };

  const [buttonState, setButtonState] = useState(false);
  const [accountInfo, setAccountInfo] = useState(initAccountInfo);
  const handleEmail = (e) => {
    setAccountInfo({
      ...accountInfo,
      email: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setAccountInfo({
      ...accountInfo,
      password: e.target.value,
    });
  };

  const handleSignup = () => {
    register(accountInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        // message.info(err);
      })
      .finally(() => {});
  };

  const handleLogin = () => {
    login(accountInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        // message.info(err);
      })
      .finally(() => {});
  };

  useEffect(() => {
    if (accountInfo.account !== "" && accountInfo.password !== "") {
      return setButtonState(true);
    }
    setButtonState(false);
  }, [accountInfo]);

  return (
    <Main>
      <Form style={{ textAlign: "center" }}>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          style={{ borderRadius: "100%" }}
        />
        <Form.Item>
          <Input
            size="large"
            placeholder="請輸入信箱"
            onChange={handleEmail}
            value={accountInfo.email || ""}
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
            size="large"
            placeholder="請輸入密碼"
            onChange={handlePassword}
            value={accountInfo.password || ""}
            allowClear
          />
        </Form.Item>

        <Form.Item>
          <Space size={[8, 16]} wrap>
            <Button
              type="primary"
              size="large"
              onClick={handleLogin}
              disabled={!buttonState}
            >
              登入
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={handleSignup}
              disabled={!buttonState}
            >
              註冊
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Main>
  );
}
export default Login;
