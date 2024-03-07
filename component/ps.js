import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>História do Playstation</Text>
      <View>
        <Image
          source={require('../assets/console-playstation.jpg')}
          style={styles.console}
        />
      </View>
      <View>
        <Text style={styles.Txt}>
        A Sony iniciou sua jornada no mundo dos consoles de vídeo games em 1994, com a chegada do PS1 ao Japão. 
        A expansão não demorou e em Setembro de 1995 o aparelho chegou aos Estados Unidos. Naquela época, duas outras gigantes japonesas, 
        Sega e Nintendo, dominavam o mercado de jogos eletrônicos, e ninguém esperava que um terceiro player pudesse mudar isso. 
        </Text>
        <Text style={styles.Txt}>
        Quando o PS1 foi anunciado nos Estados Unidos por U$$ 299, isso mexeu com o mercado já que alguns dias antes a sega havia anunciado o Saturn por $399, 
        o que somado com os diversos problemas causados pelo lançamento as pressas do Saturn, consolidaram a posição do PlayStation no mercado de jogos.
        </Text>
        <Text style={styles.Txt}>
        Isso tudo foi somado com o fato do Saturn ser focado em jogos 2D, enquanto o PS1 chegou com a proposta de ser um console totalmente em 3D, 
        o que o tornava ainda mais interessante, por ser um console mais poderoso e mais barato que o seu concorrente.

        </Text>
        <Text style={styles.titulo}>Especificações Técnicas</Text>
        <Text style={styles.Txt}>
        Confira a seguir as especificações técnicas do PlayStation, lançado em 1994
        </Text>
      </View>
      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#006FCD' }]}>
          <Image
            source={require('../assets/cpu.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Processador</Text>
          <Text style={styles.cardContent}>Sony CXD8530BQ - 33.8688 MHz</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#006FCD' }]}>
          <Image
            source={require('../assets/gpu.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>GPU</Text>
          <Text style={styles.cardContent}>Sony CXD8514Q - 1MB VRAM</Text>
        </View>
      </View>

      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#006FCD' }]}>
          <Image
            source={require('../assets/ram.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>RAM</Text>
          <Text style={styles.cardContent}>2 MB EDO DRAM - 33 MHz</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#006FCD' }]}>
          <Image
            source={require('../assets/hdd.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Armazenamento</Text>
          <Text style={styles.cardContent}>Drive de CD-ROM - 660 MB / disco</Text>
        </View>
      </View>
      <View >
        <Text style={styles.titulo}>Final Fantasy VII</Text>
        <Text style={styles.Txt}>Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. 
        Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, 
        além de ter sido muito bem recebido pelo público e pela crítica especializada.
        </Text>
        <Text style={styles.Txt}>Final Fantasy VII foi um lançamento muito importante para a Sony, 
        isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, 
        tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir:
        </Text>
      </View>
      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#006FCD' }]}>
          <Image
            source={require('../assets/sales.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>2 milhões de cópias Em 2 dias no Japão</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#006FCD' }]}>
          <Image
            source={require('../assets/money.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>US$ 115 milhões Em 2 dias no Japão</Text>
        </View>
      </View>

      <View style={styles.cardSection}>
        <View style={[styles.card, { backgroundColor: '#006FCD' }]}>
          <Image
            source={require('../assets/ranking.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>92% de Aprovação Metacritic</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#006FCD' }]}>
          <Image
            source={require('../assets/disc.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardContent}>Remake em 2020 Para o PS4</Text>
        </View>
      </View>
      <View>
          <Text style={styles.titulo}>Conclusão</Text>
          <Text style={styles.Txt}>A Sony construiu com o PlayStation algo que para muita gente era impensável, 
          não apenas por mostrar que era possível construir um produto barato e de qualidade, 
          mas também por ter conseguido vencer uma das líderes de mercado na época de seu lançamento na briga pela fidelidade dos consumidores.
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
    backgroundColor: '#006FCD',
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
