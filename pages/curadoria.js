import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native'



function Curadoria({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={{ height: 60, width: 60 }}
                    source={require('../icons/menu.png')}
                />
            </TouchableOpacity>
            <Text style={styles.text}>Curadorias</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
})

export default Curadoria

