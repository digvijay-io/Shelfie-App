import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/Logo.png'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style = {styles.container}>

      <ThemedLogo/>
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>The Number 1</ThemedText>

      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <Link href='/Login' style={styles.link}>
          <ThemedText>Login</ThemedText>
      </Link>
      
      <Link href='/Register' style={styles.link}>
          <ThemedText> Register</ThemedText>
      </Link>

      <Link href='/profile' style={styles.link}>
          <ThemedText> Profile</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },

    title : {
        fontWeight: 'bold',
        fontSize : 18
    },

    img : {
        verticalAlign : 10
    },

    link : {
        marginVertical : 10,
        borderBottomWidth : 1
    }
})