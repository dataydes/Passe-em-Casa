import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native'


function Exposicao({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={{ height: 60, width: 60 }}
                    source={require('../icons/menu.png')}
                />
            </TouchableOpacity>
            <Text style={styles.text}>Exposições pela casa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
})

export default Exposicao

