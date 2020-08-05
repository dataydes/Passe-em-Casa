import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Casa from '../pages/home';
import Sobre from '../pages/sobre';
import Exposicao from '../pages/exposicao';

const Drawer = createDrawerNavigator();
function drawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Casa">
                <Drawer.Screen name="Casa" component={Casa} />
                <Drawer.Screen name="Exposição" component={Exposicao} />
                <Drawer.Screen name="Sobre" component={Sobre} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};
export default drawerNavigation
/*
import Acervo from '../pages/acervo';
import Programacao from '../pages/programacao';
import Videos from '../Projeto/videos';
import Curadoria from '../pages/curadoria';
import QRcode from '../pages/qrcode';
import Experiencia from '../Projeto/experiencia';

<Drawer.Screen name="Acervo" component={Acervo} />
<Drawer.Screen name="Programação" component={Programacao} />
<Drawer.Screen name="Vídeos" component={Videos} />
<Drawer.Screen name="Curadorias" component={Curadoria} />
<Drawer.Screen name="QRcode" component={QRcode} />
<Drawer.Screen name="Experiência" component={Experiencia} />
*/