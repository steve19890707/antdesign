import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export const Aside = ({ items = [], defaultItem = "" }) => {
  return <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={[defaultItem]}
      style={{
        height: '100%',
        borderRight: 0,
      }}
      items={items}
    />
  </Sider>
}

