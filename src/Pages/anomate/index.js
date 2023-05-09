import React, { useState } from "react";
import {
  Button,
  Col,
  Layout,
  Menu,
  Row,
  Space,
  Badge,
  Avatar,
  Dropdown,
  Tabs,
} from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  MailOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SendOutlined,
  UsergroupDeleteOutlined,
  LogoutOutlined,
  UserOutlined,
  BellOutlined,
  RightOutlined,
  TableOutlined,
} from "@ant-design/icons";
import avatarImage from "./user.png";
import contentImage from "./images.png";

const { Header, Sider } = Layout;
const { SubMenu } = Menu;
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Overview`,
    children: (
      <div>
        <h3>Create your campaign</h3>
        <p>
          Increase the customer lifetime value by remarketing new products to
          existing customers.
        </p>
        <Row>
          <Col span={2}></Col>
          <Col
            span={22}
            style={{
              marginTop: "50px",
              textAlign: "center",
              marginLeft: "100px",
            }}
          >
            <h3>Let’s create your campaign!</h3>
            <p>
              We need some input from you. More instructions we want to give to
              the client. Eget lacinia ultricies cursus quis.
            </p>
            <div style={{ marginTop: "50px" }}>
              <img
                src={contentImage}
                alt="User Image"
                style={{ height: "200px", width: "200px" }}
              />{" "}
              <br />
              <Button
                style={{
                  borderRadius: "4px",
                  border: "solid 1px #9254DE",
                  color: "#9254DE",
                }}
                shape="round"
                size="large"
                outline
              >
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    ),
  },
  {
    key: "2",
    label: `User activities`,
    children: ` `,
  },
];
const Anomate = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const notificationCount = 3;
  const avatarMenu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Layout>
        <Header
          className="header"
          style={{
            boxShadow: "0px 0px 8px 0px #ccc",
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "#fff",
            padding: "0 16px",
            marginBottom: "100px",
          }}
        >
          <Row>
            <Col>
              <div className="logo" />
            </Col>
            <Col span={4}>
              <p
                style={{
                  fontSize: "16px",
                  height: "100%",
                  lineHeight: "56px",
                  fontWeight: 700,
                }}
              >
                Anomate
              </p>

              {/* {collapsed ? (
                <MenuUnfoldOutlined
                  className="trigger"
                  onClick={toggleCollapsed}
                />
              ) : (
                <MenuFoldOutlined
                  className="trigger"
                  onClick={toggleCollapsed}
                />
              )} */}
            </Col>
            <Col span={1}>
              <Space>
                <TableOutlined />

                <RightOutlined />
                <p>Compaigns</p>
                <RightOutlined />

                <h4>Upsell</h4>
              </Space>
            </Col>
            <Col span={12}></Col>
            <Col span={3}>
              <Space>
                <Button type="primary">Upgrade</Button>
                <Badge count={notificationCount}>
                  <BellOutlined style={{ fontSize: "24px" }} />
                </Badge>
              </Space>
            </Col>
            <Col span={2}>
              <Dropdown overlay={avatarMenu} placement="bottomRight">
                <Avatar alt="Avatar" src={avatarImage} className="avatar" />
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Sider
          style={{ height: "100vh", background: "#531DAB", marginTop: "60px" }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ backgroundColor: "#531DAB", color: "white" }}
          >
            <Menu.Item key="2" icon={<HomeOutlined />}>
              Dashboard
            </Menu.Item>

            <SubMenu key="3" icon={<SendOutlined />} title=" Compaigns">
              <Menu.Item key="3-1">cart abandonment</Menu.Item>
              <Menu.Item key="3-2">Winbook</Menu.Item>
              <Menu.Item key="3-3">Welcome new customers</Menu.Item>
              <Menu.Item key="3-4">Generate new subscribers</Menu.Item>
              <Menu.Item key="3-5">Back in stack</Menu.Item>
              <Menu.Item key="3-6">Back in stack</Menu.Item>
              <Menu.Item key="3-7">Product upsell</Menu.Item>
              <Menu.Item key="3-8">Product review</Menu.Item>
              <Menu.Item key="3-9">Multi offer popup</Menu.Item>
              <Menu.Item key="3-10">Sign to win</Menu.Item>
              <Menu.Item key="3-11">Price drop</Menu.Item>
              <Menu.Item key="3-12">Customer survey</Menu.Item>
              <Menu.Item key="3-13">Email product details</Menu.Item>
              <Menu.Item key="3-14">Group buying</Menu.Item>
              <Menu.Item key="3-15">Seasonal promotions</Menu.Item>
              <Menu.Item key="3-16">Social media</Menu.Item>
            </SubMenu>
            <SubMenu key="4" icon={<AppstoreOutlined />} title="Apps"></SubMenu>
            <Menu.Item key="5" icon={<HomeOutlined />}>
              Widgets
            </Menu.Item>
            <Menu.Item key="6" icon={<UsergroupDeleteOutlined />}>
              Customers
            </Menu.Item>
            <Menu.Item key="7" icon={<LogoutOutlined />}>
              Log out
            </Menu.Item>
          </Menu>
        </Sider>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          style={{ marginTop: "80px", marginLeft: "30px" }}
        />
      </Layout>
    </div>
  );
};

export default Anomate;
