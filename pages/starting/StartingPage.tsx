import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../routes/types";

type articleScreenNavigationType = StackNavigationProp<
  RootStackParams,
  "Dashboard"
>;

const StartingPage = (): JSX.Element => {
  const navigation = useNavigation<articleScreenNavigationType>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Dashboard")}
    >
      <Image style={styles.sign} source={require("../../assets/NYTSign.png")} />
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/NYTLogo.png")}
      />
      <Text style={styles.text}>Click to start</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sign: {
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  tinyLogo: {
    width: 150,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default StartingPage;
