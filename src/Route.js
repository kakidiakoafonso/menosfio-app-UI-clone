/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import  Home  from "./Home/Home";
import Search from './Pesquisar/Search';
import Example from './Definicoes/Definicoes';

const Stack = createStackNavigator();
export default function Route()
{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
                <Stack.Screen name="Definicoes" component={Example} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
