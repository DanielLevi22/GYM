import { Text, View } from "react-native";
import Logo from '@assets/Logo.svg'
import { Header } from "@components/header";

export function Avaliacao() {
  return (
    <View className=" flex-1 bg-gray-700 px-6">
     <Header variant="secondary" />

      <Text className="text-lg font-heading text-gray-100 text-center mt-8">Avaliação física</Text>
      <Text className="text-lg  text-gray-100 mt-7 mb-4">Data: 25/04/2023</Text>

      <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
        <Text className="text-base text-gray-100 font-heading">Peso</Text>
        <Text  className="text-base text-gray-100 font-heading">50 kg</Text>
      </View>
      <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
        <Text className="text-base text-gray-100 font-heading">Peso</Text>
        <Text  className="text-base text-gray-100 font-heading">50 kg</Text>
      </View>
      <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
        <Text className="text-base text-gray-100 font-heading">Peso</Text>
        <Text  className="text-base text-gray-100 font-heading">50 kg</Text>
      </View>
      <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
        <Text className="text-base text-gray-100 font-heading">Peso</Text>
        <Text  className="text-base text-gray-100 font-heading">50 kg</Text>
      </View>
      <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
        <Text className="text-base text-gray-100 font-heading">Peso</Text>
        <Text  className="text-base text-gray-100 font-heading">50 kg</Text>
      </View>
      <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
        <Text className="text-base text-gray-100 font-heading">Peso</Text>
        <Text  className="text-base text-gray-100 font-heading">50 kg</Text>
      </View>
      <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
        <Text className="text-base text-gray-100 font-heading">Peso</Text>
        <Text  className="text-base text-gray-100 font-heading">50 kg</Text>
      </View>

    </View>

  )
}
