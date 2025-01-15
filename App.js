import "react-native-gesture-handler";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/Home";
import Add_Transaction from "./screens/Add_Transaction";
import Currency_Converter from "./screens/Converter";
import { InputProvider } from "./Context/InputContext";
import { HistoryProvider } from "./Context/HistoryContext";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigator for the Home screen
const HomeDrawer = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
    />

    <Drawer.Screen
      name="Currency Converter"
      component={Currency_Converter}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="logo-usd" size={size} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <InputProvider>
        <HistoryProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {/* Use the drawer only for the Home screen */}
              <Stack.Screen
                name="HomeDrawer"
                component={HomeDrawer}
                options={{ headerShown: false }}
              />
              {/* Other screens in the stack */}
              <Stack.Screen
                name="Add_Transaction"
                component={Add_Transaction}
                options={{ headerShown: true, headerBackTitle: "Back" }}
              />
              <Stack.Screen
                name="Currency_Converter"
                component={Currency_Converter}
                options={{ headerShown: true, headerBackTitle: "Back" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </HistoryProvider>
      </InputProvider>
    </GestureHandlerRootView>
  );
};

export default App;
