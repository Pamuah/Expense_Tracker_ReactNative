import React from "react";
import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CustomTextField = ({ label, icon, value, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[
        styles.container,
        { borderColor: isFocused ? "#0F52BA" : "#ccc", borderWidth: 2 },
      ]}
    >
      {icon && (
        <FontAwesome name={icon} size={20} color="gray" style={styles.icon} />
      )}
      <TextInput
        style={styles.input}
        placeholder={label}
        placeholderTextColor="gray"
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white", // Set background color for visibility
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333", // Ensuring text visibility
  },
});

export default CustomTextField;
