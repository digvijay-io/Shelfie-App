import {Image, useColorScheme} from 'react-native'

import DarkLogo from '../assets/img/Logo_Dark.png'
import LightLogo from '../assets/img/Logo.png'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

    return(
        <Image source={logo} 
        {...props} />
    )
}

export default ThemedLogo