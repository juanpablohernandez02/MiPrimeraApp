import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importar pantallas
import HomeScreen from "../components/screens/HomeScreen";
import TechnicianDetailScreen from "../components/screens/TechnicianDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#0f172a" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Inicio - CampusService" }}
        />
        <Stack.Screen
          name="TechnicianDetail"
          component={TechnicianDetailScreen}
          options={{ title: "Perfil del Técnico" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
