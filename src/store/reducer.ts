import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
  articles: [
    // {
    //   id: "1",
    //   title: "post 1",
    //   body:
    //     "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    //   status: 1
    // },
    // {
    //   id: "2",
    //   title: "post 2",
    //   body:
    //     "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    //   status: 0
    // },
  ],
  login: false,
  loading: false,
  message: ""
}
const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE:
      const articles: IArticle[] = action.articles;
      return {
        ...state,
        articles: [...articles],
      }
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: action.articles[0].id, // not really unique
        title: action.articles[0].title,
        body: action.articles[0].body,
        status: action.articles[0].status
      }
      return {
        ...state,
        articles: state.articles.concat(newArticle),
        message: "Update Success"
      }
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        article => article.id !== action.articles[0].id
      )
      return {
        ...state,
        articles: updatedArticles,
      }
    case actionTypes.EDIT_ARTICLE:
      const editArticles: IArticle[] = state.articles;
      const index:any = editArticles.findIndex((item: any )=> item.id===action.articles[0].id);
      editArticles[index]=action.articles[0];
      return {
        ...state,
        articles:[...editArticles],
        message: "Update Success"
      }
    case actionTypes.ON_LOGIN:
      return {
        ...state,
        login: true,
        message: ""
      }
    case actionTypes.ON_LOGIN_ERR:
      return {
        ...state,
        message: "wrong username or password!"
      }
    case actionTypes.ON_LOGOUT:
      return {
        ...state,
        login: false,
        message: ""
      }
    case actionTypes.ON_LOADING:
      return {
        ...state,
        loading: true
      }
    case actionTypes.OUT_LOADING:
      return {
        ...state,
        loading: false
      }
    case actionTypes.SET_MESSAGE:
      return {
        ...state,
        message:""
    }
  }
  return state
}

export default reducer