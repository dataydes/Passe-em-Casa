import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


function Exposicao({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Exposições pela casa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:'5%',
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

