import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native'

import ThemedView from '../../components/ThemedView'  
import ThemedText from '../../components/ThemedText'  
import Spacer from '../../components/Spacer'     
import { Link } from 'expo-router'
import {Colors} from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
    
  const handleSubmit = () =>{
    console.log('Register form Submitted', email, password)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>

            <Spacer />

            <ThemedText title={true} style={styles.title}> 
                Register for an Account
            </ThemedText>

            <ThemedTextInput 
                style={{ width: '80%', marginBottom: 20 }}
                placeholder = "Email"
                keyboardType = "email-address"
                onChangeText = {setEmail}
                value = {email}
            />
            
            <ThemedTextInput 
                style={{ width: '80%', marginBottom: 20 }}
                placeholder = "Password"
                onChangeText = {setpassword}
                value = {password}
                secureTextEntry
            />

            <ThemedButton onPress = {handleSubmit}>
                <Text style={{color:'#f2f2f2'}}>Register</Text>
            </ThemedButton>

            <Spacer height={100}/>
            <Link href={'/Login'}> 
                <ThemedText style={{textAlign: 'center'}}>
                    Login Instead
                </ThemedText>
            </Link>   

        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems : "center"
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor : Colors.primary,
        padding : 15,
        borderRadius: 5
    },
    pressed:{
        opacity : 0.5
    }
})