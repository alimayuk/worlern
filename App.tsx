import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import MissionsScreen from './src/screen/MissionsScreen';
import Icon from 'react-native-vector-icons/Ionicons'; // Icon kütüphanesi
import GlobalScreen from './src/screen/GlobalScreen';
import SettingsScreen from './src/screen/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack Navigator
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
  </Stack.Navigator>
);

// Missions Stack Navigator (Gerekirse)
const MissionsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MissionsMain" component={MissionsScreen} />
  </Stack.Navigator>
);

// Global Stack Navigator (Gerekirse)
const GlobalStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="GlobalMain" component={GlobalScreen} />
  </Stack.Navigator>
);

// Settings Stack Navigator (Gerekirse)
const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SettingsMain" component={SettingsScreen} />
  </Stack.Navigator>
);

// Bottom Tab Navigator
const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Missions') {
          iconName = 'list-outline';
        } else if (route.name === 'Global') {
          iconName = 'earth';
        } else if (route.name === 'Settings') {
          iconName = 'settings';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
      headerShown: false, // Üstte sekme adının gözükmesini engeller
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} options={{ title: 'Anasayfa' }} />
    <Tab.Screen name="Missions" component={MissionsStack} options={{ title: 'Görevler' }} />
    <Tab.Screen name="Global" component={GlobalStack} options={{ title: 'Sıralama' }} />
    <Tab.Screen name="Settings" component={SettingsStack} options={{ title: 'Ayarlar' }} />
  </Tab.Navigator>
);

// Ana Uygulama
const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
