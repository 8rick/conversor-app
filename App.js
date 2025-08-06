import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button  from './src/components/button';

export default function App() {
  return (

    <View>
      <StatusBar style="light" />

      <View>
        <Text>Conversor de Moedas</Text>
        <Text>Converta valores entre diferentes moedas</Text>
      </View>

      <View>  
        <Text>De:</Text>
        <Button variant='secondary' />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
