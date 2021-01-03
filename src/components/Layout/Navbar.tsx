import * as React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navbar = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1"><Link to={"/"}> Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to={"/customer"}> Customer</Link></Menu.Item>
    </Menu>
  );
}

export default Navbar;