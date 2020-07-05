import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import Programacao from './programacao';
import Acervo from './acervo';
import Exposicao from './exposicao';
import Videos from './videos';
import Curadoria from './curadoria';

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
                <Stack.Screen
                    name='Exposicao'
                    component={Exposicao}
                    options={{ title: 'Exposição' }} />
                <Stack.Screen
                    name='Videos'
                    component={Videos}
                    options={{ title: 'Vídeos' }} />
                <Stack.Screen
                    name='Curadoria'
                    component={Curadoria}
                    options={{ title: 'Curadorias' }} />
            </Stack.Navigator>

        </NavigationContainer>
    )
};

export default MainStackNavigator