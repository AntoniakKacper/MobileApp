import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"
import { IArticle } from "../models/Articles"

export const useFavorites = () => {
    const [articles, setArticles] = useState<IArticle[] | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const addFavorite = async (article: IArticle): Promise<void> => {
        try {
            const updatedArticles = articles ? [...articles, article] : [article];
            setArticles(updatedArticles)
            await AsyncStorage.setItem('articles', JSON.stringify(updatedArticles))
          } catch (e) {
            setError(error as string)
          }
    }

    const deleteFavorite = async (articleId: string): Promise<void> => {
        try {
            const updatedArticles = articles!.filter(({_id}) => _id !== articleId);
            setArticles(updatedArticles)
            await AsyncStorage.setItem('articles', JSON.stringify(updatedArticles))
          } catch (e) {
            setError(error as string)
          }
    }
    const getFavorites = async (): Promise<void> => {
        try{
            setLoading(true);
            const storedArticles = await AsyncStorage.getItem('articles');
            if(!storedArticles) return setArticles(articles);
            setArticles(JSON.parse(storedArticles))
        }
        catch(error){
            setError(error as string)
        }
        finally{
            setLoading(false)
        }
    }

    const clearFavorites = async () => {
        try{
            await AsyncStorage.removeItem('articles');
            setArticles([])
        }
        catch(error){
            setError(error as string)
        }
    }

    const isFavorite = (articleId: string): boolean => !!(articles && articles.some(({_id}) => _id === articleId));

    const toggleFavorite = (article: IArticle): void => {
        isFavorite(article._id) ? deleteFavorite(article._id) : addFavorite(article)
    }

    useEffect(() => {
        getFavorites()
    }, [])

    return {articles, loading, isFavorite, clearFavorites, toggleFavorite, error, getFavorites}
}