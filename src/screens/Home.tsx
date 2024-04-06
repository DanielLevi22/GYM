import { ImageBackground, Text, View, ViewBase } from "react-native";
import Logo  from '@assets/Logo.svg'
import { Avatar } from "@components/Avatar";
import treino from '@assets/treinoA.png'
import { Header } from "@components/header";
export  function Home() {
  return (
    <View className=" flex-1 bg-gray-700 px-6">
      <Header variant="primary" />

      <Text className="text-gray-100 font-heading text-center text-base mb-8">Ola, Adriana</Text>

      <View className="gap-3 mb-5">
        <Text className="text-gray-100 text-base font-heading">Seu ultimo treino</Text>
        <ImageBackground source={treino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
          <Text className="text-base text-gray-50">Treino A</Text>
        </ImageBackground>
      </View>

      <View className="gap-3">
        <Text className="text-gray-100 text-base font-heading">Suas Ultimas Avaliações</Text>
        <ImageBackground source={treino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
          <Text className="text-base text-gray-50">Treino A</Text>
        </ImageBackground>
      </View>

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
