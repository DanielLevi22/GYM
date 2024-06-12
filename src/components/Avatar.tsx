import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";


interface AvatarProps {
  size?: number;
}
export function Avatar({ size = 14}: AvatarProps) {
  const imageUrl = 'https://mighty.tools/mockmind-api/content/human/44.jpg';
  const navigation = useNavigation();
  const Size = `w-${size} -${size}`;
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <Image source={{ uri: imageUrl }}  className={`w-14 h-14 rounded-full ${size && Size}`}/>
    </TouchableOpacity>
  );
}

