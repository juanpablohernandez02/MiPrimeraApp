import { router } from 'expo-router';

import HomeScreen from '@/components/screens/HomeScreen';

export default function Index() {
  return <HomeScreen onGoToDashboard={() => router.replace('/dashboard')} />;
}
