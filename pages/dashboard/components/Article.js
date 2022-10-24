import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const Article = ({ article }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <Image
        style={{ width: 300, height: 300 }}
        source={{
          uri: article.media[0]["media-metadata"][2].url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffcf5",
    padding: 20,
    marginBottom: 20,
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
