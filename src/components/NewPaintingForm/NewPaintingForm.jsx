import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'

import paintingsService from '../../services/paintings.services'
import ModalWindow from '../ModalWindow/ModalWindow'

const NewPaintingForm = () => {

    const initialPaintingData = {
        title: '',
        description: '',
        // image: '',
        height: '',
        width: '',
        techniques: [],
        year: '',
        price: '',
        sold: false
    }

    const [paintingData, setPaintingData] = useState(initialPaintingData)
    const [showModal, setShowModal] = useState(false)
    const [newPaintingId, setNewPaintingId] = useState(null)

    const handleInputChange = e => {
        const { name, value } = e.target

        setPaintingData({ ...paintingData, [name]: value })
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

    const handleSubmit = (e) => {
        e.preventDefault();

        paintingsService
            .savePainting(paintingData)
            .then((response) => {
                setNewPaintingId(response.data._id)
                setShowModal(true)
            })
            .catch(err => console.log(err))
    }

    const resetForm = () => {
        setPaintingData(initialPaintingData);
    }

    return (

        <>

            <Form onSubmit={handleSubmit} style={{ marginBottom: '50px' }}>

                <Form.Group className="mb-3" >
                    <Form.Label>Título de la obra</Form.Label>
                    <Form.Control type="text" value={paintingData.title} onChange={handleInputChange} name='title' />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" value={paintingData.description} onChange={handleInputChange} name='description' />
                </Form.Group>

                {/* <Form.Group className="mb-3" >
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" value={paintingData.image} onChange={handleInputChange} name='image' />
            </Form.Group> */}
                <Form.Group className="mb-3" >
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" value={paintingData.image} onChange={handleInputChange} name='image' />
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
                        <Form.Label >Precio</Form.Label>
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
                    <Button style={{ backgroundColor: '#053B50', borderColor: '#053B50' }} type="submit">
                        Crear ficha del cuadro
                    </Button>
                </Row>


            </Form >

            {showModal && <ModalWindow painting_id={newPaintingId} showModal={showModal} setShowModal={setShowModal} resetForm={resetForm} />}

        </>


    )
}

export default NewPaintingForm