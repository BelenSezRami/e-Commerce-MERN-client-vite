import React from 'react'
import axios from 'axios'

class PaintingService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/paintings`
        })
    }

    getAllPaintings() {
        return this.api.get('/getAllPaintings')
    }

    getOnePainting(painting_id) {
        return this.api.get(`/getOnePainting/${painting_id}`)
    }

    savePainting(paintingData) {
        return this.api.get('/savePainting', paintingData)
    }

}

const paintingsService = new PaintingService()

export default paintingsService