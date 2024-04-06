import { ImageBackground, Text, View } from "react-native";
import Logo from '@assets/Logo.svg'
import treino from '@assets/treinoA.png'
import { Header } from "@components/header";
export  function Ficha() {
  return (
    <View className=" flex-1 bg-gray-700 px-6">
    <Header variant="secondary" />
      <Text className="text-center text-lg text-gray-100 mt-8">Ficha de treino</Text>
    <View className="mt-14">
      <ImageBackground source={treino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center mb-4">
        <Text className="text-base text-gray-50">Treino A</Text> 
      </ImageBackground>
      <ImageBackground source={treino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center mb-4">
        <Text className="text-base text-gray-50">Treino A</Text>
      </ImageBackground>
      <ImageBackground source={treino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center mb-4">
        <Text className="text-base text-gray-50">Treino A</Text>
      </ImageBackground>
    </View>
    </View>
  )
}
