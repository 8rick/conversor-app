import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Button({variant ="primary"}){

    return(
        <TouchableOpacity style={[
            styles.button, 
            variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary,
            styles.buttonSecondary

        ]}>
            <Text style={styles.buttonText}>Teste</Text>
        </TouchableOpacity>
    )
}