import Dashboard from "../pages/dashboard/Dashboard";
import StartingPage from "../pages/starting/StartingPage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParams = {
  Home: undefined;
  Dashboard: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
