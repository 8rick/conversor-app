import { View, Text } from 'react-native';
import { styles } from './style';


export function ResutlCard({
    exchangeRate,
    result,
    fromCurrency,
    toCurrency,
    currencies
}){

    if(!result || !exchangeRate) return null;

    const toSymbol = currencies.find( currency => currency.code === toCurrency).symbol

    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                Resultado:
            </Text>
            <Text style={styles.amout}>
              {toSymbol}  {result}
            </Text>
            <Text style={styles.rate}>
                Taxa de câmbio 1: {fromCurrency} = {exchangeRate.toFixed(4) }{toCurrency}
            </Text>
        </View>
    )
}
   