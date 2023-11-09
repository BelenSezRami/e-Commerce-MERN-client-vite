import axios from 'axios'

class UserServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAllUsers() {
        return this.api.get(`/getAllUsers`)
    }

    getOneUser(user_id) {
        return this.api.get(`/getOneUser/${user_id}`)
    }

    editUser(user_id, userData) {
        return this.api.put(`/editUser/${user_id}`, userData)
    }

    deleteUser(user_id) {
        return this.api.delete(`/deleteUser/${user_id}`)
    }

    addPaintingToFavorites(painting_id, user_id) {
        const url = `/addPaintingToFavorites/${user_id}/${painting_id}`
        console.log(`URL de la solicitud: ${url}`)
        return this.api.put(url)
    }

    removePaintingFromFavorites(painting_id, user_id) {
        const url = `/removePaintingFromFavorites/${user_id}/${painting_id}`
        console.log(`URL de la solicitud: ${url}`)
        return this.api.put(url)
    }

}


const userServices = new UserServices()

export default userServices
