import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import LoginPage from "./containers/LoginPage/index";
import Dashboard from './containers/DashboardPage/index';
import Product from './containers/ProductPage/index';
import { useSelector, shallowEqual} from "react-redux";
import { Layout, Menu, Breadcrumb } from 'antd';
import { useDispatch } from "react-redux";
import { onAtLogout} from "./store/actionCreators";
import { Dispatch } from "redux"
import loadingimage from './atset/image/loading.gif';
import './styles.scss';
const { Header, Content, Footer } = Layout;
function AppRouter() {
  const login: boolean = useSelector(
    (state: ArticleState) => state.login,
    shallowEqual
  )
  const loading: boolean = useSelector(
    (state: ArticleState) => state.loading,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()
  const onLogout=()=>{
    dispatch(onAtLogout());
  }
  if (login === false) {
    return(<>
    <div className="loading" style={{display:loading===true?"flex":"none"}}>
      <img src={loadingimage} alt="loading"></img>
    </div>
    <LoginPage />
    </>) 
  }
  return (
    <Router>
      <div>
      <div className="loading" style={{display:loading===true?"flex":"none"}}>
      <img src={loadingimage} alt="loading"></img>
      </div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2">nav 1</Menu.Item>
              <Menu.Item key="3">nav 2</Menu.Item>
              <Menu.Item key="4" onClick={()=>onLogout()}>Logout</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Demo App Typescript</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
            <Route path="/" exact component={Dashboard} />
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