import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import { useArticles } from "../../hooks/useArticles";
import Article from "./components/Article";

const getArticle = ({ item }) => <Article article={item} />;

const Dashboard = () => {
  const { loading, data: articles } = useArticles();

  if (loading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={articles}
        renderItem={getArticle}
        keyExtractor={(article) => article.asset_id}
      />
    </SafeAreaView>
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
