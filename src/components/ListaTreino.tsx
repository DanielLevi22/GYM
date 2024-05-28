import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SectionList,
  StyleSheet,
  Dimensions,
} from "react-native";

interface Exercise {
  id: string;
  exercise: string;
  image: string;
}

interface Section {
  title: string;
  data: Exercise[];
}

const windowWidth = Dimensions.get("window").width;

const ListaTreino: React.FC = () => {
  const DATA: Section[] = [
    {
      title: "Peitorais e Ombro",
      data: [
        {
          id: "1",
          exercise: "Supino inclinado com halteres: 4 séries de 10 repetições.",
          image:
            "https://img.freepik.com/fotos-gratis/mulher-com-dumbbells-mentindo-ligado-banco_23-2147789668.jpg?t=st=1716900296~exp=1716903896~hmac=7d0cd3b10a3475d17e7200a873d7f18fb57fb85faac66ad3b64825c243f362a2&w=1380",
        },
        {
          id: "2",
          exercise:
            "Supino reto com barra ou halteres conjugado com Peck Deck (voador): 3 séries de 6 a 8 repetições (supersérie).",
          image:
            "https://img.freepik.com/fotos-gratis/homem-treinando-na-academia-local_93675-129483.jpg?t=st=1716905051~exp=1716908651~hmac=ad5083bb3683bfe5f26cecde03b223f0d9efd34b028c3b240e1b7b8d53b2f254&w=1380",
        },
        {
          id: "3",
          exercise:
            "Crossover: 3 séries com pequena pausa de descanso de 10, 8 e 6 repetições.",
          image:
            "https://img.freepik.com/fotos-gratis/jovem-atleta-caucasiana-musculosa-treinando-na-academia-fazendo-exercicios-de-forca_155003-38387.jpg?t=st=1716905401~exp=1716909001~hmac=ce2181b6b4e4b673c7180fbe311c7d306e90a0f41c56075b2b7145585fa44935&w=1380",
        },
        {
          id: "4",
          exercise:
            "Elevação lateral: 50 repetições com pausa de descanso de 10 segundos a cada 10 repetições.",
          image:
            "https://img.freepik.com/fotos-gratis/homem-atraente-em-forma-malhando-em-ambientes-fechados-com-halteres_23-2149175408.jpg?t=st=1716905519~exp=1716909119~hmac=224e71471ea5b25f7b00cd12a03e5ad47b968fffc1745ae0a388bdad55913f4e&w=1380",
        },
      ],
    },
    // Adicione outras seções conforme necessário
  ];

  const renderItem = ({ item }: { item: Exercise }) => (
    <View style={styles.itemContainer}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.imageBackground}
      >
        <Text
          style={[styles.text, styles.textShadow]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.exercise}
        </Text>
      </ImageBackground>
    </View>
  );

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item: Exercise, index: number) => item.id + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  imageBackground: {
    height: 100,
    width: windowWidth - 40,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  text: {
    fontSize: 16,
    color: "#F9FAFB",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  textShadow: {
    textShadowColor: "#000000",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  sectionHeader: {
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F9FAFB",
    textAlign: "center",
  },
});

export default ListaTreino;
