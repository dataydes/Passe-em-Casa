import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


function Videos() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vídeos</Text>
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

export default Videos

