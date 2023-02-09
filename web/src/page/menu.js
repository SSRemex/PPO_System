import React from "react";
import {Menu, Layout, Button} from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const {Sider} = Layout



class SiderMean extends React.Component {

    state = {
        mean_item: [
            {
                key: 1,
                label: () => {
                    return <Button href="/projectSource">项目上游</Button>
                }
            },
            {
                key: 2,
                label: () => {
                    return <Button href="/projectProgress">项目进度</Button>
                }
            },
            {
                key: 3,
                label: () => {
                    return <Button href="/memberManager">成员管理</Button>
                }
            }
        ],
    }
    

    render() {
        return (
            <Sider collapsible >
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu
                    theme="dark"
                    style={{ width: 256 }}
                    mode="inline"
                    items={this.state.mean_item}
                />
            </Sider>
        )
    }
}


export default SiderMean;
