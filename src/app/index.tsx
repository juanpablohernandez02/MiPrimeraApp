import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ReportCard } from "../components/ReportCard";
import { TechnicianCard } from "../components/TechnicianCard";

export default function App() {
  const [isResolved, setIsResolved] = useState(false);

  const reportData = {
    title: "Cortocircuito en Laboratorio BS02",
    location: "Bloque Humberto Jaimes - Sala BS02",
    description:
      "Tres tomas de corriente en la pared posterior están echando chispas al conectar los equipos.",
    imageUrl: "https://picsum.photos/id/210/600/400",
    date: "Lunes 07/09/2026",
  };

  const technicianData = {
    name: "Carlos Mendoza",
    role: "Técnico Electricista",
    phone: "+57 312 456 7890",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  };

  const handleToggleStatus = () => {
    setIsResolved(!isResolved);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>CampusService Mobile</Text>
          <Text style={styles.headerSubtitle}>
            Gestión de Reportes - ISER Pamplona
          </Text>
        </View>

        <ReportCard
          title={reportData.title}
          location={reportData.location}
          description={reportData.description}
          imageUrl={reportData.imageUrl}
          date={reportData.date}
        />

        <TechnicianCard
          name={technicianData.name}
          role={technicianData.role}
          phone={technicianData.phone}
          avatarUrl={technicianData.avatarUrl}
          isAssigned={isResolved}
        />

        <View
          style={[
            styles.statusBox,
            isResolved ? styles.bgSuccess : styles.bgDanger,
          ]}
        >
          <Text style={styles.statusText}>
            Estado Actual: {isResolved ? "🟢 RESUELTO" : "🔴 PENDIENTE"}
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleToggleStatus}>
            <Text style={styles.buttonText}>Cambiar Estado del Reporte</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#64748b",
  },
  statusBox: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
  },
  bgDanger: {
    backgroundColor: "#fef2f2",
    borderColor: "#fca5a5",
  },
  bgSuccess: {
    backgroundColor: "#f0fdf4",
    borderColor: "#86efac",
  },
  statusText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#0284c7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
