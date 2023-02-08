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
                    return <Button>首页</Button>
                }
            },
            {
                key: 2
            },
            {
                key: 3
            },
            {
                key: 3
            }
        ],
    }
    

    render() {
        return (
            <div>
            <Sider collapsible >
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu
                    theme="dark"
                    style={{ width: 256 }}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={this.state.mean_item}
                />
            </Sider>
            </div>
        )
    }
}


export default SiderMean;
