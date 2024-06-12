import { ScrollView, Text, View } from "react-native";
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
    <View style={{ flex: 1, paddingHorizontal: 20 , backgroundColor: '#171717'}} >
      <Header variant="secondary" />

      <Text style={{ fontSize: 20, fontFamily: 'heading', color: 'white', textAlign: 'center', marginTop: 20 }}>Avaliação física</Text>
      <Text style={{ fontSize: 20, color: 'white', marginTop: 10, marginBottom: 20 }}>Data: 25/04/2023</Text>

      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#171717', paddingBottom: 40}}>
        {avaliacaoData.map(item => (
          <AvaliacaoItem 
            key={item.id}
            mes={item.nome}
            measure={item.medida}
          />
        ))}
      </ScrollView>
    </View>
);
}