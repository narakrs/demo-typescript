import { useEffect } from "react";
import { Button } from 'antd';
import { Link } from "react-router-dom";
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import {removeArticle, onGetArticle,onSetMessage } from "./../../store/actionCreators";
import './styles.scss'
function Dashboard() {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )
  const message: string = useSelector(
    (state: ArticleState) => state.message,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    if (articles.length === 0) {
      dispatch(onGetArticle());
    }
  });
  const onAtRemove=(id:string)=>{
    dispatch(removeArticle(id));
  }
  if(message!==""){
    dispatch(onSetMessage());
  }
  return (<div className="dashboard">
    <h2>Dashboard</h2>
    <Button type="primary" className="btn_add_art"><Link to="/products/add-article"><span className="fa fa-plus"></span>  Add article</Link></Button>
    <table>
      <tr>
        <th>Name Task</th>
        <th>Body</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
      {articles?articles.map((item,index)=>(
        <tr key={index}>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td><span className={`${item.status===0?"red":item.status===1?"blue":"green"}`}>{item.status===0?"issue":item.status===1?"in-process":"done"}</span></td>
        <td>
          <div>
          <div className="editcolor"><Link to={`products/${item.id}`}><span className="fa fa-pencil-square-o"></span>edit</Link></div>
          <div className="removecolor"  onClick={()=>{onAtRemove(item.id)}}
          ><span className="fa fa-close"></span>remove</div>
          </div>
        </td>
      </tr>
      )):null}
      
    </table>
  </div>);
}
export default Dashboard;