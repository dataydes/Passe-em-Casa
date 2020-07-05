import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.estruturaConteudo}>
        <View style={styles.conteudo}>
          <View style={styles.textoConteudoPosition}>
            <Text style={styles.textoConteudo}>Exposição Triangular</Text>
            <Text style={styles.textoConteudo}>Local: Casa Niemeyer</Text>
            <Text style={styles.textoConteudo}>Período</Text>
          </View>
          <Image
            style={styles.imagem}
            source={{
              uri: 'http://dex.unb.br/images/cartaz.png',
            }}
          />
          <Text style={styles.textoDescricao}>
            Em dezembro, a Casa Niemeyer receberá a exposição “Triangular: arte deste século - Aquisições recentes para o acervo da Casa da Cultura da América Latina da Universidade de Brasília”. A exposição celebrará as novas aquisições de arte contemporânea da Universidade de Brasília - UnB e contará com obras de cerca de 100 artistas de todo o Brasil. Entre os nomes já confirmados estão: Ana Teixeira (MG), Aline Motta (RJ), Bárbara Wagner (DF), Dalton Paula (GO), Danielle Fonseca (PA), Denilson Baniwa (AM), Gê Orthof (DF), Grupo Contrafilé (SP), Guerreiro do Divino Amor (RJ), Helô Sanvoy (GO), João Castilho (MG), Juliana Notari (PE), Laercio Redondo (RJ), Lyz Parayzo (SP), Marcelo Silveira (PE) e Sérgio Sister (SP).
          </Text>
        </View>
        <View style={styles.conteudo}>
        <View style={styles.textoConteudoPosition}>
          <Text style={styles.textoConteudo}>Exposição Muda</Text>
          <Text style={styles.textoConteudo}>Local: Galeria CAL</Text>
          <Text style={styles.textoConteudo}>Período</Text>
          </View>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://brasilia.deboa.com/wp-content/uploads/2014/10/Exposi%C3%A7%C3%A3o-Muda_deboabrasilia.jpg',
            }}
          />
          <Text style={styles.textoDescricao}>
            Muda é o nome da exposição que as galerias da Casa da Cultura da América Latina da UnB (CAL) abrigam, a partir de 10 de março, com trabalhos de Ananda Giuliani, César Becker, Forças Amadas da Arte (Cleber Cardoso, Gisel Azevedo, Hilan Bensusan, Mateus Lucena, Raisa Curty e Suyan de Mattos), Isadora Dalle, Lara Ovídio, Luciana Ferreira, Luciana Paiva, Ludmilla Alves, Maria Eugênia Matricardi e RUT Solar.
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:'5%',
    backgroundColor: '#ebebeb',    
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonText: {
    marginTop: '2%',
  },
  menu: {
    flexDirection: 'column',
  },
  conteudo: {
    flexDirection: 'row',
  },
  estruturaConteudo: {
    alignContent: 'stretch',
  },
  textoConteudoPosition: {
    flexDirection: 'column',
  },
  textoConteudo: {

    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imagem: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
    backgroundColor: 'white',
  },

})

export default Home

