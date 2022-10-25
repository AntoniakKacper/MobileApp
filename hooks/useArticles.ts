import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { IArticle } from "../models/Articles";

interface IRawResponse {
  response: {
    docs: IArticle[]
  }
}

export const useArticles = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<null | IArticle[]>(null);
  const [error, setError] = useState(null);

  const fetchArticles = () => {
    setLoading(true);
    axios.get<IArticle[], AxiosResponse<IRawResponse>>(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=1&q=miami&api-key=NekIuIkGm6xu57M6Io0d8jMnOXocCGox`
    ).then((response) => {
      // console.log(response.data.response.docs)
      setData(response.data.response.docs)
    }).catch((error) => {
      setError(error)
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return { data, loading, error };
};
