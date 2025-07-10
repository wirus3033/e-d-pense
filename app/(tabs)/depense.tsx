import AddExpenseModal from '@/components/ui/AjoutModal';
import ExpenseDetailModal from '@/components/ui/ExpenseDetailModal';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface Expense {
  id: string;
  amount: number;
  category?: string;
  source?: string;
  method: string;
  type: string; // "Dépense" ou "Revenu"
  date: string;
}

export default function Depense() {
  const insets = useSafeAreaInsets();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);

  // Pour la suppression
  const handleDelete = (id: string) => {
    Alert.alert(
      "Supprimer",
      "Voulez-vous vraiment supprimer cette dépense ?",
      [
        { text: "Annuler", style: "cancel" },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: () => setExpenses(prev => prev.filter(e => e.id !== id)),
        }
      ]
    );
  };

  // Pour la modification (à adapter si tu veux une vraie modale d’édition)
  const handleEdit = (expense: Expense) => {
    Alert.alert("Modification", "À implémenter : Edition de la dépense " + (expense.category || expense.source));
  };

  const handleShowDetail = (expense: Expense) => {
    setSelectedExpense(expense);
    setDetailModalVisible(true);
  };

  const handleAddExpense = (expense: Expense) => {
    setExpenses(prev => [expense, ...prev]);
  };

  const renderRightActions = (expense: Expense) => (
    <View style={styles.actionContainer}>
      <TouchableOpacity style={styles.actionBtn} onPress={() => handleEdit(expense)}>
        <MaterialIcons name="edit" size={26} color="#007bff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn} onPress={() => handleDelete(expense.id)}>
        <MaterialIcons name="delete" size={26} color="#ff3b30" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.body}>
        <Text style={styles.title}>Mes Dépenses</Text>
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Swipeable
              renderRightActions={() => renderRightActions(item)}
              overshootRight={false}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleShowDetail(item)}
                style={[
                  styles.transactionItem,
                  {
                    backgroundColor: item.type === "Revenu" ? "#e6faef" : "#fff7e6",
                  }
                ]}
              >
                <View>
                  <Text style={styles.transactionText}>
                    {item.type === "Revenu"
                      ? item.source || "Revenu"
                      : item.category || "Dépense"}
                  </Text>
                  <Text style={styles.transactionDate}>
                    {item.method} | {item.date}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.transactionAmount,
                    { color: item.type === "Revenu" ? "#16A34A" : "red" }
                  ]}
                >
                  {item.amount.toLocaleString()} Ar
                </Text>
              </TouchableOpacity>
            </Swipeable>
          )}
          ListEmptyComponent={
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ color: "#888", textAlign: "center", marginTop: 40, justifyContent: "center" }}>
                Aucune dépense pour l’instant.
              </Text>
            </View>
          }
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
        />

        <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
          <Text style={styles.fabText}>＋</Text>
        </TouchableOpacity>

        <AddExpenseModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleAddExpense}
        />

        <ExpenseDetailModal
          visible={detailModalVisible}
          expense={selectedExpense}
          onClose={() => setDetailModalVisible(false)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  body: {
    flex: 1,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 16
  },

  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E86DE",
    marginLeft: 12,
    minWidth: 90,
    textAlign: "right",
  },
  transactionDate: {
    fontSize: 12,
    color: "#888",
    marginTop: 3,
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#2E86DE",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  fabText: {
    fontSize: 32,
    color: "#fff",
    lineHeight: 32,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  actionBtn: {
    width: 44,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
});
