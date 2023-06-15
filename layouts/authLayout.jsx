/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {
    HomeOutlined,
    UserAddOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: '/admin/dashboard',
        label: <NavLink
            to={"/admin/dashboard"}>
            Dashboard
        </NavLink>,
        icon: <HomeOutlined />,
    },
    {
        key: '/admin/members',
        label: <NavLink
            to={"/admin/members"}>
            Members
        </NavLink>,
        icon: <UserAddOutlined />,
    },

];

function authLayout() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            background: colorBgContainer,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}

export default authLayout