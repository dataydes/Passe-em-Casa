import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


function Acervo({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.menuImage}
                        source={require('../icons/menu.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.estrutura}>
                <Image
                    style={styles.imagem}
                    source={{
                        uri: 'http://www.acervocal.unb.br/wp-content/uploads/2019/08/CAL.0828-RJ.jpg',
                    }}
                />
                <View style={styles.detalheObra} >
                <Text style={styles.tituloObra}>Artista:</Text>
                    <Text style={styles.tituloObra}>Coleção:</Text>
                    <Text style={styles.nomeObra}>Ano:</Text>
                    
                    <Text style={styles.nomeObra}>Alfredo Volpi</Text>
                    <Text style={styles.tituloObra}>Data de aquisição:</Text>
                    <Text style={styles.nomeObra}>1997</Text>
                </View>
            </View>
            <View style={styles.descricaoObra}>
                <Text style={styles.tituloObra}>Contexto:</Text>
                <Text style={styles.tituloObra}>Descrição:</Text>
                <Text style={styles.nomeObra}>serigrafia sobre papel</Text>
            </View>


        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        marginTop: '5%',
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
    estrutura: {
        flexDirection: 'row',
        //marginTop: '8%',
        marginLeft: '2%',
    },
    detalheObra: {
        flexDirection: 'column',
        marginLeft: '2%',
    },
    imagem: {
        resizeMode: 'contain',
        height: 200,
        width: 200,
        backgroundColor: 'white',
    },
    tituloObra: {
        marginLeft: '2%',
        fontWeight: 'bold',
    },
    nomeObra: {
        marginLeft: '2%',
        marginBottom: '5%',
    },
    descricaoObra: {
        //marginTop:'2%',
    }
});
export default Acervo

