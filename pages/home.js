import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


function Home(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conteúdos</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Programacao')}>
        <Text style={styles.buttonText}>Programação</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Acervo')}>
        <Text style={styles.buttonText}>Acervo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Exposicao')}>
        <Text style={styles.buttonText}>Exposição</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Videos')}>
        <Text style={styles.buttonText}>Vídeos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Curadoria')}>
        <Text style={styles.buttonText}>Curadorias</Text>
      </TouchableOpacity>
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
  buttonText: {
    marginTop: '2%',
  }
})

export default Home

