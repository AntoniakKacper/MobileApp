import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IArticle } from "../../../models/Articles";
import { RootStackParams } from "../../../routes/Routing";

interface ArticleProps {
  article: IArticle;
}

type articleScreenNavigationType = StackNavigationProp<
  RootStackParams,
  "ArticleDetails"
>;

const getArticleImage = (article: IArticle): string => {
  if (!!article.multimedia[0])
    return `https://www.nytimes.com/${article.multimedia[0].url}`;
  return "https://www.nytimes.com/images/2022/09/29/sports/29nfl-tua/merlin_214042398_0507e79d-2e8b-4386-9709-fb058798231d-articleLarge.jpg";
};

const Article = ({ article }: ArticleProps): JSX.Element => {
  const navigation = useNavigation<articleScreenNavigationType>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("ArticleDetails", { article: article })
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>{article.headline.main}</Text>
      </View>
      <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: getArticleImage(article),
        }}
      />
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
  },
});

export default Article;
