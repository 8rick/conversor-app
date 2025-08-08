import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Platform, ScrollView } from 'react-native';
import Button  from './src/components/button';
import { styles } from './app.style'; 
import { currencies } from './src/constants/currencies';
import { Input } from './src/components/input';
import { colors } from './src/styles/colors';
import { ResutlCard } from './src/resultCard';
import { exchangeRateApi } from './src/services/api';
import { useState } from 'react';

export default function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchagerate, setExchagerate] = useState(null);


  

 async function fetchExchangeRate(){
  const data = await  exchangeRateApi('BRL')
  console.log(data)
  }

  return (

  <KeyboardAvoidingView
     style={styles.container}
     behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
    >
    <ScrollView style={styles.scrollView}>

    <View style={styles.content}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.title}>Conversor de Moedas</Text>
        <Text style={styles.subTitle}>Converta valores entre diferentes moedas</Text>
      </View>

      <View style={styles.card}>  
        <Text style={styles.label}>De:</Text>
        <View style={styles.currencyGrif}>
          {currencies.map(currency => (
              <Button variant='primary' 
                 key={currency.code}
                 currency={currency}
                 onPress={() => setFromCurrency(currency.code)}
              >

              </Button>
          ))}

        </View>

        <Input label="Valor: "/>

        <TouchableOpacity style={styles.swapButton}>
           <Text style={styles.swapButtonText}>
             ↑↓
           </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Para: </Text>
        <View style={styles.currencyGrif}>
            {currencies.map(currency => (
              <Button variant='secondary'
                 key={currency.code}
                 currency={currency}
                 onPress={()=> setToCurrency(currency.code)}
                 isSelected={toCurrency === currency.code}
              >

              </Button>
            ))}
        </View>
       </View>

        <TouchableOpacity 
        style={styles.convertButton}
        onPress={fetchExchangeRate}
        >
          <Text style={styles.swapButtonText}>
            Converter
          </Text>
        </TouchableOpacity>

        <ResutlCard />
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
  );
}

