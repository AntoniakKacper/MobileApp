import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { IArticle } from "../models/Articles";
import useDebounce from "./useDebounce";

interface IRawResponse {
  response: {
    docs: IArticle[]
  }
}

export const useArticles = (query: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IArticle[]>([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  
  const debouncedQuery = useDebounce(query);

  const fetchArticles = (page: number, query: string): void => {
    setLoading(true);
    axios.get<IArticle[], AxiosResponse<IRawResponse>>(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&q=${query}&api-key=NekIuIkGm6xu57M6Io0d8jMnOXocCGox`
    ).then((response) => {
      setData((prevData) => [...prevData, ...response.data.response.docs])
    }).catch((error) => {
      setError(error)
    }).finally(() => {
      setLoading(false);
    });
  };

  const fetchMore = (): void => setPage(page + 1)

  const searchForArticle = (query: string): void => {
    setData([]);
    fetchArticles(0, query)
  }

  useEffect(() => {
    searchForArticle(debouncedQuery);
  }, [debouncedQuery])

  useEffect(() => {
    fetchArticles(page, query);
  }, [page]);

  return { data, loading, error, fetchMore, searchForArticle };
};
