import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React from "react";

import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IArticle } from "../../../models/Articles";

interface ArticleDetailsProps {}

export const ArticleDetails = ({}: ArticleDetailsProps) => {
  const { article } = useRoute().params as { article: IArticle | null };
  const person = article?.byline.person[0];

  const [isFavorite, setFavorite] = useState<boolean>(false);

  const toggleFavorite = (): void => setFavorite(!isFavorite);

  if (!article)
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Article details not found</Text>
      </View>
    );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headline}>{article.headline.main}</Text>

        <Text style={[styles.textWrapper, styles.text]}>
          {article.abstract}
        </Text>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}
        >
          <AntDesign
            name={`${isFavorite ? "heart" : "hearto"}`}
            size={24}
            color="red"
          />
          <Text style={styles.text}>Favorite</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{ height: 300 }}
        source={{
          uri: `https://www.nytimes.com/${article.multimedia[0].url}`,
        }}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.textWrapper}>{`Author: ${
            person ? `${person?.firstname} ${person?.lastname}` : "unkown"
          }`}</Text>
          {!!article.headline.print_headline && (
            <Text style={styles.headline}>
              {article.headline.print_headline}
            </Text>
          )}

          <Text style={styles.text}>{article.lead_paragraph}</Text>
        </View>
        <Text
          style={[styles.hyperText, styles.text]}
          onPress={() => Linking.openURL(article.web_url)}
        >
          Read more...
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headline: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "serif",
  },
  text: {
    fontSize: 20,
    fontFamily: "serif",
  },
  textWrapper: {
    paddingVertical: 10,
  },
  hyperText: {
    marginTop: 20,
    color: "blue",
  },
  favoriteButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 150,
    height: 45,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 30,
  },
});
