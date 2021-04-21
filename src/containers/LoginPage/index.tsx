import React from "react";
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";
import LoginForm from './../../component/LoginForm';
function Login() {
  return (<div style={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#67ebdb'}}>
    <div style={{width:410,borderRadius:8,border:'1px solid #bfbdbd', padding:'20px 0px 10px 0px',backgroundColor:'white'}}>
    <LoginForm></LoginForm>
    </div>
  </div>);
}
export default Login;