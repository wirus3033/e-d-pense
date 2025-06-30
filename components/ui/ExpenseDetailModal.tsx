import { Expense } from "@/app/(tabs)/depense";
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ExpenseDetailModalProps {
  visible: boolean;
  expense: Expense | null;
  onClose: () => void;
}

export default function ExpenseDetailModal({ visible, expense, onClose }: ExpenseDetailModalProps) {
  if (!expense) return null;
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={detailStyles.overlay}>
        <View style={detailStyles.modalContainer}>
          <Text style={detailStyles.title}>Détail Dépense</Text>
          <Text style={detailStyles.row}><Text style={detailStyles.label}>Catégorie : </Text>{expense.category}</Text>
          <Text style={detailStyles.row}><Text style={detailStyles.label}>Montant : </Text>{expense.amount.toLocaleString()} Ar</Text>
          <Text style={detailStyles.row}><Text style={detailStyles.label}>Méthode : </Text>{expense.method}</Text>
          <Text style={detailStyles.row}><Text style={detailStyles.label}>Type : </Text>{expense.type}</Text>
          <Text style={detailStyles.row}><Text style={detailStyles.label}>Date : </Text>{expense.date}</Text>
          <TouchableOpacity onPress={onClose} style={detailStyles.closeBtn}>
            <Text style={{ color: "#2E86DE", fontWeight: "bold" }}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const detailStyles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)", justifyContent: "center", alignItems: "center" },
  modalContainer: { backgroundColor: "#fff", borderRadius: 12, padding: 22, width: "80%" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  row: { fontSize: 15, marginBottom: 8 },
  label: { fontWeight: "bold", color: "#333" },
  closeBtn: { alignSelf: "center", marginTop: 10 },
});
