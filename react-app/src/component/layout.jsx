// import React from 'react';
// import React from '@vitejs/plugin-react'
// import { defineConfig } from "vite.config.js"
import {  Layout, Menu, theme } from 'antd';
// import { Children } from 'react';
import { useNavigate } from 'react-router-dom';
const { Header, Content } = Layout;

const items = [
    // {
    //     label:"Home",
    //     key:"/home"
    // },
    // {
    //     label:"Counter",
    //     key:"/counter"
    // },
    // {
    //     label:"TodoApp",
    //     key:"/Todo"
    // },
    // {
    //     label:"Contact",
    //     key:"/contact"
    // },
    {
      label:"SignUpPage",
      key:"/signup"
  },
  {
    label:"LoginPage",
    key:"/login"
},
// {
//   label:"Profile",
//   key:"/profile"
// },

]

const AppLayout = (children) => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

const navigate = useNavigate();

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
        onClick={(data)=>{
            // console.log(data);
            navigate(data.key);
        }   
        }
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <div
          style={{
            padding: 15,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {children}
        </div>
      </Content>
      {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};
export default AppLayout;