import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '@components/Tabs';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Exercicio } from '@screens/Exercicio';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    async function loadUserData() {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString !== null) {
          const userData = JSON.parse(userDataString);
          setUser(userData);
        } else {
          setUser(null);
          setInitializing(false);
        }
      } catch (error) {
        console.error("Error loading user data from AsyncStorage: ", error);
        setUser(null);
        setInitializing(false);
      }
    }

    loadUserData();
  }, []);

  if (initializing || !fontLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={user ? "Tabs" : "SignIn"}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Exercicio" component={Exercicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}