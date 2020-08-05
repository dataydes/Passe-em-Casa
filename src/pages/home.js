import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import consulta from '../services/consulta';
const dados1 = consulta(); 
function Casa({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.menuImage}
            source={require('../icons/menu.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.estruturaConteudo}>
        <ScrollView>
          <FlatList data={dados1}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
              return (
                <View style={styles.conteudo}>
                  <View style={styles.estruturaTextoConteudo}>
                    <Text style={styles.textoConteudo}>{item.nome}</Text>
                    <Text style={styles.textoConteudo}>{item.local}</Text>
                    <Text style={styles.textoConteudo}>{item.dataI}</Text>
                    <Text style={styles.textoConteudo}>{item.dataF}</Text>
                  </View>
                  <View style={styles.estruturaImagem}>
                    <Image style={styles.imagem}
                      source={{ uri: item.imagem }} />
                  </View>
                  <Text style={styles.textoDescricao}>{item.descricao}</Text>
                </View>
              );
            }} />
        </ScrollView>
      </View>
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

export default Casa

