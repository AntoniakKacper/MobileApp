import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface NoArticlesInterface {
  message: string;
}

export const NoArticles = ({ message }: NoArticlesInterface) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{message}</Text>
    </View>
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
});
