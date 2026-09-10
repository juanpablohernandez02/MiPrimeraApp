// Importamos React.
// React es la librería que nos permite construir interfaces mediante componentes.
import { useState } from "react";

// Importamos diferentes componentes que React Native nos proporciona
// para construir la interfaz gráfica de nuestra aplicación.
import {
  // SafeAreaView permite que el contenido respete las zonas seguras
  // de dispositivos como iPhone, evitando que quede debajo del notch
  // o de la barra de estado.
  SafeAreaView,
  // ScrollView permite que el usuario pueda desplazarse verticalmente
  // cuando el contenido es más grande que la pantalla.
  ScrollView,
  // StyleSheet nos permite crear y organizar los estilos de la aplicación.
  StyleSheet,

  // Text sirve para mostrar textos en pantalla.
  Text,
  // TouchableOpacity es un componente que permite crear elementos
  // que pueden ser presionados por el usuario.
  // Además, genera un pequeño efecto de transparencia al presionarlo.
  TouchableOpacity,
  // View es uno de los contenedores principales de React Native.
  // Es parecido a un <div> en HTML.
  View,
} from "react-native";

// Importamos nuestro componente personalizado ReportCard.
//
// Este componente lo creamos nosotros y está ubicado en:
// ./components/ReportCard
//
// Gracias a esto podemos reutilizar la tarjeta de reportes
// sin tener que escribir todo su código directamente en App.tsx.
import { ReportCard } from "../components/ReportCard";

// ------------------------------------------------------------
// COMPONENTE PRINCIPAL DE LA APLICACIÓN
// ------------------------------------------------------------

// "export default function App()" define el componente principal
// de nuestra aplicación.
//
// App será el primer componente que React Native mostrará.
export default function App() {
  // ----------------------------------------------------------
  // ESTADO DEL REPORTE
  // ----------------------------------------------------------

  // useState es un Hook de React que nos permite guardar información
  // que puede cambiar durante la ejecución de la aplicación.
  //
  // En este caso queremos saber si el reporte está resuelto o pendiente.
  //
  // isResolved:
  //     Guarda el valor actual del estado.
  //
  // setIsResolved:
  //     Función que utilizaremos para cambiar ese estado.
  //
  // false:
  //     Es el valor inicial.
  //     Por lo tanto, cuando la aplicación inicia,
  //     el reporte estará pendiente.
  const [isResolved, setIsResolved] = useState(false);

  // ----------------------------------------------------------
  // DATOS DEL REPORTE
  // ----------------------------------------------------------

  // Creamos un objeto llamado reportData.
  //
  // Este objeto simula la información que normalmente podría venir
  // desde una API, una base de datos o un backend.
  //
  // Por ahora los datos están escritos directamente en el código.
  const reportData = {
    // Título que tendrá el reporte.
    title: "Cortocircuito en Laboratorio BS02",

    // Lugar donde ocurrió el problema.
    location: "Bloque Humberto Jaimes - Sala BS02",

    // Descripción detallada del problema.
    description:
      "Tres tomas de corriente en la pared posterior están echando chispas al conectar los equipos.",

    // URL de una imagen que representa el reporte.
    //
    // La imagen se descargará desde Internet y será mostrada
    // dentro del componente ReportCard.
    imageUrl: "https://picsum.photos/id/210/600/400",

    // Fecha en la que se creó el reporte.
    date: "Lunes 07/09/2026",
  };

  // ----------------------------------------------------------
  // FUNCIÓN PARA CAMBIAR EL ESTADO
  // ----------------------------------------------------------

  // Esta función se ejecutará cuando el usuario presione
  // el botón "Cambiar Estado del Reporte".
  const handleToggleStatus = () => {
    // Cambiamos el valor de isResolved.
    //
    // Si actualmente es false:
    //     false -> true
    //
    // Si actualmente es true:
    //     true -> false
    //
    // El operador "!" significa NOT o negación.
    //
    // !false = true
    // !true  = false
    setIsResolved(!isResolved);
  };

  // ----------------------------------------------------------
  // INTERFAZ VISUAL
  // ----------------------------------------------------------

  // Todo lo que se encuentra dentro de return()
  // representa lo que React Native va a dibujar en pantalla.
  return (
    // SafeAreaView es el contenedor principal.
    //
    // "style={styles.container}" significa que estamos aplicando
    // el estilo llamado "container".
    <SafeAreaView style={styles.container}>
      {/* 
        ScrollView permite desplazarnos verticalmente.

        Esto es importante porque en un dispositivo móvil
        el contenido puede ocupar más espacio que la pantalla.
      */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 
          ------------------------------------------------------
          ENCABEZADO DE LA APLICACIÓN
          ------------------------------------------------------

          Este View contiene el título y subtítulo de la aplicación.
        */}
        <View style={styles.header}>
          {/* 
            Título principal de la aplicación.
            
            Text es el componente utilizado para mostrar texto
            en React Native.
          */}
          <Text style={styles.headerTitle}>CampusService Mobile</Text>

          {/* 
            Subtítulo de la aplicación.
          */}
          <Text style={styles.headerSubtitle}>
            Gestión de Reportes - ISER Pamplona
          </Text>
        </View>

        {/* 
          ------------------------------------------------------
          COMPONENTE REPORTCARD
          ------------------------------------------------------

          Aquí utilizamos nuestro componente personalizado.

          ReportCard recibe información mediante PROPS.

          Podemos imaginar las props como parámetros que
          le enviamos al componente.
        */}

        <ReportCard
          // Enviamos el título del reporte.
          //
          // Estamos diciendo:
          // "La prop title recibirá reportData.title".
          title={reportData.title}
          // Enviamos la ubicación del reporte.
          location={reportData.location}
          // Enviamos la descripción.
          description={reportData.description}
          // Enviamos la URL de la imagen.
          imageUrl={reportData.imageUrl}
          // Enviamos la fecha.
          date={reportData.date}
        />

        {/* 
          ------------------------------------------------------
          ESTADO DEL REPORTE
          ------------------------------------------------------

          Este View muestra si el reporte está:
          
          🔴 PENDIENTE
          o
          🟢 RESUELTO
        */}

        <View
          // Aplicamos dos estilos al mismo tiempo:
          //
          // 1. styles.statusBox
          //    Contiene los estilos generales de la caja.
          //
          // 2. Dependiendo de isResolved agregamos:
          //
          //    styles.bgSuccess
          //    o
          //    styles.bgDanger
          //
          // Esto permite cambiar visualmente la caja
          // dependiendo del estado del reporte.
          style={[
            styles.statusBox,

            // Operador ternario:
            //
            // condición ? valorSiTrue : valorSiFalse
            //
            // Si isResolved es true:
            //     usamos bgSuccess
            //
            // Si isResolved es false:
            //     usamos bgDanger
            isResolved ? styles.bgSuccess : styles.bgDanger,
          ]}
        >
          {/* 
            Mostramos el estado actual del reporte.
          */}
          <Text style={styles.statusText}>
            Estado Actual:{" "}
            {/* 
              Aquí utilizamos nuevamente un operador ternario.

              Si isResolved es true:
                  mostramos 🟢 RESUELTO

              Si isResolved es false:
                  mostramos 🔴 PENDIENTE
            */}
            {isResolved ? "🟢 RESUELTO" : "🔴 PENDIENTE"}
          </Text>

          {/* 
            --------------------------------------------------
            BOTÓN
            --------------------------------------------------

            TouchableOpacity permite crear un elemento
            que el usuario puede presionar.
          */}

          <TouchableOpacity
            // Aplicamos el estilo visual del botón.
            style={styles.button}
            // onPress indica qué función debe ejecutarse
            // cuando el usuario presione el botón.
            //
            // En este caso ejecutamos:
            // handleToggleStatus
            onPress={handleToggleStatus}
          >
            {/* 
              Texto que aparece dentro del botón.
            */}
            <Text style={styles.buttonText}>Cambiar Estado del Reporte</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ============================================================
// ESTILOS DE LA APLICACIÓN
// ============================================================

// StyleSheet.create() permite crear un objeto que contiene
// todos los estilos utilizados por este componente.
//
// Es similar conceptualmente a trabajar con CSS,
// aunque React Native utiliza propiedades de estilo
// escritas en JavaScript/TypeScript.
const styles = StyleSheet.create({
  // ----------------------------------------------------------
  // CONTENEDOR PRINCIPAL
  // ----------------------------------------------------------

  container: {
    // flex: 1 significa que el componente ocupará
    // todo el espacio disponible de la pantalla.
    flex: 1,

    // Color de fondo general de la aplicación.
    //
    // Este color es un tono muy claro.
    backgroundColor: "#f8fafc",
  },

  // ----------------------------------------------------------
  // CONTENIDO DEL SCROLL
  // ----------------------------------------------------------

  scrollContent: {
    // Agregamos un espacio interno de 20 píxeles
    // alrededor del contenido.
    padding: 20,
  },

  // ----------------------------------------------------------
  // ENCABEZADO
  // ----------------------------------------------------------

  header: {
    // Espacio inferior de 20 píxeles.
    //
    // Esto separa el encabezado del ReportCard.
    marginBottom: 20,

    // Espacio superior de 10 píxeles.
    marginTop: 10,
  },

  // ----------------------------------------------------------
  // TÍTULO PRINCIPAL
  // ----------------------------------------------------------

  headerTitle: {
    // Tamaño de la letra.
    fontSize: 22,

    // Hace que el texto aparezca en negrita.
    fontWeight: "bold",

    // Color del texto.
    color: "#0f172a",
  },

  // ----------------------------------------------------------
  // SUBTÍTULO
  // ----------------------------------------------------------

  headerSubtitle: {
    // Tamaño de la letra.
    fontSize: 13,

    // Color gris.
    color: "#64748b",
  },

  // ----------------------------------------------------------
  // CAJA DEL ESTADO
  // ----------------------------------------------------------

  statusBox: {
    // Espacio interno de 16 píxeles.
    padding: 16,

    // Redondeamos las esquinas.
    borderRadius: 12,

    // Centramos los elementos horizontalmente.
    alignItems: "center",

    // Separación superior.
    marginTop: 10,

    // Grosor del borde.
    borderWidth: 1,
  },

  // ----------------------------------------------------------
  // ESTILO CUANDO EL REPORTE ESTÁ PENDIENTE
  // ----------------------------------------------------------

  bgDanger: {
    // Fondo rojizo claro.
    backgroundColor: "#fef2f2",

    // Borde rojo claro.
    borderColor: "#fca5a5",
  },

  // ----------------------------------------------------------
  // ESTILO CUANDO EL REPORTE ESTÁ RESUELTO
  // ----------------------------------------------------------

  bgSuccess: {
    // Fondo verde claro.
    backgroundColor: "#f0fdf4",

    // Borde verde claro.
    borderColor: "#86efac",
  },

  // ----------------------------------------------------------
  // TEXTO DEL ESTADO
  // ----------------------------------------------------------

  statusText: {
    // Tamaño del texto.
    fontSize: 15,

    // Texto en negrita.
    fontWeight: "bold",

    // Color del texto.
    color: "#0f172a",

    // Espacio debajo del texto.
    //
    // Esto separa el texto del botón.
    marginBottom: 12,
  },

  // ----------------------------------------------------------
  // BOTÓN
  // ----------------------------------------------------------

  button: {
    // Color de fondo azul.
    backgroundColor: "#0284c7",

    // Espacio vertical interno.
    paddingVertical: 10,

    // Espacio horizontal interno.
    paddingHorizontal: 20,

    // Esquinas redondeadas.
    borderRadius: 8,
  },

  // ----------------------------------------------------------
  // TEXTO DEL BOTÓN
  // ----------------------------------------------------------

  buttonText: {
    // Color blanco.
    color: "#ffffff",

    // Tamaño del texto.
    fontSize: 14,

    // Texto en negrita.
    fontWeight: "bold",
  },
});
