import {  ImageBackground, Text, View } from "react-native";
import Logo from '@assets/Logo.svg'
import supino from '@assets/supino.png'
import { Header } from "@components/header";
export  function Treino() {
  return (
    <View className=" flex-1 bg-gray-700 px-6">
      <Header  variant="secondary"/>
      <Text className="text-center text-lg text-gray-100 mt-8">Treino A</Text>

      <View className="mt-4">
        <Text className="text-base font-heading text-gray-100">Peito</Text>
        <View className="flex-row gap-2">
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
        </View>
      </View>

      <View className="mt-10">
        <Text className="text-base font-heading text-gray-100">Peito</Text>
        <View className="flex-row gap-2">
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
        </View>
      </View>

      <View className="mt-10">
        <Text className="text-base font-heading text-gray-100">Peito</Text>
        <View className="flex-row gap-2">
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
        </View>
      </View>

      <View className="mt-10">
        <Text className="text-base font-heading text-gray-100">Peito</Text>
        <View className="flex-row gap-2">
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
          <View className="w-[130px] h-[100px] gap-1">
            <ImageBackground source={supino} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center">
            </ImageBackground>
            <Text className="text-gray-100 text-center">Supino-reto</Text>
          </View>
        </View>
      </View>
 
    </View>
  )
}
