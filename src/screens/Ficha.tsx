import { ImageBackground, Text, View, VirtualizedList } from "react-native";
import Logo from '@assets/Logo.svg'
import treino from '@assets/treinoA.png'
import { Header } from "@components/header";
import { FichaList } from "@components/FichaList";

export  function Ficha() {
  const treinos = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    nome: `Treino ${String.fromCharCode(65 + i)}`,
    src:  '',
  }));
  
  const getItemCount = (data: any[]) => data.length;

  const getItem = (data: any[], index: number) => data[index];


  return (
    <View className=" flex-1 bg-gray-700 px-6">
    <Header variant="secondary" />
      <Text className="text-center text-lg text-gray-100 mt-8">Ficha de treino</Text>
    <View className="mt-14">
       <VirtualizedList
        data={treinos}
        initialNumToRender={10}
        renderItem={({ item }) => <FichaList nome={item.nome} src='' />}
        keyExtractor={(item) => item.id.toString()}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
    </View>
  )
}
