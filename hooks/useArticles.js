import axios from "axios";
import { useEffect, useState } from "react";

export const useArticles = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=1&q=miami&api-key=NekIuIkGm6xu57M6Io0d8jMnOXocCGox`
      );
      console.log("=====================================");
      console.log(response.data.response.docs);
      setData(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return { data, loading, error };
};
