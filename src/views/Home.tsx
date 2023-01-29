import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet} from "react-router-dom"
import MainMenu from "@/components/MainMenu" //import LeftSideMenu from components

const { Header, Content, Footer, Sider } = Layout;


const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const navigateTo = useNavigate()

    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* Left Side Bar */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo">ABC-Management</div>

                <MainMenu></MainMenu>
            </Sider>
            {/* Right Side Content */}
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