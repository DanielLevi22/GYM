import { Text, View } from "react-native";
import { Avatar } from "./Avatar";

import Logo  from '@assets/Logo.svg'

interface HeaderProps {
  variant: 'primary' | 'secondary'
}



export function Header({ variant }: HeaderProps) {


  
  return (
    <>
      {variant === 'primary' && (
        <View className="py-4 flex flex-row justify-between items-center mt-4">
          <Logo  width={100} height={42} />
          <Avatar />
       </View>
      )}
      {variant === 'secondary' && (
        <View className="py-4 flex flex-row justify-between items-center mt-4">
          
          <Text className="text-gray-100">Voltar</Text>
          <Logo width={100} height={42} />
        </View>
      )}
    
    </>
  )
}