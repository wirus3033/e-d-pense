import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { BarChart } from 'react-native-gifted-charts';


const { width } = Dimensions.get("window");

const data = [
  { key: 1, amount: 25000, category: "Nourriture", color: "#FF6B6B" },
  { key: 2, amount: 10000, category: "Transport", color: "#4ECDC4" },
  { key: 3, amount: 15000, category: "Loyer", color: "#FFD93D" },
];

const data1 = [
  { value: 20, label: 'M' },
  { value: 30, label: 'T' },
  {
    value: 50,
    label: 'W',
    topLabelComponent: () => (
      <Text style={{ color: 'blue', fontSize: 18, marginBottom: 6 }}>50</Text>
    ),
  },
  { value: 40, label: 'T' },
  { value: 30, label: 'F' },
];

const barData = [
  { value: 250, label: 'M' },
  { value: 500, label: 'T', frontColor: '#177AD5' },
  { value: 745, label: 'W', frontColor: '#177AD5' },
  { value: 320, label: 'T' },
  { value: 600, label: 'F', frontColor: '#177AD5' },
  { value: 256, label: 'S' },
  { value: 300, label: 'S' },
];



const recentTransactions = [
  { id: "1", category: "Nourriture", amount: 5000, date: "Aujourd’hui - 13:00" },
  { id: "2", category: "Transport", amount: 2000, date: "Aujourd’hui - 10:20" },
  { id: "3", category: "Loyer", amount: 30000, date: "Hier - 09:00" },
  { id: "4", category: "Nourriture", amount: 5000, date: "Aujourd’hui - 13:00" },
  { id: "5", category: "Transport", amount: 2000, date: "Aujourd’hui - 10:20" },
  { id: "6", category: "Loyer", amount: 30000, date: "Hier - 09:00" },
  { id: "7", category: "Nourriture", amount: 5000, date: "Aujourd’hui - 13:00" },
  { id: "8", category: "Transport", amount: 2000, date: "Aujourd’hui - 10:20" },
  { id: "9", category: "Loyer", amount: 30000, date: "Hier - 09:00" },
];

export default function DashboardScreen() {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Solde disponible</Text>
        <Text style={styles.balance}>75 000 Ar</Text>
      </View>

      <Text style={styles.sectionTitle}>Répartition des dépenses</Text>
      <View style={styles.barChart}>
        {/* {data.map((item) => {
          const percent = total > 0 ? (item.amount / total) * 100 : 0;
          return (
            <View key={item.key} style={styles.barItem}>
              <View style={styles.barLabel}>
                <View style={[styles.barColor, { backgroundColor: item.color }]} />
                <Text style={styles.barCategory}>{item.category}</Text>
              </View>
              <View style={styles.barContainer}>
                <View
                  style={[
                    styles.bar,
                    {
                      width: `${percent}%`,
                      backgroundColor: item.color,
                    },
                  ]}
                />
                <Text style={styles.barValue}>{item.amount.toLocaleString()} Ar</Text>
              </View>
            </View>
          );
        })} */}
        <BarChart width={300} data={data1} frontColor="#177AD5" />
        {/* <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        /> */}
      </View>

      <Text style={styles.sectionTitle}>Dépenses récentes</Text>
      <View style={styles.transactionsContainer}>
        <FlatList
          data={recentTransactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
              <Text style={styles.transactionText}>{item.category}</Text>
              <View style={styles.transactionRight}>
                <Text style={styles.transactionAmount}>{item.amount.toLocaleString()} Ar</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 30,
    // marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 10,
  },
  balance: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E86DE",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 24,
    marginBottom: 8,
  },
  barChart: {
    marginVertical: 12,
    marginBottom: 20,
    // backgroundColor: "#f5f5f5",
    // paddingHorizontal: 10,
    borderRadius: 8,
    justifyContent: "center",
  },
  barItem: {
    marginBottom: 14,
  },
  barLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  barColor: {
    width: 16,
    height: 16,
    borderRadius: 3,
    marginRight: 8,
  },
  barCategory: {
    fontSize: 16,
    color: "#444",
    fontWeight: "500",
  },
  barContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bar: {
    height: 14,
    borderRadius: 7,
    marginRight: 12,
    minWidth: 20,
  },
  barValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    minWidth: 60,
  },
  transactionsContainer: {
    flex: 1,
    marginTop: 4,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  transactionRight: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  transactionDate: {
    fontSize: 12,
    color: "#888",
  },
});
