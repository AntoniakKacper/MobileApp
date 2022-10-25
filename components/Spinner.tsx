import { ActivityIndicator, View } from "react-native";

interface SpinnerProps {}

export const Spinner = ({}: SpinnerProps) => {
  return (
    <View>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};
