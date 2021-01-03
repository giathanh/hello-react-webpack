import * as React from "react";
import { Layout } from "antd";

import Navbar from "./Navbar";

const { Header } = Layout;

const PageHeader = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Navbar />
    </Header>
  );
}

export default PageHeader;