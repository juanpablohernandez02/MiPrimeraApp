import { router, useLocalSearchParams } from 'expo-router';

import TechnicianDetailScreen from '@/components/screens/TechnicianDetailScreen';

type SearchParam = string | string[] | undefined;

function toStringParam(value: SearchParam): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default function TechnicianDetail() {
  const params = useLocalSearchParams();

  return (
    <TechnicianDetailScreen
      name={toStringParam(params.name)}
      role={toStringParam(params.role)}
      phone={toStringParam(params.phone)}
      avatarUrl={toStringParam(params.avatarUrl)}
      isAssigned={toStringParam(params.isAssigned) === 'true'}
      onBack={() => router.back()}
    />
  );
}
