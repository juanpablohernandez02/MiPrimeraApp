// Importamos React.
//
// Necesitamos React para poder crear el componente
// ReportCard utilizando JSX y TypeScript.
import React from "react";

// Importamos los componentes de React Native
// que vamos a utilizar para construir nuestra tarjeta.
import {
    // Image permite mostrar imágenes.
    Image,

    // StyleSheet nos permite definir los estilos
    // de nuestra tarjeta.
    StyleSheet,
    // Text permite mostrar texto.
    Text,
    // View funciona como un contenedor.
    //
    // Es parecido a un <div> en una aplicación web.
    View,
} from "react-native";

// ============================================================
// INTERFAZ DE LAS PROPS
// ============================================================

// Creamos una interfaz llamada ReportCardProps.
//
// Una interfaz de TypeScript permite definir exactamente
// qué información necesita nuestro componente.
//
// En este caso ReportCard necesita:
// - title
// - location
// - description
// - imageUrl
// - date
//
// Esto nos ayuda a evitar errores porque TypeScript
// comprobará que enviemos correctamente estos datos.
export interface ReportCardProps {
  // title debe ser un texto/string.
  title: string;

  // location debe ser un texto/string.
  location: string;

  // description debe ser un texto/string.
  description: string;

  // imageUrl debe ser un texto/string.
  //
  // En este caso será una URL de una imagen.
  imageUrl: string;

  // date debe ser un texto/string.
  date: string;
}

// ============================================================
// COMPONENTE REPORTCARD
// ============================================================

// Creamos y exportamos el componente ReportCard.
//
// "React.FC<ReportCardProps>" significa:
//
// React.FC
//     Indica que estamos creando un componente funcional.
//
// <ReportCardProps>
//     Indica que este componente recibirá las props
//     definidas anteriormente en la interfaz.
//
// De esta manera TypeScript sabe qué propiedades
// puede recibir ReportCard.
export const ReportCard: React.FC<ReportCardProps> = ({
  // Extraemos la prop title.
  title,
  // Extraemos la prop location.
  location,
  // Extraemos la prop description.
  description,
  // Extraemos la prop imageUrl.
  imageUrl,
  // Extraemos la prop date.
  date, // aca podemos ver que estamos recibiendo las props que definimos en la interfaz ReportCardProps
  //los cuales seran utilizados para mostrar la informacion del reporte en la tarjeta
  // y se podran mandar desde el componente padre (App.tsx) al componente hijo (ReportCard.tsx) para que este ultimo pueda mostrar la informacion correspondiente a cada reporte.
}) => {
  // ----------------------------------------------------------
  // INTERFAZ VISUAL DEL COMPONENTE
  // ----------------------------------------------------------

  // return contiene todo lo que vamos a mostrar
  // en pantalla.
  return (
    // --------------------------------------------------------
    // CONTENEDOR PRINCIPAL DE LA TARJETA
    // --------------------------------------------------------

    <View style={styles.card}>
      {/* 
        ------------------------------------------------------
        IMAGEN DEL REPORTE
        ------------------------------------------------------

        Image es el componente de React Native
        utilizado para mostrar imágenes.
      */}

      <Image
        // source indica de dónde viene la imagen.

        // Como la imagen viene desde Internet,
        // utilizamos un objeto con la propiedad "uri".

        // imageUrl contiene la URL que recibimos
        // mediante props.
        source={{ uri: imageUrl }}
        // Aplicamos el estilo de la imagen.
        style={styles.image}
      />

      {/* 
        ------------------------------------------------------
        CONTENEDOR DE LA INFORMACIÓN
        ------------------------------------------------------

        Este View contiene todos los textos
        que aparecen debajo de la imagen.
      */}

      <View style={styles.content}>
        {/* 
          ----------------------------------------------------
          TÍTULO
          ----------------------------------------------------

          Mostramos el título recibido mediante props.

          Ejemplo:

          title =
          "Cortocircuito en Laboratorio BS02"
        */}

        <Text style={styles.title}>{title}</Text>

        {/* 
          ----------------------------------------------------
          UBICACIÓN
          ----------------------------------------------------

          Mostramos un emoji de ubicación
          seguido del contenido de la prop location.
        */}

        <Text style={styles.location}>📍 {location}</Text>

        {/* 
          ----------------------------------------------------
          FECHA
          ----------------------------------------------------

          Mostramos el emoji de calendario
          seguido de la fecha.
        */}

        <Text style={styles.date}>📅 {date}</Text>

        {/* 
          ----------------------------------------------------
          DESCRIPCIÓN
          ----------------------------------------------------

          Finalmente mostramos la descripción
          del reporte.
        */}

        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

// ============================================================
// ESTILOS DEL COMPONENTE
// ============================================================

// Creamos los estilos específicos de ReportCard.
const styles = StyleSheet.create({
  // ----------------------------------------------------------
  // TARJETA PRINCIPAL
  // ----------------------------------------------------------

  card: {
    // Color blanco de fondo.
    backgroundColor: "#ffffff",

    // Redondeamos las esquinas.
    borderRadius: 12,

    // Agregamos un borde de 1 píxel.
    borderWidth: 1,

    // Color del borde.
    borderColor: "#e2e8f0",

    // IMPORTANTE:
    //
    // overflow: 'hidden' hace que cualquier contenido
    // que sobresalga de los límites de la tarjeta
    // sea ocultado.
    //
    // Esto permite que la imagen respete las esquinas
    // redondeadas de la tarjeta.
    overflow: "hidden",

    // Espacio inferior de 16 píxeles.
    //
    // Esto separa esta tarjeta de otros elementos.
    marginBottom: 16,

    // --------------------------------------------------------
    // SOMBRA PARA ANDROID
    // --------------------------------------------------------

    // elevation genera una sombra en Android.
    elevation: 2,

    // --------------------------------------------------------
    // SOMBRA PARA iOS
    // --------------------------------------------------------

    // Color de la sombra.
    shadowColor: "#000000",

    // Posición de la sombra.
    shadowOffset: {
      width: 0,
      height: 2,
    },

    // Transparencia de la sombra.
    //
    // 0 significa completamente transparente.
    // 1 significa completamente opaca.
    shadowOpacity: 0.1,

    // Difuminación de la sombra.
    shadowRadius: 4,
  },

  // ----------------------------------------------------------
  // IMAGEN
  // ----------------------------------------------------------

  image: {
    // La imagen ocupará el 100% del ancho
    // disponible de la tarjeta.
    width: "100%",

    // Altura fija de 150 píxeles.
    height: 150,
  },

  // ----------------------------------------------------------
  // CONTENIDO
  // ----------------------------------------------------------

  content: {
    // Agregamos 16 píxeles de espacio interno
    // alrededor de los textos.
    padding: 16,
  },

  // ----------------------------------------------------------
  // TÍTULO
  // ----------------------------------------------------------

  title: {
    // Tamaño del título.
    fontSize: 16,

    // Negrita.
    fontWeight: "bold",

    // Color oscuro.
    color: "#0f172a",

    // Separación inferior.
    marginBottom: 4,
  },

  // ----------------------------------------------------------
  // UBICACIÓN
  // ----------------------------------------------------------

  location: {
    // Tamaño de la letra.
    fontSize: 13,

    // Color azul.
    color: "#0284c7",

    // Pequeño espacio inferior.
    marginBottom: 2,
  },

  // ----------------------------------------------------------
  // FECHA
  // ----------------------------------------------------------

  date: {
    // Tamaño pequeño para la fecha.
    fontSize: 11,

    // Color gris.
    color: "#64748b",

    // Separación inferior.
    marginBottom: 8,
  },

  // ----------------------------------------------------------
  // DESCRIPCIÓN
  // ----------------------------------------------------------

  description: {
    // Tamaño de la descripción.
    fontSize: 14,

    // Color gris oscuro.
    color: "#334155",

    // lineHeight controla la separación
    // entre cada línea de texto.
    //
    // Esto mejora la legibilidad cuando
    // la descripción ocupa varias líneas.
    lineHeight: 20,
  },
});
