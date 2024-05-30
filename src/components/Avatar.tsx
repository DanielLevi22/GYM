import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View, ViewBase } from "react-native";

export function Avatar() {
  const imageUrl = 'https://mighty.tools/mockmind-api/content/human/44.jpg';
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <Image source={{ uri: imageUrl }}  className="w-14 h-14 rounded-full "/>
    </TouchableOpacity>
  );
}

