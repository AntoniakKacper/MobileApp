import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { IArticle } from "../../../models/Articles";

interface ArticleDetailsProps {}

export const ArticleDetails = ({}: ArticleDetailsProps) => {
  const { article } = useRoute().params as { article: IArticle | null };
  if (!article)
    return (
      <View>
        <Text>no article</Text>
      </View>
    );
  return (
    <View>
      <Text>{article.abstract}</Text>
    </View>
  );
};
