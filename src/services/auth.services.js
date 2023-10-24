import axios from "axios"

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/auth`
        })
    }

    signup(userData) {
        return this.api.post('/signup', userData)
    }
}

const authService = new AuthService()

export default authService