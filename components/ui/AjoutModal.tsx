import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function AddExpenseModal({ visible, onClose, onSave }) {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Nourriture");
    const [method, setMethod] = useState("Cash");
    const [type, setType] = useState("Dépense");

    const handleSave = () => {
        if (!amount || isNaN(Number(amount))) return;
        onSave({
            id: Date.now().toString(),
            amount: parseInt(amount),
            category,
            method,
            type,
            date: new Date().toLocaleString()
        });
        setAmount("");
        setCategory("Nourriture");
        setMethod("Cash");
        setType("Dépense");
        onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    style={styles.modalContainer}
                >
                    <Text style={styles.title}>Ajouter une {type.toLowerCase()}</Text>
                    <Text style={styles.label}>Type :</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={type}
                            onValueChange={setType}
                        >
                            <Picker.Item label="Dépense" value="Dépense" />
                            <Picker.Item label="Revenu" value="Revenu" />
                        </Picker>
                    </View>
                    <TextInput
                        placeholder="Montant"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                        style={styles.input}
                    />

                    <Text style={styles.label}>Catégorie :</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={category}
                            onValueChange={setCategory}
                        >
                            <Picker.Item label="Nourriture" value="Nourriture" />
                            <Picker.Item label="Transport" value="Transport" />
                            <Picker.Item label="Loyer" value="Loyer" />
                            <Picker.Item label="Loisir" value="Loisir" />
                        </Picker>
                    </View>

                    <Text style={styles.label}>Méthode de paiement :</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={method}
                            onValueChange={setMethod}
                        >
                            <Picker.Item label="Cash" value="Cash" />
                            <Picker.Item label="Mvola" value="Mvola" />
                            <Picker.Item label="Orange Money" value="Orange Money" />
                            <Picker.Item label="Airtel Money" value="Airtel Money" />
                        </Picker>
                    </View>



                    <View style={styles.actions}>
                        <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancel]}>
                            <Text style={[styles.buttonText, { color: "#444" }]}>Annuler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleSave}
                            style={[styles.button, styles.save]}
                            disabled={!amount || isNaN(Number(amount))}
                        >
                            <Text style={styles.buttonText}>Enregistrer</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    modalContainer: {
        backgroundColor: "#fff",
        margin: 20,
        borderRadius: 12,
        padding: 20,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    label: {
        fontSize: 14,
        marginTop: 8,
        marginBottom: 4,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 12,
        overflow: 'hidden',
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 14,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        minWidth: 100,
        alignItems: "center",
    },
    cancel: {
        backgroundColor: "#eee",
    },
    save: {
        backgroundColor: "#2E86DE",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
});
