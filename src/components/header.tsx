import { Button, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "./Avatar";

import Logo from '@assets/Logo.svg'
import { Home } from "@screens/Home";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';

interface HeaderProps {
  variant: 'primary' | 'secondary'
}



export function Header({ variant }: HeaderProps) {
  const navigation = useNavigation();
  // function redirectToHome() {
  //   navigation.navigate();
  // }
  return (
    <>
      {variant === 'primary' && (
        <View className="py-4 flex flex-row justify-between items-center mt-4">
          <Logo width={100} height={42} />
          <Avatar />
        </View>
      )}
      {variant === 'secondary' && (
        <View className="py-4 flex flex-row justify-between items-center mt-4">

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <FontAwesome5 name="arrow-left" size={16} color='white' />
          </TouchableOpacity>
          <Logo width={100} height={42} />
        </View>
      )}

    </>
  )
  
}