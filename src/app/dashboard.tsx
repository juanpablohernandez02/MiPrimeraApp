import { router } from 'expo-router';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function Dashboard() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <ThemedView
      style={[
        styles.container,
        {
          paddingTop: insets.top + Spacing.five,
          paddingBottom: insets.bottom + Spacing.five,
        },
      ]}>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Hola, este es el dashboard
        </ThemedText>

        <ThemedText type="default" themeColor="textSecondary" style={styles.subtitle}>
          CampusService Mobile{'\n'}Gestión de Reportes - ISER Pamplona
        </ThemedText>

        <Pressable
          onPress={() => router.replace('/')}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: theme.backgroundSelected, opacity: pressed ? 0.7 : 1 },
          ]}>
          <ThemedText type="smallBold">Entrar a la app</ThemedText>
        </Pressable>

        <ThemedText type="small" themeColor="textSecondary" style={styles.hint}>
          Dentro de la app encontrarás el botón «Volver al dashboard» para regresar aquí.
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    gap: Spacing.three,
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
  },
  subtitle: {
    marginBottom: Spacing.two,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.four,
    borderRadius: Spacing.five,
    ...Platform.select({
      web: { cursor: 'pointer' as const },
      default: {},
    }),
  },
  hint: {
    marginTop: Spacing.two,
  },
});
