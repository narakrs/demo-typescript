import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
  articles: [
    {
      id: "1",
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
      status: 1
    },
    {
      id: "2",
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
      status: 0
    },
  ],
  login: false
}
const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: "15", // not really unique
        title: action.article.title,
        body: action.article.body,
        status:2
      }
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      }
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        article => article.id !== action.article.id
      )
      return {
        ...state,
        articles: updatedArticles,
      }
    case actionTypes.ON_LOGIN:
      return {
        ...state,
        login: true
      }
  }
  return state
}

export default reducer