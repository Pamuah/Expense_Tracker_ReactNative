import React from "react";

import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CustomButton = ({
  title,
  icon = "ellipsis-h",
  backgroundColor = "#0F52BA",
  textColor = "#fff",
  ...props
}) => {
 
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      {icon && (
        <FontAwesome
          name={icon}
          size={20}
          color={textColor}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    height: 60,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 8,
  },
});

export default CustomButton;
