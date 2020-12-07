import React, { useState } from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import { SignInForm } from "../../modules/Forms/SignInForm";

const tabList = [
  {
    key: 'Sign In',
    tab: 'Sign In',
  },
  {
    key: 'Sign Up',
    tab: 'Sign Up',
  },
];

const AuthLayout = (props) => {
  const [key, setKey] = useState('Sign In');
  const onTabChange = (key) => {
    setKey(key);
  };
  return (
    <div>
      <img src="/logo.jpeg" alt="" />
      <Card
          style={{ width: '100%' }}
          title={key}
          tabList={tabList}
          activeTabKey={key}
          onTabChange={key => {
            onTabChange(key, 'key');
          }}
        >
          {key === 'Sign In' ? <SignInForm /> : ""}
        </Card>
    </div>
  );
};

export default AuthLayout;
