import { Client, Account, ID, Avatars} from "react-native-appwrite"

const client = new Client()
        .setProject('68f3862b000dbaad4bfe')
        .setPlatform('dev.dj.shelfie')


export const account = new Account(client)
export const avatars = new Avatars(client)