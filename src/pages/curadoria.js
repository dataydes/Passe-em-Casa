import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import { render } from 'react-dom';

var dados1 = [];
var chave = '';//5f03396bf001d2398c4beb23
dados(chave);
function dados(chave) {
    axios.get('http://localhost:3001/api/acervo/' + chave)
        .then(function (response) {
            dados1 = (response.data.docs);
        })
        .catch(function (error) {
            console.warm(error);
        })
};

function Curadoria({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={{ height: 60, width: 60 }}
                    source={require('../icons/menu.png')} />
            </TouchableOpacity>
            <Text style={styles.text}>Curadoria</Text>
            <FlatList data={dados1}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <View><Text>{item.name}</Text></View>
                    );
                }}
            />
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

export default Curadoria

