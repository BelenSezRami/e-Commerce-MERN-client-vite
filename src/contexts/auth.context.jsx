import { createContext, useEffect, useState } from "react"
import authService from "../services/auth.services"

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [user, setUser] = useState({
        favoritePaintings: []
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        authenticateUser()
    }, [])

    const storeToken = token => {
        localStorage.setItem('authToken', token)
    }

    const removeToken = () => {
        localStorage.removeItem('authToken')
    }

    const logout = () => {
        setIsLoading(false)
        setUser(null)
        removeToken()
    }

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {
            authService
                .verify(token)
                .then(({ data }) => {
                    setUser({
                        ...data,
                        favoritePaintings: data.favoritePaintings || []
                    })
                    setIsLoading(false)
                })
                .catch(err => logout())
        }
        else {
            logout()
        }
    }

    const updateUser = (updatedUser) => {
        console.log('Usuario actualizado:', updatedUser)
        setUser(updatedUser)
    }

    return (
        <AuthContext.Provider value={{ user, updateUser, setUser, authenticateUser, storeToken, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }