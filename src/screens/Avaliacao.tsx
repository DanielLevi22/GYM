import { Text, View } from "react-native";
import { Header } from "@components/header";
import { AvaliacaoItem } from "@components/AvaliacaoItem";
import { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';

interface Avaliacao {
  id: string;
  data: string;
  nome: string;
  medida: string;
}


export function Avaliacao() {
  const [avaliacaoData, setAvaliacaoData] = useState<Avaliacao[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore().collection('avaliacoes').get();
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        } as Avaliacao));
        setAvaliacaoData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-gray-100">Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-700 px-6">
      <Header variant="secondary" />

      <Text className="text-lg font-heading text-gray-100 text-center mt-8">Avaliação física</Text>
      <Text className="text-lg text-gray-100 mt-7 mb-4">Data: 25/04/2023</Text>

      {avaliacaoData.map(item => (
        <AvaliacaoItem 
          key={item.id}
          mes={item.nome}
          measure={item.medida}
        />
      ))}
    </View>
  );
}