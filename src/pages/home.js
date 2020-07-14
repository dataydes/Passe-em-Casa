import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.menuImage}
            source={require('../icons/menu.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.estruturaConteudo}>
          <View style={styles.conteudo}>
            <View style={styles.estruturaTextoConteudo}>
              <Text style={styles.textoConteudo}>Exposição Triangular</Text>
              <Text style={styles.textoConteudo}>Local: Casa Niemeyer</Text>
              <Text style={styles.textoConteudo}>Período</Text>
            </View>
            <View style={styles.estruturaImagem}>
              <Image style={styles.imagem}
                source={{
                  uri: 'http://dex.unb.br/images/cartaz.png',
                }}
              />
            </View>
            <Text style={styles.textoDescricao}>
              Em dezembro, a Casa Niemeyer receberá a exposição “Triangular: arte deste século - Aquisições recentes para o acervo da Casa da Cultura da América Latina da Universidade de Brasília”. A exposição celebrará as novas aquisições de arte contemporânea da Universidade de Brasília - UnB e contará com obras de cerca de 100 artistas de todo o Brasil. Entre os nomes já confirmados estão: Ana Teixeira (MG), Aline Motta (RJ), Bárbara Wagner (DF), Dalton Paula (GO), Danielle Fonseca (PA), Denilson Baniwa (AM), Gê Orthof (DF), Grupo Contrafilé (SP), Guerreiro do Divino Amor (RJ), Helô Sanvoy (GO), João Castilho (MG), Juliana Notari (PE), Laercio Redondo (RJ), Lyz Parayzo (SP), Marcelo Silveira (PE) e Sérgio Sister (SP).
          </Text>
          </View>
          <View style={styles.conteudo}>
            <View style={styles.estruturaTextoConteudo}>
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

          <View style={styles.conteudo}>
            <View style={styles.estruturaTextoConteudo}>
              <Text style={styles.textoConteudo}>Exposição Mamulengo</Text>
              <Text style={styles.textoConteudo}>Local: Galeria CAL</Text>
              <Text style={styles.textoConteudo}>Período Dezembro</Text>
            </View>
            <View style={styles.estruturaImagem}>
              <Image
                style={styles.imagem}
                source={{
                  uri: 'http://dex.unb.br/images/Twitter_1.png',
                }}
              />
            </View>
            <Text style={styles.textoDescricao}>
              Muda é o nome da exposição que as galerias da Casa da Cultura da América Latina da UnB (CAL) abrigam, a partir de 10 de março, com trabalhos de Ananda Giuliani, César Becker, Forças Amadas da Arte (Cleber Cardoso, Gisel Azevedo, Hilan Bensusan, Mateus Lucena, Raisa Curty e Suyan de Mattos), Isadora Dalle, Lara Ovídio, Luciana Ferreira, Luciana Paiva, Ludmilla Alves, Maria Eugênia Matricardi e RUT Solar.
          </Text>
          </View>
          <View style={styles.conteudo}>
            <View style={styles.estruturaTextoConteudo}>
              <Text style={styles.textoConteudo}>Exposição: Teima</Text>
              <Text style={styles.textoConteudo}>Local: Galeria CAL</Text>
              <Text style={styles.textoConteudo}>Período: 17/out</Text>
            </View>
            <Image
              style={styles.imagem}
              source={{
                uri: 'https://scontent.fbsb16-1.fna.fbcdn.net/v/t1.0-9/s960x960/43577720_1867355643354661_883520230721060864_o.jpg?_nc_cat=100&_nc_sid=8024bb&_nc_oc=AQna9iyHfNkjJkCnez58nG0PWNRdxrKO67sY1lhV6XGsiz01h0qhBMs7mTkHtfuKOuM&_nc_ht=scontent.fbsb16-1.fna&_nc_tp=7&oh=828b48763d2481bafdccc73f806f7971&oe=5F31D5E0',
              }}
            />
            <Text style={styles.textoDescricao}>
              Dia 17/out as galerias da CAL/UnB abrigam as exposições Teima com Ana Calzavara e Marina Zilbersztejn e O Lado Côncavo que reúne Mariana Destro, João Diniz, Renata Malheiros e Rômulo Barros com curadoria e expografia de Natália Amorim. Abertura: 19h. Confira!
          </Text>
          </View>
        </View>
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
    marginTop:'10%',
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
    alignContent:'flex-start',
    alignItems:'flex-start',
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

export default Home

