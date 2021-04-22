import * as actionTypes from "./actionTypes"
import callApi from './../callAPI/callApi';

export function addArticle(data:any) {
  return (dispatch: DispatchType) => {
    dispatch(onLoading);
    dispatch(setMessage);
    return callApi(`article`, 'POST', data).then((res:any) => {
      if(res.data){
        const action: ArticleAction = {
          type: actionTypes.ADD_ARTICLE,
          articles:[res.data],
        }
        dispatch(action);
        setTimeout(() => {
          dispatch(outLoading);
        }, 500) 
      }  
    });
  };

}
export function editArticle(data:any,id:string) {
  return (dispatch: DispatchType) => {
    dispatch(onLoading);
    dispatch(setMessage);
    return callApi(`article/${id}`, 'PUT', data).then((res:any) => {
      if(res.data){
        const action: ArticleAction = {
          type: actionTypes.EDIT_ARTICLE,
          articles:[res.data],
        }
        dispatch(action);
        setTimeout(() => {
          dispatch(outLoading);
        }, 500) 
      }  
    });
  };
}
export function removeArticle(id:string) {

  const tempDelete: IArticle=temp;
  tempDelete.id= id;
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    articles:[tempDelete],
  }
  return (dispatch: DispatchType) => {
    dispatch(onLoading);
    return callApi(`article/${id}`, 'DELETE', null).then((res:any) => {
      if(res.data){
        dispatch(action);
        setTimeout(() => {
          dispatch(outLoading);
        }, 500) 
      }  
    });
  };
}

export function onAtlogin(data: any) {
  const action: ArticleAction = {
    type: actionTypes.ON_LOGIN,
    articles: [temp],
  }
  return (dispatch: DispatchType) => {
    dispatch(onLoading);
    return callApi('users', 'GET', null).then((res:any) => {
      if(res.data){
        const found = res.data.find((item: any )=> item.username===data.username&& item.password===data.password);
        if(found){
          dispatch(action);
          setTimeout(() => {
            dispatch(outLoading);
          }, 500) 
        }
        else{
          dispatch(onLoginErr);
          setTimeout(() => {
            dispatch(outLoading);
          }, 500); 
        }
      }
    });
  };
}
export function onAtLogout() {
  return (dispatch: DispatchType) => {
    dispatch(onLogout);}
}
export function onSetMessage() {
  return (dispatch: DispatchType) => {
    dispatch(setMessage);}
}
export function onGetArticle() {
  return (dispatch: DispatchType) => {
    return callApi('article', 'GET', null).then((res:any) => {
      if(res.data){
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
const onLoginErr: ArticleAction = {
  type: actionTypes.ON_LOGIN_ERR,
  articles:[temp],
}
const onLogout: ArticleAction = {
  type: actionTypes.ON_LOGOUT,
  articles:[temp],
}
const onLoading: ArticleAction = {
  type: actionTypes.ON_LOADING,
  articles:[temp],
}
const outLoading: ArticleAction = {
  type: actionTypes.OUT_LOADING,
  articles:[temp],
}
const setMessage: ArticleAction = {
  type: actionTypes.SET_MESSAGE,
  articles:[temp],
}