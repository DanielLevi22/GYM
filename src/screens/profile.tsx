import { ImageBackground, Text, View, ViewBase } from "react-native";
import Logo  from '@assets/Logo.svg'
import { Avatar } from "@components/Avatar";
import treino from '@assets/treinoA.png'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Header } from "@components/header";
export  function Profile() {
  return (
    <View className=" flex-1 bg-gray-700 px-6">
    <Header variant="secondary" />
      <View className="items-center mt-12" >
        <Avatar />
        <Text className="text-gray-50">Camera</Text>
      </View>
      <Input placeholder="Nome" className="mt-10 mb-4"/>
      <Input placeholder="sobrenome" className="mb-4" />
      <Input placeholder="senha" className="mb-8" />
      <Button title="Salvar"/>
      </View>
  )
  }