import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, Alert } from 'react-native'
import ThemedView from '../../components/ThemedView'  
import ThemedText from '../../components/ThemedText'  
import Spacer from '../../components/Spacer'     
import { Link, router } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') // Fixed: capital P
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    
    const { register } = useUser()

    const handleSubmit = async () => {
        // Validation
        if (!email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields')
            return
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match')
            return
        }

        if (password.length < 8) {
            Alert.alert('Error', 'Password must be at least 8 characters')
            return
        }

        setLoading(true)
        try {
            const result = await register(email, password)
            if (result.success) {
                Alert.alert('Success', 'Registration successful!')
                router.replace('/(tabs)/home')
            } else {
                Alert.alert('Error', result.error || 'Registration failed')
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong')
        } finally {
            setLoading(false)
        }
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
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize="none"
                />
                
                <ThemedTextInput 
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder="Password"
                    onChangeText={setPassword} // Fixed: capital P
                    value={password}
                    secureTextEntry
                    autoCapitalize="none"
                />

                <ThemedTextInput 
                    style={{ width: '80%', marginBottom: 20 }}
                    placeholder="Confirm Password"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry
                    autoCapitalize="none"
                />

                <ThemedButton onPress={handleSubmit} disabled={loading}>
                    <Text style={{color:'#f2f2f2'}}>
                        {loading ? 'Loading...' : 'Register'}
                    </Text>
                </ThemedButton>

                <Spacer height={100}/>
                <Link href='/Login'>
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
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    }
})