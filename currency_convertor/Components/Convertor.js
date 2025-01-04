import { StyleSheet } from "react-native"
import { Button, ToggleButton } from "react-native-paper"

export default function Convertor(){
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