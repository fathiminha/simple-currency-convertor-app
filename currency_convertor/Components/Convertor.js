import { StyleSheet, View } from 'react-native';
import { Text, Divider, TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

export default function Convertor() {
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [conversionDirection, setConversionDirection] = useState('Rs to USD');

    const conversionRate = {
        'Rs to USD': 0.005,
        'USD to Rs': 200,
    };

    const handleConvert = () => {
        if (!amount || isNaN(amount)) {
            alert('Please enter a valid numeric amount.');
            return;
        }
        const rate = conversionRate[conversionDirection];
        console.log("Converting using rate:", rate, "for direction:", conversionDirection);

        const result = parseFloat(amount) * rate;
        setConvertedAmount(result.toFixed(2));
    };

    const toggleConversionDirection = () => {
        console.log("Current direction before toggle:", conversionDirection);

        setConversionDirection((prevDirection) =>
            prevDirection === 'Rs to USD' ? 'USD to Rs' : 'Rs to USD'
        );

        setConvertedAmount(null);
        setAmount('');

        setTimeout(() => {
            console.log("Current direction after toggle:", conversionDirection);
        }, 0);
    };

    return (
        <>
            <View style={styles.header}>
                <Text variant="headlineLarge">Currency Converter</Text>
            </View>
            <View style={styles.body}>
                <TextInput
                    label={`Amount in ${conversionDirection.startsWith('Rs') ? 'Rs' : 'USD'}`}
                    mode="outlined"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                    style={styles.input}
                />
                <Divider />
                <Button mode="contained" onPress={handleConvert} style={styles.button}>
                    Convert to {conversionDirection.split(' ')[2]}
                </Button>

                {convertedAmount !== null && (
                    <Text variant="bodyLarge" style={styles.result}>
                        {`${amount} ${conversionDirection.split(' ')[0]} = ${convertedAmount} ${conversionDirection.split(' ')[2]}`}
                    </Text>
                )}

                <Button 
                    mode="outlined" 
                    onPress={toggleConversionDirection} 
                    style={styles.toggleButton}>
                    {conversionDirection === 'Rs to USD' ? 'Switch to USD to Rs' : 'Switch to Rs to USD'}
                </Button>
            </View>
            <View style={styles.footer}>
                <Text variant="bodyMedium"></Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
    },
    body: {
        flex: 5,
        width: '100%',
    },
    footer: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    input: {
        marginBottom: 20,
    },
    button: {
        marginVertical: 10,
    },
    toggleButton: {
        marginTop: 10,
    },
    result: {
        textAlign: 'center',
        marginTop: 20,
    },
});
