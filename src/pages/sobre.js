import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'


function Sobre({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.menuImage}
                        source={require('../icons/menu.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>A Casa da Cultura da América Latina, do Decanato de Extensão da Universidade de Brasília, foi criada para promover e divulgar a arte e a cultura latino-americana, incentivar e estender o conhecimento acumulado nos centros de pesquisa à sociedade mais ampla. A CAL vem se consolidando como um espaço de pesquisa, preservação e divulgação do patrimônio artístico da Universidade e das expressões culturais latino-americanas. Ao longo dos seus mais de 30 anos de existência, a CAL reuniu um acervo que chega a 2700 itens, parte deles aqui disponíveis para fruição e pesquisa.</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}>Localização:</Text>
            <Text style={styles.text}>Setor Comercial Sul, Quadra 4, Sala 106 - Edifício Anápolis, Asa Sul, Brasília - DF, Brasil - E-mail: cal@unb.br - Telefone: +55 61 3107-7971 </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    menu: {
        alignItems: 'center',
        alignContent: 'stretch',
    },
    menuImage: {
        borderRadius: 30,
        height: 60,
        width: 60,
    },
    text: {
        color: '#101010',
        fontSize: 16,
       
    },
})

export default Sobre

