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

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') // Fixed: capital P
    const [loading, setLoading] = useState(false)

    const { login } = useUser()

    const handleSubmit = async () => {
        // Validation
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields')
            return
        }

        setLoading(true)
        try {
            const result = await login(email, password)
            if (result.success) {
                Alert.alert('Success', 'Login successful!')
                router.replace('/(tabs)/home') // Navigate to home or your main screen
            } else {
                Alert.alert('Error', result.error || 'Login failed')
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
                    Login to your Account
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

                <ThemedButton onPress={handleSubmit} disabled={loading}>
                    <Text style={{color:'#f2f2f2'}}>
                        {loading ? 'Loading...' : 'Login'}
                    </Text>
                </ThemedButton>
                
                <Spacer height={100}/>
                <Link href='/Register'>
                    <ThemedText style={{textAlign: 'center'}}>
                        Register Instead
                    </ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Login

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