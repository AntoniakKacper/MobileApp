import { IArticle } from "../models/Articles";

export type RootStackParams = {
    Home: undefined;
    Dashboard: undefined;
    ArticleDetails: { article: IArticle };
  };