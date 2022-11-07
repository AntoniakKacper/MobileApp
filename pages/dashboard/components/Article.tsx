import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ArticleImage } from "../../../components/ArticleImage";
import { IArticle } from "../../../models/Articles";
import { RootStackParams } from "../../../routes/Routing";

interface ArticleProps {
  article: IArticle;
}

type articleScreenNavigationType = StackNavigationProp<
  RootStackParams,
  "ArticleDetails"
>;

const Article = ({ article }: ArticleProps): JSX.Element => {
  const navigation = useNavigation<articleScreenNavigationType>();

  const handleRedirect = () =>
    navigation.navigate("ArticleDetails", { article: article });

  return (
    <TouchableOpacity style={styles.container} onPress={handleRedirect}>
      <View style={styles.header}>
        <Text style={styles.title}>{article.headline.main}</Text>
      </View>
      <ArticleImage url={article?.multimedia[0]?.url} />
    </TouchableOpacity>
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
    fontFamily: "serif",
  },
});

export default Article;
