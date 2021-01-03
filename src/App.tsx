import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";

import PageHeader from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import PageBreadcums from "./components/Layout/Breadcums";

const { Content } = Layout;

import Router from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <PageHeader />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <PageBreadcums />
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Router />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;