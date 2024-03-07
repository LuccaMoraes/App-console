import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>História do Xbox</Text>
      <View>
        <Image
          source={require('../assets/console-xbox.png')}
          style={styles.console}
        />
      </View>
      <View>
        <Text style={styles.Txt}>
          A Microsoft começou sua história com o público gamer em 2001, com o
          lançamento do Xbox. Lançado na época para concorrer com o PS2 da Sony
          e o Game Cube da Nintendo. O Xbox oferecia um hardware mais poderoso
          que o dos seus concorrentes.
        </Text>
        <Text style={styles.Txt}>
          E para mostrar a capacidade desse novo console super poderoso a
          Microsoft precisava de um jogo que usasse todo esse potencial, e foi
          aí que surgiu Halo, que fez um enorme sucesso atingindo uma imensa
          base de fãs, principalmente nos Estados Unidos.
        </Text>
        <Text style={styles.titulo}>Especificações Técnicas</Text>
        <Text style={styles.Txt}>
          Confira a seguir as especificações técnicas do Xbox de 2001.
        </Text>
      </View>
      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#00FF00' }]}>
          <Image
            source={require('../assets/cpu.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Processador</Text>
          <Text style={styles.cardContent}>Intel Pentium 3 - 733 MHz</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#00FF00' }]}>
          <Image
            source={require('../assets/gpu.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>GPU</Text>
          <Text style={styles.cardContent}>nVidia NV2A - 233 MHz</Text>
        </View>
      </View>

      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#00FF00' }]}>
          <Image
            source={require('../assets/ram.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>RAM</Text>
          <Text style={styles.cardContent}>64 MB DDR SDRAM - 200 MHz</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#00FF00' }]}>
          <Image
            source={require('../assets/hdd.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Armazenamento</Text>
          <Text style={styles.cardContent}>HD 8GB - 5400 RPM</Text>
        </View>
      </View>
      <View >
        <Text style={styles.titulo}>O fenômeno Halo</Text>
        <Text style={styles.Txt}>Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox.</Text>
        <Text style={styles.Txt}>Halo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.</Text>
      </View>
      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#00FF00' }]}>
          <Image
            source={require('../assets/sales.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>4.7 milhões de cópias Até Julho de 2006</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#00FF00' }]}>
          <Image
            source={require('../assets/money.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>US$ 170 milhões Apenas nos EUA</Text>
        </View>
      </View>

      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#00FF00' }]}>
          <Image
            source={require('../assets/ranking.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>97% de Aprovação Metacritic</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#00FF00' }]}>
          <Image
            source={require('../assets/disc.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>Remake em 2014 Para o Xbox One</Text>
        </View>
      </View>
      <View>
          <Text style={styles.titulo}>Conclusão</Text>
          <Text style={styles.Txt}>A Microsoft conseguiu criar com o Xbox uma grande base de fãs em todo mundo que jogam suas franquias diariamente. O que começou como uma tentativa de defender o territórios dos PCs nas salas se tornou um dos produtos mais vendidos da companhia e parte de um dos setores mais lucrativos da industria do entretenimento.</Text>
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
    backgroundColor: '#008001',
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
