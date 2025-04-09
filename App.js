import "react-native-gesture-handler";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/Home";
import Add_Transaction from "./screens/Add_Transaction";
import Currency_Converter from "./screens/Converter";
import Login from "./screens/Login";
import SignUpScreen from "./screens/Sign_up";
import { InputProvider } from "./Context/InputContext";
import { HistoryProvider } from "./Context/HistoryContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 🔁 Bottom Tab Navigator
const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home-outline";
        } else if (route.name === "Add Transaction") {
          iconName = "add-circle-outline";
        } else if (route.name === "Converter") {
          iconName = "logo-usd";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#007bff",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Add Transaction" component={Add_Transaction} />
    <Tab.Screen name="Converter" component={Currency_Converter} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <InputProvider>
        <HistoryProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign_up">
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Sign_up"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />

              {/* 👇 Replaces drawer with tabs */}
              <Stack.Screen
                name="Home"
                component={BottomTabs}
                options={{ headerShown: false }}
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
