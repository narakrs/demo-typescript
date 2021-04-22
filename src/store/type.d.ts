interface IArticle {
    id: string
    title: string
    body: string,
    status:number
}
type ArticleState = {
    articles: IArticle[],
    login: boolean
    
}

type ArticleAction = {
    type: string
    article: IArticle,
}

type DispatchType = (args: ArticleAction) => ArticleAction