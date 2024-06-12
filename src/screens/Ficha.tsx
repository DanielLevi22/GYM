import { Text, View } from "react-native";

import { Header } from "@components/header";
import { FichaCard } from "@components/FichaCard";
import { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';

interface FichaProps {
  id: string;
  nome: string;
  src: string;
}
export function Ficha() {
  const [fichaData, setFichaData] = useState<FichaProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firestore().collection('fichas').get();
        const data = snapshot.docs.map(doc => {
      

          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setFichaData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 

  return (
    <View className=" flex-1 bg-gray-700 px-6">
      <Header variant="secondary" />
      <Text className="text-center text-lg text-gray-100 mt-8">
        Ficha de treino
      </Text>
      <View className="mt-14">
        {fichaData.map((item) => (
          <FichaCard key={item.id} nome={item.nome} src={item.src} id={item.id} />
        ))}
      </View>
    </View>
  );
}
