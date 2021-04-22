import LoginForm from './../../component/LoginForm';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux";
import { useSelector, shallowEqual} from "react-redux";
import { onAtlogin} from "./../../store/actionCreators";
import './styles.scss';
function Login() {
  const message: string = useSelector(
    (state: ArticleState) => state.message,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()
  const onLogin=(username:string,password:string)=>{
    const data={username,password};
    dispatch(onAtlogin(data));
  }
  return (<div className="login">
    <div className="card_login">
    <LoginForm onLogin={(username,password)=>onLogin(username,password)}></LoginForm>
    <div className="message_login">{message}</div>
    </div>
  </div>);
}
export default Login;