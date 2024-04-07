import { Text, View } from "react-native";
import Logo from '@assets/Logo.svg'
import { Header } from "@components/header";
import { AvaliacaoItem } from "@components/AvaliacaoItem";

export function Avaliacao() {

  const AvaliacaoData =[
    { id: 1, nome: 'Item 1', peso: '50 kg' },
    { id: 2, nome: 'Item 2', peso: '50 kg' },
    { id: 3, nome: 'Item 3', peso: '50 kg' },
    { id: 4, nome: 'Item 4', peso: '50 kg' },
    { id: 5, nome: 'Item 5', peso: '50 kg' },
    { id: 6, nome: 'Item 6', peso: '50 kg' },
    { id: 7, nome: 'Item 7', peso: '50 kg' }
  ];
  
  return (
    <View className=" flex-1 bg-gray-700 px-6">
     <Header variant="secondary" />

      <Text className="text-lg font-heading text-gray-100 text-center mt-8">Avaliação física</Text>
      <Text className="text-lg  text-gray-100 mt-7 mb-4">Data: 25/04/2023</Text>


      {AvaliacaoData.map(item => (
        <AvaliacaoItem 
          key={item.id}
          name={item.nome}
          measure={item.peso}
        />
      ))}


      {/* <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
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
      </View> */}

    </View>

  )
}
