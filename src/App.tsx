import { Text, View } from "react-native";
import { registerRootComponent } from "expo";

import TextComponent from "./components/TextComponent";

const App = () => {
  return (
    <View>
      <Text>Hello world!</Text>
      <TextComponent />
    </View>
  );
};

registerRootComponent(App);
