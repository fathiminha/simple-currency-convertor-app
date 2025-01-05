import { useState } from "react";
import { StyleSheet } from "react-native"
import { Button, Divider, TextInput, ToggleButton } from "react-native-paper"

export default function Convertor(){
    const [ amount,setAmount ] = useState("");
    const [ convertedAmount, setConvertedAmount ] = useState(null);
    const [ conversionDirection, setConversionDirection ] = useState('Rs to USD');
    const [ result, setResult ] = useState("");

    const conversionRate = {
        'Rs to USD' : 0.010,
        'USD to Rs' : 290,
    }

    const handleConvert = () =>{
        const rate = conversionRate[conversionDirection];
        const result = parseFloat(amount) * rate;
        setConvertedAmount(result.toFixed(2));
    }
    
    const toggleConversionDirection = () => {
        setConversionDirection((prevDirection) =>
            prevDirection === 'Rs to USD' ? 'USD to Rs' : 'Rs to USD'
        );
        setConvertedAmount(null);
        setAmount('');
    }
    return(
        <>
        <View style={styles.header}>
            <Text variant = 'headlineLarge'> Currency Convertor </Text>
        </View>
        <Divider />
        <View style ={styles.body}>
            <TextInput
                label={`Amount in ${conversionDirection.split(' ')[0]}`}
                mode="outlined"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                style={styles.input}
            />
        </View>
        <View>
            <Button mode="contained" onPress={handleConvert} style={styles.button}>
                Convert to {conversionDirection.split(' ')[2]}
            </Button>

            {convertedAmount && (
                <Text variant="bodyLarge" style={styles.result}>
                    {`${amount} ${conversionDirection.split(' ')[0]} = ${convertedAmount} ${conversionDirection.split(' ')[2]}`}
                </Text>
            )}
            <Button mode="outlined" onPress={toggleConversionDirection} style={styles.toggleButton}>
                    Switch to {conversionDirection === 'Rs to USD' ? 'USD to Rs' : 'Rs to USD'}
                </Button>
            </View>
            <View style={styles.footer}>
            <Text variant='bodyMedium'>Made by: IT3133 Practical Sessions</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        flex: 3,
        width:'100%',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20
    },
    body: {
        flex: 5,
        width: '100%',
    },
    footer: {
        flex : 2,
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    input:{
        marginBottom: 20
    },
    button:{
        marginVertical: 10,
    },
    ToggleButton:{
        marginTop: 10,
    },
    result:{
        textAlign: 'center',
        marginTop: 20,
    }
})