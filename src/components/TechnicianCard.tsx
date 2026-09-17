import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// 1. Definir la interfaz de Props para el técnico
export interface TechnicianCardProps {
  name: string;
  role: string;
  phone: string;
  avatarUrl: string;
  isAssigned: boolean;
}

export const TechnicianCard: React.FC<TechnicianCardProps> = ({
  name,
  role,
  phone,
  avatarUrl,
  isAssigned,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>👨‍🔧 Técnico Responsable</Text>

      <View style={styles.profileContainer}>
        {/* Foto del técnico */}
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />

        {/* Información del técnico */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
          <Text style={styles.phone}>📞 {phone}</Text>

          {/* Badge o etiqueta del estado del técnico */}
          <View style={isAssigned ? styles.badgeAssigned : styles.badgePending}>
            <Text style={styles.badgeText}>
              {isAssigned
                ? "🚚 En camino al laboratorio"
                : "⏳ Esperando confirmación"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#64748b",
    marginBottom: 12,
    textTransform: "uppercase",
  },
  profileContainer: {
    flexDirection: "row", // Alinea avatar e info lado a lado
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, // Redondo
    marginRight: 14,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  role: {
    fontSize: 13,
    color: "#0284c7",
    marginBottom: 2,
  },
  phone: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 6,
  },
  badgeAssigned: {
    backgroundColor: "#e0f2fe",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  badgePending: {
    backgroundColor: "#f1f5f9",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#0369a1",
  },
});
