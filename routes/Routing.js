import Dashboard from "../pages/dashboard/Dashboard";
import StartingPage from "../pages/starting/StartingPage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={StartingPage} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
