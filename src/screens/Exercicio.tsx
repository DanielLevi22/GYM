import {  ImageBackground, Text, View } from "react-native";
import Logo from '@assets/Logo.svg'
import video from '@assets/video.png'
import { Button } from "@components/Button";
import { Header } from "@components/header";
export  function Exercicio() {
  return (
    <View className=" flex-1 bg-gray-700 px-6">
     <Header variant="secondary" />
      <Text className="text-center text-lg text-gray-100 mt-4">Ombros</Text>

      <ImageBackground source={video} className="h-[240px] rounded-lg overflow-hidden mt-4">
      </ImageBackground>

      <Text className="text-gray-100  text-base mt-8">Nome: Elevação Frontal</Text>
      <Text className="text-gray-100  text-base mt-3">Series: 3 x 15</Text>
      <Button title="Concluir" className="mt-12"/>
    </View>
  )
}