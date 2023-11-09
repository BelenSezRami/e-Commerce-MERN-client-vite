import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import { useParams } from 'react-router-dom'
import paintingsService from '../../services/paintings.services'
import EditPaintingForm from '../../components/EditPaintingForm/EditPaintingForm.jsx'

const EditPaintingPage = () => {

    const { painting_id } = useParams()


    const [painting, setPainting] = useState()

    const getPainting = () => {
        paintingsService
            .getOnePainting(painting_id)
            .then(({ data }) => setPainting(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPainting()
    }, [painting_id])

    return (
        <>

            {
                !painting
                    ?
                    <LoadingSpinner />
                    :
                    <>
                        <h1>EDITAR {painting.title.toUpperCase()}</h1>

                        <EditPaintingForm />
                    </>
            }
        </>
    )
}

export default EditPaintingPage