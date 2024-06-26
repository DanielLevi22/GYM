import { ImageBackground, Text, View } from "react-native";
import Logo from "@assets/Logo.svg";
import { Header } from "@components/header";
import TreinoList from "@components/ListaTreino";
export function Treino() {
  return (
    <View className=" flex-1 bg-gray-700 px-6">
      <Header variant="secondary" />
      <Text className="text-center text-lg text-gray-100 mt-8">Treino A</Text>
      <View className="px-2 flex-1">
        <TreinoList />
      </View>
    </View>
  );
}
