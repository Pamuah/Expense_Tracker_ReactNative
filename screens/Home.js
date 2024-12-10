import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useInput } from "../Context/InputContext";
import { useState, useContext } from "react";
import { HistoryContext } from "../Context/HistoryContext";

export default function HomeScreen({ navigation }) {
  const isExpense = true; // Replace with dynamic value if needed

  const { transactions } = useContext(HistoryContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueContainer}>
        <Text style={styles.headerText}>Hello, User</Text>
        <Text style={styles.subText1}>November 2024</Text>
        <Text style={styles.subText}>Current Balance</Text>
        <Text style={styles.balanceText}>GHS1,000.00</Text>
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
          <Text style={styles.incomeText}>GHS 8,000.00</Text>
        </View>

        <View style={styles.incomeContainer}>
          <View style={styles.innerContainer2}>
            <Ionicons name="arrow-down" size={24} color="white" />
          </View>
          <Text style={{ marginTop: 8, marginBottom: 6 }}>Expense</Text>
          <Text style={styles.incomeText}>GHS 7,000.00</Text>
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
              <Text>Description: {item.description}</Text>

              <Text>Amount: {item.amount}</Text>
            </View>
          )}
        />
        {/*the endof the flatList*/}
        {/* <View style={styles.cardholder}>
          <View style={styles.cardHeader}>
            <Text style={styles.descriptionText}>{input}</Text>
          </View>
          <View style={styles.cardDetails}>
            <Text
              style={[
                styles.amountText,
                { color: isExpense ? "red" : "green" },
              ]}
            >
              {isExpense ? "- " : "+ "}GHS {Expense}
            </Text>
            <Text style={styles.dateText}>1st Dec</Text>
          </View>
        </View>*/}
      </View>

      <View style={{ padding: 16 }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            navigation.navigate("Add_Transaction");
            addTransaction();
          }}
        >
          <View style={styles.addIconCont}>
            <Ionicons name="add" size={24} color="#0F52BA" />
          </View>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Add Transaction
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: "yellow",
    borderRadius: 10,
    marginBottom: 12,
    width: "100%",
    height: 70,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    elevation: 3,
    borderColor: "transparent",
  },
});
