import { ImageBackground, Text, View, ViewBase } from "react-native";
import Logo  from '@assets/Logo.svg'
import { Avatar } from "@components/Avatar";
import treino from '@assets/treinoA.png'
import { Header } from "@components/header";
import HomeCard from "@components/HomeCard";
export  function Home() {

  const HomeData =  [
    { id: 1, title: 'Seu ultimo treino', name: 'A', src: 'https://treinomestre.com.br/wp-content/uploads/2014/06/exercicios-treino-de-costas-iniciantes.jpg'},
    { id: 2, title: 'Suas Ultimas Avaliações',name: 'B', src: 'https://treinomestre.com.br/wp-content/uploads/2014/06/exercicios-treino-de-costas-iniciantes.jpg'},
  ]

  return (
    <View className=" flex-1 bg-gray-700 px-6">
      <Header variant="primary" />

      <Text className="text-gray-100 font-heading text-center text-base mb-8">Ola, Adriana</Text>
        { HomeData.map(item => (
          <HomeCard 
            key={item.id}
            name={item.name}
            src={item.src}
            title={item.title}
          />
        ))
          
        }

      <View className="flex-row justify-between mt-12 ">
        <View className="p-7 items-center justify-center bg-red-500 rounded-lg">
          <Text>Planilha</Text>
        </View>
        <View className="p-7 items-center justify-center bg-gray-500 rounded-lg">
          <Text>Planilha</Text>
        </View>

        <View className="p-7 items-center justify-center bg-yellow-500 rounded-lg">
          <Text>Planilha</Text>
        </View>
      </View>

    </View>
  )
}
