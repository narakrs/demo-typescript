import * as actionTypes from "./actionTypes"
import callApi from './../callAPI/callApi';

export function addArticle(articles: IArticle[]) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    articles,
  }

  return simulateHttpRequest(action)
}
export function removeArticle(id:string) {

  const tempDelete: IArticle=temp;
  tempDelete.id= id;
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    articles:[tempDelete],
  }
  return (dispatch: DispatchType) => {
    return callApi(`article/${id}`, 'DELETE', null).then((res:any) => {
      if(res.data){
        dispatch(action);
      }  
    });
  };
}

export function onAtlogin(data: any) {
  console.log(data);
  const action: ArticleAction = {
    type: actionTypes.ON_LOGIN,
    articles: [temp],
  }
  return (dispatch: DispatchType) => {
    return callApi('users', 'GET', null).then((res:any) => {
      if(res.data){
        console.log(res.data);
        const found = res.data.find((item: any )=> item.username===data.username&& item.password===data.password);
        if(found){
          dispatch(action);
        }
      }
    });
  };
}
export function onGetArticle() {
  return (dispatch: DispatchType) => {
    return callApi('article', 'GET', null).then((res:any) => {
      if(res.data){
        console.log(res.data);
      const action: ArticleAction = {
        type: actionTypes.GET_ARTICLE,
        articles: [...res.data],
      }
        dispatch(action);
      } 
    });
  };
}
export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
const temp: IArticle = {
  id: "1",
  title: "post 1",
  body:
    "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
  status: 1
}