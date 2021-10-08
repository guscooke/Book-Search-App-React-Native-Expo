import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './stackRoutes';
import Libraries from '../pages/Libraries';
import Profile from '../pages/Profile';

import { Feather, Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                style: {
                    backgroudColor: '#121212',
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#000',
                tabBarStyle: {
                    margin: 0,
                    padding: 0,
                },
            }}>

            <Tab.Screen
                name="Home"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Libraries"
                component={Libraries}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="book" size={size} color={color} />
                    )
                }} />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    )
                }} />

        </Tab.Navigator>
    )
}