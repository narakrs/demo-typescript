interface IArticle {
    id: string
    title: string
    body: string,
    status:number
}
type ArticleState = {
    articles: IArticle[],
    login: boolean,
    loading:boolean
    
}

type ArticleAction = {
    type: string
    articles: IArticle[],
}

type DispatchType = (args: ArticleAction) => ArticleAction