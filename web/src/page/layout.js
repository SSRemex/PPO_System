import React, { useState } from 'react';


import { Breadcrumb, Layout, Menu, theme } from 'antd';
import RouterConfig from './router';

const { Header, Content, Footer, Sider } = Layout;






class App extends React.Component {

    state = {
        sider_collapsed: true,
    };



    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
              
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