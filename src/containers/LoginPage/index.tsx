import React from "react";
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";
import LoginForm from './../../component/LoginForm';
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { addArticle, removeArticle,onAtlogin} from "./../../store/actionCreators";
import './styles.scss';
import Password from "antd/lib/input/Password";
function Login() {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const onLogin=(username:string,password:string)=>{
    console.log('goij');
    const data={username,password};
    dispatch(onAtlogin(data));
  }
  console.log('state',articles);
  return (<div className="login">
    <div className="card_login">
    <LoginForm onLogin={(username,password)=>onLogin(username,password)}></LoginForm>
    </div>
  </div>);
}
export default Login;