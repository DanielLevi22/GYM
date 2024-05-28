import { Text, View } from "react-native";

import { Header } from "@components/header";
import { FichaCard } from "@components/FichaCard";

export function Ficha() {
  const FichaData = [
    {
      id: 1,
      nome: "               A \n Peitoral e Ombros",
      src: "https://img.freepik.com/fotos-gratis/mulher-loira-de-esportes-em-um-treinamento-de-sportswear-em-uma-academia_1157-31120.jpg?t=st=1716899549~exp=1716903149~hmac=4533f99bccea0d5181df0afc844519159b35fc05bc00af9c592bf7237aca57ec&w=1380",
    },
    {
      id: 2,
      nome: "               B \n Costas e Trapézio",
      src: "https://img.freepik.com/fotos-gratis/jovem-saudavel-atleta-fazendo-exercicios-flexoes-no-ginasio_155003-32054.jpg?t=st=1716899400~exp=1716903000~hmac=35d48509cfe6f4b0fe0142f06be18832881045f63a9c24769d2aed80dcf691ff&w=1380",
    },
    {
      id: 3,
      nome: "               C \n Pernas Completas",
      src: "https://img.freepik.com/fotos-gratis/linda-mulher-trabalhando-seus-quadrilateros-na-maquina-prima-no-ginasio_231208-3396.jpg?t=st=1716899890~exp=1716903490~hmac=1dbc1b0e25ee86b0b9752d4259a4f1bd82a3e10d1fce2d91e0753bfda3874a62&w=740",
    },
    {
      id: 4,
      nome: "                        D \n Tríceps, Biceps e Antebraços",
      src: "https://img.freepik.com/fotos-gratis/cara-jovem-e-forte-treina-no-ginasio_1157-13791.jpg?t=st=1716900031~exp=1716903631~hmac=15fd3f79575b7ce8797056dea7931065dc81548020479f9e9f7315e2eec2b9c9&w=1380",
    },
  ];

  return (
    <View className=" flex-1 bg-gray-700 px-6">
      <Header variant="secondary" />
      <Text className="text-center text-lg text-gray-100 mt-8">
        Ficha de treino
      </Text>
      <View className="mt-14">
        {FichaData.map((item) => (
          <FichaCard key={item.id} nome={item.nome} src={item.src} />
        ))}
      </View>
    </View>
  );
}
