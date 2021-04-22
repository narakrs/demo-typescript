import * as actionTypes from "./actionTypes"
import callApi from './../callAPI/callApi';

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  }

  return simulateHttpRequest(action)
}
export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  }
  return simulateHttpRequest(action)
}

export function onAtlogin(data: any) {
  console.log(data);
  const action: ArticleAction = {
    type: actionTypes.ON_LOGIN,
    article: temp,
  }
  return (dispatch: DispatchType) => {
    return callApi('users', 'GET', null).then((res:any) => {
      console.log(res.data);
      const found = res.data.find((item: any )=> item.username===data.username&& item.password===data.password);
      if(found){
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