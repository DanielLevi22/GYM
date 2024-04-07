import { Text, View } from "react-native";
interface AvaliacaoItemProps {
  name: string;
  measure: string;
}
export  function AvaliacaoItem({name,measure}: AvaliacaoItemProps) {
  return (
    <View className="flex-row justify-between p-3 bg-red-700 rounded-lg mb-3">
      <Text className="text-base text-gray-100 font-heading">{name}</Text>
      <Text  className="text-base text-gray-100 font-heading">{measure}</Text>
    </View>
  )
}
