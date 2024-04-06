import React from 'react';
import { View, Text, ImageBackground, SectionList } from 'react-native';

const supino = require('../assets/supino.png'); // Certifique-se de substituir pelo caminho correto da imagem

interface Exercise {
  id: string;
  exercise: string;
}

interface Section {
  title: string;
  data: Exercise[];
}

const TreinoList: React.FC = () => {
  const DATA: Section[] = [
    {
      title: 'Peito',
      data: [
        { id: '1', exercise: 'Supino-reto' },
        { id: '2', exercise: 'Supino-reto' },
        { id: '3', exercise: 'Supino-reto' },
        { id: '4', exercise: 'Supino-reto' },
       
      ],
    },
    {
      title: 'Costas',
      data: [
        { id: '1', exercise: 'Supino-reto' },
        { id: '2', exercise: 'Supino-reto' },
        { id: '3', exercise: 'Supino-reto' },
        { id: '4', exercise: 'Supino-reto' },
       
      ],
    },
  
  
  ];

  const renderItem = ({ item }: { item: Exercise }) => (
    <View  className='w-[95%] h-[100px] m-1'>
      <ImageBackground
        source={supino}
        className='flex-1 rounded-lg items-center justify-center overflow-hidden'
      >
        <Text className='text-white text-center text-base font-semibold'>{item.exercise}</Text>
      </ImageBackground>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <View className='py-2'>
      <Text  className='text-xl font-bold text-white'>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item: Exercise, index: number) => item.id + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default TreinoList;
