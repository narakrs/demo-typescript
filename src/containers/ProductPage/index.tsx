import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { addArticle,editArticle } from "./../../store/actionCreators";
import ArticalForm from "./../../component/ArticleForm";
import { useSelector, shallowEqual } from "react-redux";
type TParams = { id: string };
function Product({ match }: RouteComponentProps<TParams>) {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )
  const found:any = articles.find((item: any )=> item.id===match.params.id);
  const message: string = useSelector(
    (state: ArticleState) => state.message,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()
  const onAddArticle = (title: string, body: string, status: number) => {
    const data = { title, body, status };
    if(match.params.id==="add-article"){
      dispatch(addArticle(data));
    }
    else{
      dispatch(editArticle(data,match.params.id));
    }
  }
  return (<div>
    <div>
      <h1>{match.params.id.toUpperCase()}</h1>
      <ArticalForm onAddArticle={(title, body, status) => onAddArticle(title, body, status)} 
      title={match.params.id!=="add-article"?found.title:""} 
      body={match.params.id!=="add-article"?found.body:""}
      status={match.params.id!=="add-article"?Number(found.status):0}></ArticalForm>
      <h3>{message}</h3>
    </div>
  </div>);
}
export default Product;