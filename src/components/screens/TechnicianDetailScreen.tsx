import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { TechnicianCard } from "../TechnicianCard";

export interface TechnicianDetailScreenProps {
    name?: string;
    role?: string;
    phone?: string;
    avatarUrl?: string;
    isAssigned?: boolean;
    onBack: () => void;
}

export default function TechnicianDetailScreen({
    name,
    role,
    phone,
    avatarUrl,
    isAssigned = false,
    onBack,
}: TechnicianDetailScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Detalle del Técnico Asignado</Text>

        <TechnicianCard
          name={name || "Sin nombre"}
          role={role || "Sin rol"}
          phone={phone || "Sin teléfono"}
          avatarUrl={avatarUrl}
          isAssigned={isAssigned}
        />

        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
        >
          <Text style={styles.buttonText}>Volver a Reportes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  content: { padding: 20 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: "#64748b",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: "#ffffff", fontWeight: "bold" },
});
