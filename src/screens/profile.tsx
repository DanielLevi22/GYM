import { Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "@components/Avatar";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/header";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';

export  function Profile() {
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await auth().signOut();
      console.log('Usuário deslogado');
      navigation.navigate;
    } catch (error) {
      console.error('Erro ao deslogar:', error);
    }
  };
  return (
      <View className=" flex-1 bg-gray-700 px-6">
      <Header variant="secondary" />
        <View className="items-center mt-12 gap-3 justify-center" >
          <Avatar />
          
        </View>
        <Input placeholder="Nome" className="mt-10 mb-4"/>
        <Input placeholder="Sobrenome" className="mb-4" />
        <Input placeholder="Senha" className="mb-8" />
        <View className="gap-3">
          <Button title="Salvar"/>
          <TouchableOpacity className="w-full py-3 bg-transparent border-solid border-2 border-red-700 rounded-lg items-center" onPress={logout}>
            <Text className="font-heading text-lg text-white">Sair</Text>
          </TouchableOpacity>
        </View>
        </View>
  )
  }