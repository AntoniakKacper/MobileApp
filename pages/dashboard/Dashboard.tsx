import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Spinner } from "../../components/Spinner";
import { useArticles } from "../../hooks/useArticles";
import { IArticle } from "../../models/Articles";
import { RootStackParams } from "../../routes/Routing";
import Article from "./components/Article";

interface Props {
  item: IArticle;
}

type articleScreenNavigationType = StackNavigationProp<
  RootStackParams,
  "Favorites"
>;

const getArticle = ({ item }: Props): JSX.Element => <Article article={item} />;

const Dashboard = (): JSX.Element => {
  const [query, setQuery] = useState("");
  const { data: articles, fetchMore } = useArticles(query);
  const navigation = useNavigation<articleScreenNavigationType>();

  const handleRedirect = () => navigation.navigate("Favorites");

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setQuery}
          value={query}
          placeholder="Search for article"
        />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={handleRedirect}
        >
          <Text style={styles.text}>Favorites</Text>
        </TouchableOpacity>
      </View>
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
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  favoriteButton: {
    marginRight: 20,
  },
  text: {
    color: "blue",
  },
  input: {
    height: 40,
    width: 270,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default Dashboard;
