import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FloatingActionButton from "../Custom Widget/floatingButton";
import { useInput } from "../Context/InputContext";
import { useState, useContext } from "react";
import { HistoryContext } from "../Context/HistoryContext";
// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const { transactions, radio_props, value } = useContext(HistoryContext);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();

  const currentDate = `${day}-${month}-${year}`;

  let array1 = [];
  let array2 = [];

  // Separate expenses and incomes
  transactions.forEach((item) => {
    const amount = parseFloat(item.amount); // Convert amount to a number
    if (item.type === "expense") {
      array1.push(amount);
      console.log("Expense:", amount);
    } else if (item.type === "income") {
      array2.push(amount);
      console.log("Income:", amount);
    }
  });

  console.log("Expenses:", array1, "Incomes:", array2);

  // Sum up the income values
  function sum(acc, x) {
    return acc + x;
  }

  const totalExpenses = array1.reduce(sum, 0);
  const totalIncome = array2.reduce(sum, 0);
  const Balance = totalIncome - totalExpenses;

  console.log("Total Income:", totalIncome);
  console.log("Total Expenses:", totalExpenses);
  console.log("Balance:", Balance);
  //console.log(transactions);
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View style={styles.blueContainer}>
        <Text style={styles.headerText}>Hello, User</Text>
        <Text style={styles.subText1}>November 2024</Text>
        <Text style={styles.subText}>Current Balance</Text>
        <Text style={styles.balanceText}>GHS {Balance}</Text>
      </View>

      <View
        style={{
          justifyContent: "space-evenly",
          padding: 16,
          flexDirection: "row",
        }}
      >
        <View style={styles.incomeContainer}>
          <View style={styles.innerContainer}>
            <Ionicons name="arrow-up" size={24} color="white" />
          </View>
          <Text style={{ marginTop: 8, marginBottom: 6 }}>Income</Text>
          <Text style={styles.incomeText}>GHS {totalIncome}</Text>
        </View>

        <View style={styles.incomeContainer}>
          <View style={styles.innerContainer2}>
            <Ionicons name="arrow-down" size={24} color="white" />
          </View>
          <Text style={{ marginTop: 8, marginBottom: 6 }}>Expense</Text>
          <Text style={styles.incomeText}>GHS {totalExpenses}</Text>
        </View>
      </View>

      <View style={{ padding: 16, flexDirection: "column" }}>
        <Text style={styles.historyTxt}>History</Text>
        {/*the begining of the flatList*/}
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.headTxt}>{item.description}</Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      marginRight: 10,
                      color: "gray",
                    }}
                  >
                    GHS {item.amount}
                  </Text>
                  <Text
                    style={{ fontSize: 16, color: "gray", fontWeight: "600" }}
                  >
                    {currentDate}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  height: "100%",
                  width: "10",
                  backgroundColor: item.type === "expense" ? "red" : "green",
                }}
              ></View>
            </View>
          )}
        />
      </View>

      <FloatingActionButton
        onPress={() => navigation.navigate("Add_Transaction")}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    edges: "top",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#dcdcdc",
    alignItems: "start",
    justifyContent: "left",
  },

  blueContainer: {
    padding: 16,
    backgroundColor: "#0F52BA",
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  headerText: {
    alignSelf: "flex-start",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },

  subText1: {
    alignSelf: "flex-start",
    marginTop: 6,
    marginBottom: 40,
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },

  subText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },

  balanceText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
  },

  incomeContainer: {
    padding: 16,
    backgroundColor: "white",
    width: "45%",
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  incomeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  innerContainer: {
    height: "40%",
    width: "30%",
    alignItems: "center",
    padding: 6,
    backgroundColor: "green",
    borderRadius: 10,
  },

  innerContainer2: {
    height: "40%",
    width: "30%",
    alignItems: "center",
    padding: 6,
    backgroundColor: "red",
    borderRadius: 10,
  },

  historyTxt: {
    marginTop: 20,
    marginBottom: 8, // Adjust for better spacing
    fontSize: 18,
    fontWeight: "bold",
  },

  cardholder: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 8, // Space between History and card
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardHeader: {
    marginBottom: 8,
  },

  descriptionText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  amountText: {
    fontSize: 16,
    fontWeight: "600",
  },

  dateText: {
    fontSize: 14,
    color: "#666",
  },

  addButton: {
    padding: 16,
    backgroundColor: "#0F52BA",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  addIconCont: {
    marginBottom: 6,
    height: 30,
    width: 35,
    alignItems: "center",
    padding: 3,
    backgroundColor: "white",
    borderRadius: 10,
  },

  cardContainer: {
    borderColor: "black",
    padding: 12,
    borderBottomWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    width: "100%",
    height: 75,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    elevation: 3,
    borderColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headTxt: {
    fontSize: 17,
    fontWeight: "500",
    color: "black",
    marginBottom: 5,
  },
});
