import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

var dados1 = [];
var chave = '';
dados(chave);
function dados(chave) {
    axios.get('http://localhost:3002/api/acervo/' + chave)
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
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.menuImage}
                        source={require('../icons/menu.png')} />
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Curadoria</Text>
            <FlatList data={dados1}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
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

export default Curadoria

