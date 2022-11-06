import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NoArticles } from "../../components/NoArticles";
import { Spinner } from "../../components/Spinner";
import { useFavorites } from "../../hooks/useFavorites";
import { IArticle } from "../../models/Articles";
import Article from "../dashboard/components/Article";

interface Props {
  item: IArticle;
}

const getArticle = ({ item }: Props): JSX.Element => <Article article={item} />;

export const Favorites = (): JSX.Element => {
  const { articles, loading, getFavorites, clearFavorites } = useFavorites();
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && getFavorites();
  }, [isFocused]);

  if (loading) return <Spinner />;

  return (
    <>
      {articles && articles.length > 0 && (
        <View style={styles.container}>
          <Text style={styles.text} onPress={clearFavorites}>
            Clear all
          </Text>
        </View>
      )}
      <FlatList
        data={articles}
        keyExtractor={(article) => article._id}
        renderItem={getArticle}
        ListEmptyComponent={<NoArticles message="Favorite list is empty" />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: 20,
    marginVertical: 20,
  },
  text: {
    color: "blue",
  },
});
