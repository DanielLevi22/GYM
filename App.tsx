
import { View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { Home } from '@screens/Home';
import { Avaliacao } from '@screens/Avaliacao';
import { Ficha } from '@screens/Ficha';
import { Treino } from '@screens/Treino';
import { Exercicio } from '@screens/Exercicio';
import { Profile } from '@screens/profile';

export default function App() {
 const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
        <View className='flex-1'>
          <StatusBar 
           barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {fontLoaded ?  <Ficha /> : <Loading />}
        </View>
  
  );
}

