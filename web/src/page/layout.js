import React, { useState } from 'react';
import SiderMean from './menu';
import { Breadcrumb, Layout, Button, Menu } from 'antd';
import RouterConfig from './router';

const { Header, Content, Footer, Sider } = Layout;






class App extends React.Component {

    state = {
        sider_collapsed: true,
        mean_item: [
          {
              key: "1",
              label: <Button block type="link" href="/#/projectSource">项目上游</Button>
          },
          {
              key: "2",
              label: <Button block type="link" href="/#/projectProgress">项目进度</Button>

          },
          {
              key: "3",
              label: <Button block type="link" href="/#/memberManager">成员管理</Button>
              
          }
      ],
    };



    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsible >
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }}>
                  <Button href='/'></Button>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    items={this.state.mean_item}
                />
            </Sider>
              <Layout className="site-layout">
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                  <RouterConfig />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
              </Layout>
            </Layout>
          );
    }
  
};

export default App;