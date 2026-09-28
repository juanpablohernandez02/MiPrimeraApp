import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { TechnicianCard } from "../TechnicianCard";

export default function TechnicianDetailScreen({ route, navigation }: any) {
  // Desempaquetamos los parámetros enviados desde el emisor
  const { name, role, phone, avatarUrl, isAssigned } = route.params || {};

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
          onPress={() => navigation.goBack()}
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
