import axios from 'axios'

class PaintingService {

    constructor() {

        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/paintings`,
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllPaintings() {
        return this.api.get('/getAllPaintings')
    }

    getOnePainting(painting_id) {
        return this.api.get(`/getOnePainting/${painting_id}`)
    }

    createPainting(paintingData) {
        return this.api.post('/createPainting', paintingData)
    }

    editPainting(painting_id, paintingData) {
        return this.api.put(`/editPainting/${painting_id}`, paintingData)
    }

    // addPaintingToFavorite(painting_id, user_id) {
    //     return this.api.put(`/addPaintingToFavorite/${painting_id}`, user_id)
    // }

    // removeFavoritePainting(painting_id, user_id) {
    //     return this.api.put(`/removePaintingFromFavorite/${painting_id}`, user_id)
    // }

    deletePainting(painting_id) {
        return this.api.delete(`/deletePainting/${painting_id}`)
    }
}

const paintingsService = new PaintingService()

export default paintingsService