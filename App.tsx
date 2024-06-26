import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '@components/Tabs';
import auth from '@react-native-firebase/auth';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Exercicio } from '@screens/Exercicio';
import { Treino } from '@screens/Treino';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      onAuthStateChanged(user);
    });
    return () => subscriber();
  }, []);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  if (initializing || !fontLoaded) {
    return <Loading />;
  }

  if (!user) {
    return <SignIn />;
  }

  return (
    
    <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#171717" />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Exercicio" component={Exercicio} />
      <Stack.Screen name="Treino" component={Treino} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}