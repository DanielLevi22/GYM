import { View, Image, Text, ViewBase, Alert } from "react-native";
import background from '@assets/background.png'
import Logo from '@assets/Logo.svg'
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import auth from '@react-native-firebase/auth';
import { useState } from "react";


export function SignIn() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignUp = () => {
    auth()
      .signInWithEmailAndPassword(`${matricula}@example.com`, senha)
      .then(() => {
        console.log('Conta de usuário criada e conectada!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Erro', 'Esse endereço de email já está em uso!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Erro', 'Esse endereço de email é inválido!');
        } else if (error.code === 'auth/weak-password') {
          Alert.alert('Erro', 'Sua senha precisa conter pelo menos 6 dígitos!');
        }
        else {
          Alert.alert('Erro', error.message);
        }
        console.error(error);
      });
  };

  return (
    <View className="flex-1 bg-gray-700">
      <Image source={background} alt="logo"
        className="absolute"
        resizeMode="contain"
      />

      <View className="items-center my-24">
        <Logo />
        <Text className="text-gray-100 text-sm">Treine sua mente e seu corpo</Text>
      </View>

      <View className="items-center">
        <Text className="text-gray-100 text-xl mb-6 font-heading">
          Acesse sua conta
        </Text>
      </View>

      <View className="items-center px-6">
        <Input
          placeholder="Matrícula"
          keyboardType="numeric"
          value={matricula}
          onChangeText={setMatricula}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Button title="Acessar" onPress={handleSignUp} />
      </View>
    </View>
  );
}