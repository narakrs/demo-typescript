import React from "react";
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";
import LoginPage from "./containers/LoginPage/index";
import Product from './containers/DashboardPage/index';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Layout, Menu, Breadcrumb } from 'antd';
import './styles.scss';
const { Header, Content, Footer } = Layout;
function AppRouter() {
  const login: boolean = useSelector(
    (state: ArticleState) => state.login,
    shallowEqual
  )
  console.log("dad", login);
  if (login == false) {
    return <LoginPage />
  }
  return (
    <Router>
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to="/products/1">nav 1</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/products/2">nav 2</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/products/3">nav 3</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
            <Route path="/" exact component={Product} />
            <Route path="/products/:id" component={Product} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default AppRouter;