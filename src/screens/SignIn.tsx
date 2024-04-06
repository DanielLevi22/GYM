import { View,Image, Text, ViewBase } from "react-native";
import background from  '@assets/background.png'
import Logo  from '@assets/Logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
export function SignIn() {
  return (
    <View className="flex-1 bg-gray-700">
     <Image source={background} alt="logo" 
      className="absolute" 
      resizeMode="contain"
     />

     <View className="items-center my-24">
      <Logo />
      <Text className="text-gray-100 text-sm">Treine sua mente e seu corpo</Text>
     </View>
      
    <View className="items-center">
      <Text className="text-gray-100 text-xl mb-6 font-heading">
        Acesse sua conta
      </Text>
    </View>

    <View className="items-center px-6">
      <Input placeholder="Matricula" keyboardType="numeric" />
      <Input placeholder="Senha" secureTextEntry/>
      <Button
        title="Acessar"
        className=""
      />
    </View>
    </View>
  )
}