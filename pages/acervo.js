import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Acervo() {
    return (
        <View style={styles.container}>
                <View style={styles.estrutura}>
                    <Image
                        style={styles.imagem}
                        source={{
                            uri: 'http://www.acervocal.unb.br/wp-content/uploads/2019/08/CAL.0828-RJ.jpg',
                        }}
                    />
                    <View style={styles.detalheObra} >
                        <Text style={styles.tituloObra}>Nome da Obra:</Text>
                        <Text style={styles.nomeObra}>...</Text>
                        <Text style={styles.tituloObra}>Autor:</Text>
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
    },
    estrutura: {
        flexDirection: 'row',
        marginTop: '8%',
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

