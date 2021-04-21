import React from "react";
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";
import LoginForm from './../../component/LoginForm';
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { addArticle, removeArticle } from "./../../store/actionCreators";
import './styles.scss';
function Login() {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  // const dispatch: Dispatch<any> = useDispatch()

  // const saveArticle = React.useCallback(
  //   (article: IArticle) => dispatch(addArticle(article)),
  //   [dispatch]
  // )
  console.log('state',articles);
  return (<div className="login">
    <div className="card_login">
    <LoginForm></LoginForm>
    </div>
  </div>);
}
export default Login;