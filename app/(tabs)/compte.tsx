import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/Feather";

export default function ProfileMenu() {
    const insets = useSafeAreaInsets();

    const user = {
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        nom: "Tovondray Bernard",
        job: "Etudiante",
    };

    // Menu items
    const menu = [
        { icon: "user", label: "My Profile" },
        // { icon: "mail", label: "Messages", badge: 7 },
        { icon: "star", label: "Favourites" },
        { icon: "map-pin", label: "Location" },
        { icon: "settings", label: "Settings" },
    ];

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.header}>
                <Svg
                    height="120"
                    width="100%"
                    style={StyleSheet.absoluteFill}
                    viewBox="0 0 375 110"
                >
                    <Path
                        d="M0,60 Q100,120 375,60 L375,0 L0,0 Z"
                        fill="#ff217c"
                    />
                    <Path
                        d="M0,80 Q160,130 375,80 L375,0 L0,0 Z"
                        fill="#FF6B6B"
                        fillOpacity={0.85}
                    />
                </Svg>
                {/* Avatar et info */}
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: user.avatar }} style={styles.avatar} />
                    <TouchableOpacity style={styles.editBtn}>
                        <Icon name="edit-2" size={16} color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.nom}>{user.nom}</Text>
                <Text style={styles.job}>{user.job}</Text>
            </View>

            {/* Menu */}
            <View style={styles.menuList}>
                {menu.map((item, idx) => (
                    <TouchableOpacity
                        key={item.label}
                        style={[
                            styles.menuItem,
                            // idx === 3 && styles.menuItemActive, 
                        ]}
                    >
                        <Icon name={item.icon} size={22} color="#f43f5e" />
                        <Text style={styles.menuLabel}>{item.label}</Text>
                        {/* {item.badge && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{item.badge}</Text>
                            </View>
                        )} */}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Boutons spéciaux */}
            <View style={styles.footerBtns}>
                <TouchableOpacity style={styles.syncBtn}>
                    <Icon name="refresh-ccw" size={19} color="#FF6B6B" />
                    <Text style={styles.syncBtnText}>Synchronisation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Icon name="log-out" size={19} color="#fff" />
                    <Text style={styles.logoutBtnText}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        alignItems: "center",
        paddingBottom: 28,
        paddingTop: 14,
        marginBottom: 8,
        position: "relative",
        overflow: "visible",
    },
    avatarContainer: {
        position: "relative",
        marginTop: "15%",
        marginBottom: 6,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: "#fff",
        backgroundColor: "#ddd",
    },
    editBtn: {
        position: "absolute",
        right: 2,
        bottom: 2,
        backgroundColor: "#FF6B6B",
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#fff",
        zIndex: 3,
    },
    nom: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#232325",
        marginTop: 6,
    },
    job: {
        fontSize: 14,
        color: "#9e9e9e",
    },
    menuList: {
        marginTop: 16,
        paddingHorizontal: 15,
        flex: 1,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        borderBottomColor: "#f1f1f1",
        borderBottomWidth: 1,
        position: "relative",
    },
    menuItemActive: {
        backgroundColor: "#fff0f3",
        // borderRadius: 12,
    },
    menuLabel: {
        fontSize: 16,
        color: "#2c2c2c",
        marginLeft: 18,
        flex: 1,
    },
    badge: {
        backgroundColor: "#B721FF",
        paddingHorizontal: 8,
        borderRadius: 20,
        minWidth: 24,
        alignItems: "center",
        marginLeft: 4,
    },
    badgeText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 13,
    },
    footerBtns: {
        padding: 20,
        borderTopColor: "#f2f2f2",
        // borderTopWidth: 1,
        paddingHorizontal: 15,
    },
    syncBtn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 12,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
    },
    syncBtnText: {
        color: "#FF6B6B",
        fontWeight: "bold",
        marginLeft: 8,
        fontSize: 15,
    },
    logoutBtn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FF6B6B",
        paddingVertical: 12,
        borderRadius: 10,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#FF6B6B",
    },
    logoutBtnText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 8,
        fontSize: 15,
    },
});
