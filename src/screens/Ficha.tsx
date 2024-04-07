import {  Text, View,  } from "react-native";

import { Header } from "@components/header";
import { FichaCard } from "@components/FichaCard";

export  function Ficha() {



  const FichaData =  [
    { id: 1, nome: 'A', src: 'https://treinomestre.com.br/wp-content/uploads/2014/06/exercicios-treino-de-costas-iniciantes.jpg'},
    { id: 2, nome: 'B', src: 'https://treinomestre.com.br/wp-content/uploads/2014/06/exercicios-treino-de-costas-iniciantes.jpg'},
    { id: 3, nome: 'C', src: 'https://treinomestre.com.br/wp-content/uploads/2014/06/exercicios-treino-de-costas-iniciantes.jpg'},
    { id: 4, nome: 'D', src: 'https://treinomestre.com.br/wp-content/uploads/2014/06/exercicios-treino-de-costas-iniciantes.jpg'},
  ]


  return (
    <View className=" flex-1 bg-gray-700 px-6">
    <Header variant="secondary" />
      <Text className="text-center text-lg text-gray-100 mt-8">Ficha de treino</Text>
    <View className="mt-14">
      {FichaData.map( item => (
        <FichaCard
          key={item.id}
          nome={item.nome}
          src={item.src}
        />
      ))
      }
    </View>
    </View>
  )
}
