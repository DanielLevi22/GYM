import React from 'react'
import { ImageBackground, Text ,View,VirtualizedList} from 'react-native'

interface FichaCardProps {
  nome: string;
  src: string
}

export  function FichaCard({ nome, src }: FichaCardProps) {
  return (
    <ImageBackground source={{uri: src }}  className="h-[100px] rounded-lg bg-gray-600 items-center justify-center mb-4">
       <Text className="text-base text-gray-50" >{nome}</Text>
   </ImageBackground>
  )
}




