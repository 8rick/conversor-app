import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Button({ variant = "primary", onPress, currency, isSelected}) {

    return(
        <TouchableOpacity style={[
            onPress={onPress},
            styles.button, 
            isSelected && (variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary)

        ]}>
            <Text style={styles.buttonText}>{currency.code}</Text>
        </TouchableOpacity>


    )
}