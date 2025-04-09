import React, { useState } from "react";
import CustomTextField from "../Custom Widget/textfield";
import CustomButton from "../Custom Widget/CustomButton";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://10.10.11.41:3008/api/v1/users/login",
        {
          email,
          password,
        }
      );

      // Log the full response for debugging
      console.log("Login Response:", response.data);

      // Ensure token is available in the response data
      const token = response.data?.data?.token;
      if (token) {
        // Save the token to AsyncStorage
        await AsyncStorage.setItem("userToken", token);
        console.log("✅ Token stored successfully:", token);

        Alert.alert("Success", `Welcome, ${email}!`);
        // Navigate after token is saved
      } else {
        Alert.alert("Error", "Token not found in response. Please try again.");
      }
    } catch (error) {
      Alert.alert(
        "Login Failed",
        error.response?.data?.message || "Something went wrong"
      );
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="lock" size={120} color="#C0C0C0" />
      <Text style={styles.title}>Welcome back, Login into your account.</Text>

      <CustomTextField label="Email" value={email} onChangeText={setEmail} />

      <CustomTextField
        label="Password"
        value={password}
        onChangeText={setPassword}
      />

      <CustomButton
        title="Sign In"
        icon="arrow-right"
        onPress={() => {
          handleLogin();
          navigation.navigate("Home");
        }}
      />

      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign_up")}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 20,
    marginTop: 40,
    color: "black",
  },

  footerTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  footerText: {
    fontSize: 16,
    color: "gray",
  },
  registerText: {
    fontSize: 16,
    color: "#0F52BA", // Blue color for Register
    fontWeight: "bold",
  },
});

export default Login;
