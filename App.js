import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import Add_Transaction from "./screens/Add_Transaction";
import { InputContext } from "./Context/InputContext";
import { InputProvider } from "./Context/InputContext";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <InputProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Add_Transaction" component={Add_Transaction} />
        </Stack.Navigator>
      </NavigationContainer>
    </InputProvider>
  );
};

export default App;
