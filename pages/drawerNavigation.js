import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Home from './home';
import Programacao from './programacao';
import Acervo from './acervo';
import Exposicao from './exposicao';
import Videos from './videos';
import Curadoria from './curadoria';


const Drawer = createDrawerNavigator();
function drawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Programação" component={Programacao} />
                <Drawer.Screen name="Acervo" component={Acervo} />
                <Drawer.Screen name="Exposição" component={Exposicao} />
                <Drawer.Screen name="Vídeos" component={Videos} />
                <Drawer.Screen name="Curadorias" component={Curadoria} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};
export default drawerNavigation