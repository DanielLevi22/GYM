import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@screens/Home';
import { Avaliacao } from '@screens/Avaliacao';
import { Ficha } from '@screens/Ficha';
import { Treino } from '@screens/Treino';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: 'black' },
            tabBarLabelStyle: {color: 'white'} // define a cor de fundo da tab bar
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: () => (
                    <FontAwesome name="home" size={24} color="white"/>
                )
            }} />
            <Tab.Screen name="Avaliação" component={Avaliacao} options={{
                tabBarIcon: () => (
                    <FontAwesome name="th-list" size={24} color="white"/>
                )
            }} />
            <Tab.Screen name="Ficha" component={Ficha} options={{
                tabBarIcon: () => (
                    <FontAwesome name="list-alt" size={24} color="white"/>
                )
            }} />
            <Tab.Screen name="Treino" component={Treino} options={{
                tabBarIcon: () => (
                    <FontAwesome5 name="dumbbell" size={24} color="white"/>
                )
            }} />
        </Tab.Navigator>
    )
}