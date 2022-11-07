import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Placeholder from "../assets/Placeholder";

interface ArticleImageProps {
  url: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({ url }) => {
  if (!!url)
    return (
      <Image
        style={{ width: "100%", height: 300 }}
        uri={`https://www.nytimes.com/${url}`}
      />
    );
  return (
    <View style={styles.container}>
      <Placeholder width={300} height={300} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
