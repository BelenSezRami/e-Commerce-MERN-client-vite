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

    addPaintingToFavorites(user_id, painting_id) {
        return this.api.put(`/addPaintingToFavorites/${user_id}/${painting_id}`)
    }

    removePaintingFromFavorites(user_id, painting_id) {
        return this.api.put(`/removePaintingFromFavorites/${user_id}/${painting_id}`)
    }

}


const userServices = new UserServices()

export default userServices