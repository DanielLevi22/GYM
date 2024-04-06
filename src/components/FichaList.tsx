import React from 'react'
import { ImageBackground, Text ,View,VirtualizedList} from 'react-native'

interface FichaItemProps {
  nome: string;
  src: string
}

export  function FichaList({ nome,src}: FichaItemProps) {
  return (
    <ImageBackground source={{uri: src }}  className="h-[100px] rounded-lg bg-gray-600 items-center justify-center mb-4">
       <Text className="text-base text-gray-50" >{nome}</Text>
   </ImageBackground>
  )
}



// Dados fictícios de treinos
const treinos = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  nome: `Treino ${String.fromCharCode(65 + i)}`,
}));

