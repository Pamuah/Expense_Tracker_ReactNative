import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card({ description, amount, date, type }) {
  const isExpense = type === "Expense";

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.cardDetails}>
        <Text
          style={[styles.amountText, { color: isExpense ? "red" : "green" }]}
        >
          {isExpense ? "- " : "+ "}GHS {amount}
        </Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
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
});
