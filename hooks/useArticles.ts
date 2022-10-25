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
  const [data, setData] = useState<IArticle[]>([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchArticles = (): void => {
    setLoading(true);
    axios.get<IArticle[], AxiosResponse<IRawResponse>>(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&q=miami&api-key=NekIuIkGm6xu57M6Io0d8jMnOXocCGox`
    ).then((response) => {
      setData([...data, ...response.data.response.docs])
    }).catch((error) => {
      setError(error)
    }).finally(() => {
      setLoading(false);
    });
  };

  const fetchMore = (): void => setPage(page + 1)

  useEffect(() => {
    fetchArticles();
  }, [page]);

  return { data, loading, error, fetchMore };
};
