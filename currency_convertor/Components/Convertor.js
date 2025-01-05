import { useState } from "react";
import { StyleSheet } from "react-native"
import { Button, ToggleButton } from "react-native-paper"

export default function Convertor(){
    const [ amount,setAmount ] = useState("");
    const [ convertedAmount, setConvertedAmount ] = useState(null);
    const [ conversionDirection, setConversionDirection ] = useState('Rs to USD');
    const [ result, setResult ] = useState("");

    const conversionRate = {
        'Rs to USD' : 0.010,
        'USD to Rs' : 290,
    }
    
    return(
        <>
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