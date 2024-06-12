import { View, Image, Text, Alert, TouchableOpacity, StyleSheet } from "react-native";
import background from '@assets/background.png'
import Logo from '@assets/Logo.svg'
import { Input, InputPassword } from "@components/Input";
import { Button } from "@components/Button";
import { Ionicons } from '@expo/vector-icons';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Usuario = {
  email: string,
  matricula: string,
  nome: string,
  senha: string,
  src: string
}


export function SignIn() {
  const navigation = useNavigation();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await firestore().collection('usuario').get();
        const usersData: Usuario[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() as Usuario,
        }));
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users: ", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSignUp = async () => {
    if (matricula.length > 0 && senha.length > 0) {
      const user = users.find((user: Usuario) => user.matricula === matricula);
      if (!user) {
        Alert.alert('Erro', 'Usuário não encontrado!');
        return;
      }
      if (user.matricula === matricula && user.senha === senha) {
        await AsyncStorage.setItem('userData', JSON.stringify({
          matricula: user.matricula,
          nome: user.nome,
          src: user.src,
        }));
        navigation.navigate('Tabs'); 
      } else {
        Alert.alert('Erro', 'Senha incorreta!');
      }
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos!');
    }
  };

  return (
    <View className="flex-1 bg-gray-700">
      <Image source={background} alt="logo" className="absolute" resizeMode="contain" />
      <View className="items-center my-24">
        <Logo />
        <Text className="text-gray-100 text-sm">Treine sua mente e seu corpo</Text>
      </View>
      <View className="items-center">
        <Text className="text-gray-100 text-xl mb-6 font-heading">Acesse sua conta</Text>
      </View>
      <View className="items-center px-6">
        <Input
          placeholder="Matrícula"
          keyboardType="numeric"
          value={matricula}
          onChangeText={setMatricula}
        />
        <InputPassword
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!showPassword}
        />
        <Button title="Acessar" onPress={handleSignUp} />
      </View>
    </View>
  );
}
