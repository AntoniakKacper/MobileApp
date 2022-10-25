import { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { Spinner } from "../../components/Spinner";

import { useArticles } from "../../hooks/useArticles";
import { IArticle } from "../../models/Articles";
import Article from "./components/Article";

interface Props {
  item: IArticle;
}

const getArticle = ({ item }: Props) => <Article article={item} />;

const Dashboard = (): JSX.Element => {
  const { loading, data: articles, fetchMore } = useArticles();

  // const fetchMore = () => {
  //   setPage(page + 1);
  //   console.log(page);
  // };

  // if (loading)
  //   return (
  //     <View style={[styles.container, styles.horizontal]}>
  //       <ActivityIndicator size="large" color="#000000" />
  //     </View>
  //   );

  return (
    <FlatList
      data={articles}
      renderItem={getArticle}
      keyExtractor={(article) => article._id}
      onEndReachedThreshold={0.2}
      onEndReached={fetchMore}
      ListFooterComponent={Spinner}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    overflowY: "auto",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Dashboard;
