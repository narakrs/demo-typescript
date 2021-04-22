import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { addArticle, removeArticle, onAtlogin, onGetArticle } from "./../../store/actionCreators";
import './styles.scss'
type TParams = { id: string };
function Dashboard({ match }: RouteComponentProps<TParams>) {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
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
  console.log(articles);
  return (<div className="dashboard">
    <h2>Dashboard</h2>
    <table>
      <tr>
        <th>name Task</th>
        <th>body</th>
        <th>status</th>
        <th>actions</th>
      </tr>
      {articles?articles.map((item,index)=>(
        <tr key={index}>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td><span className={`${item.status===0?"red":item.status===1?"blue":"green"}`}>{item.status===0?"issue":item.status===1?"in-process":"done"}</span></td>
        <td>
          <div>
          <div className="editcolor"><span className="fa fa-pencil-square-o"></span>edit</div>
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