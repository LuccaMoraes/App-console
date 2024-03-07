import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>História do Nintendo</Text>
      <View>
        <Image
          source={require('../assets/console-nintendo.jpg')}
          style={styles.console}
        />
      </View>
      <View>
        <Text style={styles.Txt}>
        Um dos consoles mais emblemáticos da Nintendo até hoje foi lançado em 1983 no Japão com o nome de Famicom (Family Computer), 
        mas só em 1985 o console chegou aos Estados Unidos, com um visual totalmente reformulado e um novo nome, Nintendo Entertainment System (NES).
        </Text>
        <Text style={styles.Txt}>
        O NES ajudou a revitalizar a indústria de vídeo games após a quebra da mesma devido a uma saturação de mercado com diversos consoles de baixa qualidade disponíveis.
         A nintendo mirou e acertou em cheio, trazendo com o NES um console barato, 
         simples e de alta qualidade para as mãos dos consumidores.

        </Text>
        <Text style={styles.Txt}>
        O console foi lançado no dia 15 de Julho de 1983 no japão, juntamente com os jogos Donkey Kong, Donkey Kong Jr. e Popey, 
        todos feitos pela Nintendo para arcade. Ao final de 1984 o Famicom já era console mais vendido do país. O console chegou em Nova York, 
        nos Estados Unidos, em 1985 mas o lançamento a nível nacional só ocorreu em Fevereiro de 1986, contando com 17 jogos disponíveis no lançamento.
        </Text>
        <Text style={styles.titulo}>Especificações Técnicas</Text>
        <Text style={styles.Txt}>
          Confira a seguir as especificações técnicas do NES, lançado em 1983
        </Text>
      </View>
      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#DF0024' }]}>
          <Image
            source={require('../assets/cpu.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Processador</Text>
          <Text style={styles.cardContent}>Ricoh 2A03 - Processador 8-bit</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#DF0024' }]}>
          <Image
            source={require('../assets/gpu.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>GPU</Text>
          <Text style={styles.cardContent}>52 Cores - 256 x 240</Text>
        </View>
      </View>

      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#DF0024' }]}>
          <Image
            source={require('../assets/ram.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>RAM</Text>
          <Text style={styles.cardContent}>2KB RAM - Memória</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#DF0024' }]}>
          <Image
            source={require('../assets/hdd.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Armazenamento</Text>
          <Text style={styles.cardContent}>Cartucho - Proprietário</Text>
        </View>
      </View>
      <View >
        <Text style={styles.titulo}>Super Mario bros</Text>
        <Text style={styles.Txt}>Apesar de não estar disponível no lançamento do console, 
        Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje.
        </Text>
        <Text style={styles.Txt}>A franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, 
        com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. 
        Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:
        </Text>
      </View>
      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#DF0024' }]}>
          <Image
            source={require('../assets/sales.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>40 milhões de cópias Até 1994</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#DF0024' }]}>
          <Image
            source={require('../assets/money.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>US$ 72 milhões Primeiros 4 meses</Text>
        </View>
      </View>

      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#DF0024' }]}>
          <Image
            source={require('../assets/ranking.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>95% de Aprovação Revista CVG</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#DF0024' }]}>
          <Image
            source={require('../assets/disc.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>Remake em 1993 Para o SNES</Text>
        </View>
      </View>
      <View>
          <Text style={styles.titulo}>Conclusão</Text>
          <Text style={styles.Txt}>A Nintendo é uma das empresas mais icônicas da indústria de jogos eletrônicos e 
          até hoje atrai milhares de fãs com seus consoles e franquias como Super Mario, The Legend of Zelda, 
          Pokémon, dentre muitas outras séries adoradas pelos fãs. A Nintendo conseguiu crescer em meio a crise dos vídeo games de 1983 e 
          transformar o que parecia ser o fim da indústria em um recomeço extremamente lucrativo. 
          </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  console: {
    width: 350,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#DF0024',
    width: '48%',
    aspectRatio: 1,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'center',
    color: '#ffffff',
  },
  cardContent: {
    fontSize: 16,
    textAlign:"center",
  },
  cardImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginBottom: 8,
    alignSelf: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
  },
  Txt: {
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
    paddingTop: 15
  },
});

export default App;
