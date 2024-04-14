import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { Home } from '@screens/Home';
import { Avaliacao } from '@screens/Avaliacao';
import { Ficha } from '@screens/Ficha';
import { Treino } from '@screens/Treino';
import { Exercicio } from '@screens/Exercicio';
import { Profile } from '@screens/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '@components/Tabs';

// Importar Firebase Auth
import auth from '@react-native-firebase/auth';

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
    return () => subscriber(); // unsubscribe on unmount
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
      <Tabs />
    </NavigationContainer>
  );
}