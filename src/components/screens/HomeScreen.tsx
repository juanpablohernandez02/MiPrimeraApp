import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { ReportCard } from "../ReportCard";
import { TechnicianCard } from "../TechnicianCard";

// Clave única para identificar los datos guardados en el disco local
const STORAGE_KEY = "@campusservice_report_status_bs02";

export interface HomeScreenProps {
  onGoToDashboard: () => void;
}

export default function HomeScreen({ onGoToDashboard }: HomeScreenProps) {
  const [isResolved, setIsResolved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  // 1. CICLO DE VIDA: Cargar datos del almacenamiento interno al arrancar la app
  useEffect(() => {
    loadPersistedStatus();
  }, []);

  const loadPersistedStatus = async () => {
    try {
      const savedStatus = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedStatus !== null) {
        setIsResolved(JSON.parse(savedStatus));
      }
    } catch (error) {
      Alert.alert("Error de Carga", "No se pudo recuperar el estado previo.");
    } finally {
      setIsLoading(false);
    }
  };

  // 2. PERSISTENCIA: Guardar cambios de manera asíncrona al interactuar
  const handleToggleStatus = async () => {
    try {
      const nextState = !isResolved;
      setIsResolved(nextState);

      // Guardar el valor booleano serializado como string en la memoria física
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    } catch (error) {
      Alert.alert(
        "Error de Guardado",
        "No se pudo guardar el cambio en el teléfono.",
      );
    }
  };

  // Pantalla de carga (mientras lee la memoria persistente)
  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#0284c7" />
        <Text style={styles.loadingText}>Cargando datos locales...</Text>
      </SafeAreaView>
    );
  }

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
            <Text style={styles.buttonText}>
              {isResolved ? "Marcar como Pendiente" : "Marcar como Resuelto"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.dashboardButton}
          onPress={onGoToDashboard}
        >
          <Text style={styles.dashboardButtonText}>Volver al dashboard</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    color: "#64748b",
    fontSize: 14,
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
  dashboardButton: {
    backgroundColor: "#64748b",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  dashboardButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
