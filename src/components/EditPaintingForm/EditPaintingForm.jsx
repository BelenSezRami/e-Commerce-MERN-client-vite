import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import paintingsService from '../../services/paintings.services'
import uploadServices from '../../services/upload.services'
const EditPaintingForm = () => {

    const navigate = useNavigate()

    const { painting_id } = useParams()

    const [paintingData, setPaintingData] = useState({
        title: '',
        description: '',
        height: '',
        width: '',
        techniques: [],
        year: '',
        price: '',
        sold: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)


    const getPainting = () => {
        paintingsService
            .getOnePainting(painting_id)
            .then(({ data }) => setPaintingData(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPainting()
    }, [painting_id])

    const handleSubmit = e => {

        e.preventDefault()

        paintingsService
            .editPainting(painting_id, paintingData)
            .then(() => navigate(`/detalles/${painting_id}`))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('image', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setPaintingData({ ...paintingData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear()
        const years = []

        for (let year = currentYear; year >= 1970; year--) {
            years.push(<option key={year} value={year}>{year}</option>)
        }

        return years
    }

    const handleTechniqueChange = (technique) => {
        const updatedTechniques = [...paintingData.techniques]

        if (updatedTechniques.includes(technique)) {
            const index = updatedTechniques.indexOf(technique)
            updatedTechniques.splice(index, 1)
        }

        else {
            updatedTechniques.push(technique)
        }

        updatedTechniques.sort()

        setPaintingData({ ...paintingData, techniques: updatedTechniques })
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setPaintingData({ ...paintingData, [name]: value })
    }

    return (

        <Form onSubmit={handleSubmit} style={{ marginBottom: '50px' }}>

            <Form.Group className="mb-3" >
                <Form.Label>Título de la obra</Form.Label>
                <Form.Control type="text" value={paintingData.title} onChange={handleInputChange} name='title' />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" value={paintingData.description} onChange={handleInputChange} name='description' />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} name='image' />
            </Form.Group>

            <Row>
                <Form.Label>Dimensiones</Form.Label>
                <Col>
                    <InputGroup className="mb-3" >
                        <InputGroup.Text>Altura</InputGroup.Text>
                        <Form.Control type="number" value={paintingData.height} onChange={handleInputChange} name='height' />
                        <InputGroup.Text>cm</InputGroup.Text>
                    </InputGroup>

                </Col>

                <Col>
                    <InputGroup className="mb-3" >
                        <InputGroup.Text>Ancho</InputGroup.Text>
                        <Form.Control type="number" value={paintingData.width} onChange={handleInputChange} name='width' />
                        <InputGroup.Text>cm</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>

            <Form.Group className="mb-3" >
                <Form.Label>Técnica/s</Form.Label>
                <Row>
                    {
                        [
                            'Óleo sobre lienzo',
                            'Espátula',
                            'Carboncillo',
                            'Acuarela',
                            'Témpera',
                            'Tinta',
                            'Pan de oro',
                            'Serrín',
                            'Arena',
                            'Yeso',
                            'Pigmento en polvo',
                            'Barniz'
                        ]
                            .map((technique, index) => (
                                <div className="col-4" key={index}>
                                    <Form.Check
                                        type="checkbox"
                                        id={`technique-${index}`}
                                        label={technique}
                                        checked={paintingData.techniques.includes(technique)}
                                        onChange={() => handleTechniqueChange(technique)}
                                    />
                                </div>
                            ))
                    }
                </Row>

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Año de creación</Form.Label>
                <Form.Select value={paintingData.year} onChange={handleInputChange} name='year'>
                    <option>Elige un año</option>
                    {generateYearOptions()}
                </Form.Select>
            </Form.Group>

            <Row className='align-items-center'>
                <Col xs={9}>
                    <Form.Label>Precio</Form.Label>
                    <InputGroup className="mb-3" >
                        <Form.Control type="number" value={paintingData.price} onChange={handleInputChange} name='price' />
                        <InputGroup.Text>€</InputGroup.Text>
                    </InputGroup>
                </Col>

                <Col>
                    <Form.Group className="mt-3" >
                        <Form.Check
                            type="checkbox"
                            label="Vendido"
                            checked={paintingData.sold}
                            onChange={(e) => setPaintingData({ ...paintingData, sold: e.target.checked })}
                            name='sold'
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Button style={{ backgroundColor: '#053B50', borderColor: '#053B50' }} type="submit" disabled={loadingImage}>
                    {loadingImage ? 'Cargando imagen...' : 'Guardar cambios'}
                </Button>
            </Row>


        </Form >
    )
}

export default EditPaintingForm