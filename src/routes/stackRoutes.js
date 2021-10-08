import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Search from '../pages/Search';



const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="HomeTab"
                component={Home} />

            <Stack.Screen
                name="Details"
                component={Details} />

            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Sua busca'

                }} />
        </Stack.Navigator>
    );
}

export default StackRoutes;