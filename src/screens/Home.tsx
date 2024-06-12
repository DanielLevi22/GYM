import { Text, View } from "react-native";
import { Header } from "@components/header";
import HomeCard from "@components/HomeCard";
import { useEffect, useState } from "react";
import { Usuario } from "./SignIn";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [currentUser, setCurrentUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation()

  useEffect(() => {
    const fetchUserFromAsyncStorage = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString!== null) {
          const userData = JSON.parse(userDataString);
          setCurrentUser(userData as Usuario);
          setLoading(false);
        } else {
          setCurrentUser(null);
          setLoading(false);
          console.log('No user data found in AsyncStorage.');
        }
      } catch (error) {
        console.error("Error fetching user from AsyncStorage: ", error);
        setCurrentUser(null);
        setLoading(false);
      }
    };

    fetchUserFromAsyncStorage();
  }, []);

  const HomeData = [
    {
      id: 1,
      title: "Seu último treino",
      name: "A",
      src: "https://treinomestre.com.br/wp-content/uploads/2014/06/exercicios-treino-de-costas-iniciantes.jpg",
    },
    {
      id: 2,
      title: "Suas Ultimas Avaliações",
      name: "B",
      src: "https://treinomestre.com.br/wp-content/uploads/2014/06/exercicios-treino-de-costas-iniciantes.jpg",
    },
  ];

  const userName = currentUser?.nome || "";

  return (
    <View className="flex-1 bg-gray-700 px-6">
      <Header variant="primary" />

      <Text className="text-gray-100 font-heading text-center text-base mb-8">
        Olá, {userName}!
      </Text>
      {loading && <Text>Loading...</Text>}
      {!loading && HomeData.map((item) => (
        <HomeCard
          key={item.id}
          name={item.name}
          src={item.src}
          title={item.title}
        />
      ))}

      <View className="flex-row justify-between mt-12 gap-3">
        <View className="p-5 items-center justify-center bg-red-500 rounded-lg">
          <Text>Planilha</Text>
        </View>

        <View className="p-5 items-center justify-center bg-gray-500 rounded-lg">
          <Text>Planilha</Text>
        </View>

        <View className="p-5 items-center justify-center bg-yellow-500 rounded-lg">
          <Text>Planilha</Text>
        </View>
      </View>
    </View>
  );
}
