import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IArticle } from "../models/Articles";
import { ArticleDetails } from "../pages/dashboard/components/ArticleDetails";
import Dashboard from "../pages/dashboard/Dashboard";
import StartingPage from "../pages/starting/StartingPage";

export type RootStackParams = {
  Home: undefined;
  Dashboard: undefined;
  ArticleDetails: { article: IArticle };
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Routing = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ header: () => null }}
          name="Home"
          component={StartingPage}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
