import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import Programacao from './programacao';
import Acervo from './acervo';

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ title: 'Bem vindx a casa da América Latina' }} />
                <Stack.Screen
                    name='Programacao'
                    component={Programacao}
                    options={{ title: 'Programação' }} />
                <Stack.Screen
                    name='Acervo'
                    component={Acervo}
                    options={{ title: 'Acervo' }} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}; 

export default MainStackNavigator