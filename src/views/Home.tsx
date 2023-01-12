import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigateTo = useNavigate()

    const menuClick = (e:{key:string})=>{
        console.log("Clicked!!", e.key);

        //jump to corresponding router. Using hook jump to new page
        navigateTo(e.key)
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Left Side Bar */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
            </Sider>
            {/* Right Content */}
            <Layout className="site-layout">
                {/* Header */}
                <Header className="site-layout-background" style={{ paddingLeft: '16px' }}>
                    {/* Breadcrumb */}
                    <Breadcrumb style={{ lineHeight: '64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* Text Box*/}
                <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
                    {/* working window - outlet*/}
                    <Outlet />
                </Content>
                {/* Footnote */}
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px'}}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;