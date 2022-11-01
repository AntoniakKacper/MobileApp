import { useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { Spinner } from "../../components/Spinner";

import { useArticles } from "../../hooks/useArticles";
import { IArticle } from "../../models/Articles";
import Article from "./components/Article";

interface Props {
  item: IArticle;
}

const getArticle = ({ item }: Props): JSX.Element => <Article article={item} />;

const Dashboard = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const { data: articles, fetchMore } = useArticles(query);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setQuery}
        value={query}
        placeholder="Search for article"
      />
      <FlatList
        data={articles}
        renderItem={getArticle}
        keyExtractor={(article) => article._id}
        onEndReachedThreshold={0.2}
        onEndReached={fetchMore}
        ListFooterComponent={Spinner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default Dashboard;
