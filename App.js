import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import Add_Transaction from "./screens/Add_Transaction";
import { InputProvider } from "./Context/InputContext";
import { HistoryProvider } from "./Context/HistoryContext";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <InputProvider>
      <HistoryProvider>
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
      </HistoryProvider>
    </InputProvider>
  );
};

export default App;
