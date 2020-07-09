import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/home';
import Programacao from '../pages/programacao';
import Acervo from '../pages/acervo';
import Exposicao from '../pages/exposicao';
import Videos from '../pages/videos';
import Curadoria from '../pages/curadoria';

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