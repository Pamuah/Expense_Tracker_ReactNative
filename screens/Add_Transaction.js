import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useState } from "react";

const Add_Transaction = ({ navigation }) => {
  const [Transaction, setTransaction] = useState("");
  const [Expense, setExpense] = useState("");
  const [Gained, setGained] = useState("");
  const [Income, setIncome] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.txtTransaction}>Transaction</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. groceries"
        placeholderTextColor="gray"
        value={Transaction}
        onChangeText={setTransaction}
      />

      <Text style={styles.txtTransaction}>Amount Spent</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. GHS100.00"
        placeholderTextColor="gray"
        value={Expense}
        onChangeText={setExpense}
      />

      <Text style={styles.txtTransaction}>Amount Gained</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. GHS30.00"
        placeholderTextColor="gray"
        value={Gained}
        onChangeText={setGained}
      />

      <Text style={styles.txtTransaction}>Overall Income</Text>
      <TextInput
        style={styles.input}
        placeholder="eg. GHS100.00"
        placeholderTextColor="gray"
        value={Income}
        onChangeText={setIncome}
      />

      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => navigation.goBack("HomeScreen")}
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
