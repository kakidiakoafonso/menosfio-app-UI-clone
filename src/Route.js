/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import  Home  from "./Home/Home";
import Search from './Pesquisar/Search';
import Settings from './Definicoes/Settings';
import Detalhes from './Detalhe/Detalhes';
import Comentario from './Comentario/Comentario';
import Splash from './Splash';

const Stack = createStackNavigator();
export default function Route()
{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
                <Stack.Screen name="Definicoes" component={Settings} options={{headerShown:false}}/>
                <Stack.Screen name="Detalhes" component={Detalhes} options={{headerShown:false}}/>
                <Stack.Screen name="Comentario" component={Comentario} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
