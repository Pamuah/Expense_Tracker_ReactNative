import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import Freecurrencyapi from "@everapi/freecurrencyapi-js";

export default function Currency_Converter() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/currency-exchange.png")}
        style={{ width: 150, height: 150 }}
      />

      <TextInput
        style={styles.txtfield}
        placeholder={"Amount"}
        placeholderTextColor="gray"
        value=""
        onChange={""}
      />

      {/* Two pickers in a row */}
      <View style={styles.pickerRow}>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "USD", value: "usd" },
              { label: "EUR", value: "eur" },
              { label: "GBP", value: "gbp" },
            ]}
          />
        </View>

        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "INR", value: "inr" },
              { label: "JPY", value: "jpy" },
              { label: "AUD", value: "aud" },
            ]}
          />
        </View>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.Ratetxt}>Rate</Text>
        <Text style={styles.amountTxt}>00.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#dcdcdc",
  },
  txtfield: {
    padding: 16,
    width: "100%",
    height: 60,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
  },
  Ratetxt: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 8,
    marginTop: 16,
  },
  amountTxt: {
    fontWeight: "bold",
    fontSize: 26,
    color: "green",
  },
  pickerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
