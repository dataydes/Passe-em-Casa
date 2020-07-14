import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'


function Programacao({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.menuImage}
                        source={require('../icons/menu.png')}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Programação de Julho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:'5%',
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
        fontSize: 24,
        fontWeight: 'bold'
    },
})

export default Programacao

