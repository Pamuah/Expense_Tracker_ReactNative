import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useState, useContext } from "react";
import { useInput } from "../Context/InputContext";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { HistoryContext } from "../Context/HistoryContext";

const Add_Transaction = ({ navigation }) => {
  const { input, setInput } = useInput();
  const { Expense, setExpense } = useInput();
  const { Income, setIncome } = useInput();

  const { addTransaction, radio_props, setValue, value } =
    useContext(HistoryContext);

  return (
    <View style={styles.container}>
      <Text style={styles.txtTransaction}>Transaction</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. groceries"
        placeholderTextColor="gray"
        value={input}
        onChangeText={setInput}
      />
      <Text style={styles.txtTransaction}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. GHS100.00"
        placeholderTextColor="gray"
        value={Expense}
        onChangeText={setExpense}
      />
      <Text style={styles.txtTransaction}>Select Type of Transaction</Text>
      <RadioForm
        style={{ marginBottom: 16 }}
        radio_props={radio_props}
        initial={0}
        //formHorizontal={true}
        buttonWrapStyle={{ marginLeft: 10 }}
        onPress={(value) => setValue(value)}
      />

      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => {
          //console.log(radio_props[value].label);
          addTransaction();
          setInput(" ");
          setExpense(" ");
          navigation.goBack("HomeScreen");
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "left",
    alignItems: "start",
    backgroundColor: "#dcdcdc",
    padding: 16,
  },
  txtTransaction: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#100c08",
  },
  input: {
    height: 60,
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 12,
    borderRadius: 20,
    borderColor: "#fff",
    marginBottom: 20,
  },

  updateButton: {
    padding: 16,
    backgroundColor: "#0F52BA",
    width: "100%",
    height: "75",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default Add_Transaction;
