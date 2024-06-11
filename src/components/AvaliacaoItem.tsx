import { Text, View } from "react-native";
interface AvaliacaoItemProps {
  measure: string;
  mes: string;
}
export  function AvaliacaoItem({measure,mes}: AvaliacaoItemProps) {
  return (
    <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
      <Text className="text-base text-gray-100 font-heading">{mes}</Text>
      <Text  className="text-base text-gray-100 font-heading">{measure}</Text>
    </View>
  )
}
