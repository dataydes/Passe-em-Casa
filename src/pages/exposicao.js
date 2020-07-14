import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import axios from 'axios';


var chave = '';
var dados1 = [];
dados(chave)
function dados(chave) {
    axios.get('http://localhost:3002/api/acervo/' + chave)
        .then(function (response) {
            dados1 = (response.data.docs);            
        })
        .catch(function (error) {
            console.warm(error);
        })
};

function Exposicao({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.menuImage}
                        source={require('../icons/menu.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <FlatList data={dados1}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.estruturaConteudo}>
                                <View style={styles.conteudo}>
                                    <View style={styles.estruturaTextoConteudo}>
                                        <Text style={styles.textoConteudo}>{item.name}</Text>
                                        <Text style={styles.textoConteudo}>{item.description}</Text>
                                        <Text style={styles.textoConteudo}>Período</Text>
                                    </View>
                                    <View style={styles.estruturaImagem}>
                                        <Image style={styles.imagem}
                                            source={{
                                                uri: item.url,
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        backgroundColor: '#ebebeb',
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
    estruturaConteudo: {
        alignContent: 'stretch', //preenchimento do coneteúdo pela tela.     
    },
    conteudo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    estruturaTextoConteudo: {
        marginTop: '10%',
        alignSelf: 'flex-start',
        flexDirection: 'column',
    },
    textoConteudo: {
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'space-around',
        //flexWrap: 'wrap'  //Quebra de linha nos textos.
    },
    estruturaImagem: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
    },
    imagem: {
        resizeMode: 'contain', // redimensionada a figura
        height: 250,
        width: 200,

    },
    textoDescricao: {
        display: 'none', // Ocultado o texto da exposição
    }

})

export default Exposicao

