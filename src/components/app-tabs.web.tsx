import { TabSlot, useTabsWithTriggers } from 'expo-router/ui';

type Triggers = Parameters<typeof useTabsWithTriggers>[0]['triggers'];

const TRIGGERS: Triggers = [
  { type: 'internal', name: 'index', href: '/' },
  { type: 'internal', name: 'explore', href: '/explore' },
];

export default function AppTabs() {
  const { NavigationContent } = useTabsWithTriggers({
    triggers: TRIGGERS,
    initialRouteName: 'index',
  });

  return (
    <NavigationContent>
      <TabSlot style={{ height: '100%' }} />
    </NavigationContent>
  );
}
