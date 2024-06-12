import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";



interface HomeCardProps {
  title: string;
  name: string;
  src: string;
}
export default function HomeCard({name,src,title}:HomeCardProps) {
  const navigate  = useNavigation()
  return (
    <View className="gap-3 mb-5">
      <TouchableOpacity onPress={() => navigate.navigate("Avaliação")}>
        <Text className="text-gray-100 text-base font-heading">{title}</Text>
        <ImageBackground source={{uri: src}} className="h-[100px] rounded-lg bg-gray-600 items-center justify-center overflow-hidden">
          <Text className="text-base text-gray-50">{name}</Text>
        </ImageBackground>
      </TouchableOpacity>
      </View>
  )
}
