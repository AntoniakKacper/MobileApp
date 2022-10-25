import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { IArticle } from "../../../models/Articles";

interface ArticleProps {
  article: IArticle;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{article.headline.main}</Text>
      </View>
      <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: `https://www.nytimes.com/${article.multimedia[0].url}`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffcf5",
    padding: 20,
    margin: 20,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Article;
