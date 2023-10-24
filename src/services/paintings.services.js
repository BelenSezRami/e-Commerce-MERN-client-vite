import axios from 'axios'

class PaintingService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/paintings`,
        })
    }

    getAllPaintings() {
        return this.api.get('/getAllPaintings')
    }

    getOnePainting(painting_id) {
        return this.api.get(`/getOnePainting/${painting_id}`)
    }

    savePainting(paintingData) {
        return this.api.post('/savePainting', paintingData)
    }

}

const paintingsService = new PaintingService()

export default paintingsService