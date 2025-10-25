import { createContext, useState, useEffect } from "react"
import { account } from "../lib/appwrite"
import { ID } from "react-native-appwrite"

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Check if user is logged in on app start
    useEffect(() => {
        checkUser()
    }, [])

    async function checkUser() {
        try {
            const response = await account.get()
            setUser(response)
        } catch (error) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
            return { success: true }
        } catch (error) {
            console.log('Login error:', error.message)
            return { success: false, error: error.message }
        }
    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password) // Note: ID.unique() with parentheses
            await login(email, password)
            return { success: true }
        } catch (error) {
            console.log('Register error:', error.message)
            return { success: false, error: error.message }
        }
    }

    async function logout() {
        try {
            await account.deleteSession('current')
            setUser(null)
            return { success: true }
        } catch (error) {
            console.log('Logout error:', error.message)
            return { success: false, error: error.message }
        }
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </UserContext.Provider>
    )
}