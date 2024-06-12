import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@screens/Home';
import { Avaliacao } from '@screens/Avaliacao';
import { Ficha } from '@screens/Ficha';
import { Treino } from '@screens/Treino';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Profile } from '@screens/profile';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
            borderTopColor: "black",
            borderTopWidth: 0,

          },
          tabBarLabelStyle: { color: 'white' },
          tabBarBackground: () => (
            <LinearGradient colors={['#18181b', '#78716c']} style={{ flex: 1, paddingTop: 90 }} start={{x:0, y: 0}} end={{x:0, y:1}}/>
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, focused}) => (
              <FontAwesome name="home" size={24} color={focused ? '#dc2626' : '#c3c3c3'} />
            ),
          }}
        />
        <Tab.Screen
          name="Avaliação"
          component={Avaliacao}
          options={{
            tabBarIcon: ({color, focused}) => (
              <FontAwesome name="th-list" size={24} color={focused ? '#dc2626' : '#c3c3c3'} />
            ),
          }}
        />
        <Tab.Screen
          name="Ficha"
          component={Ficha}
          options={{
            tabBarIcon: ({color, focused}) => (
              <FontAwesome name="list-alt" size={24}  color={focused ? '#dc2626' : '#c3c3c3'} />
            ),
          }}
        />
    
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({color, focused}) => (
              <FontAwesome5 name="user" size={24}  color={focused ? '#dc2626' : '#c3c3c3'}/>
            ),
          }}
        />
      </Tab.Navigator>
  );
}
