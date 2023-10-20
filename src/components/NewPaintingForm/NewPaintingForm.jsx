import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'

import './NewPaintingForm.css'

const NewPaintingForm = () => {

    const [paintingData, setPaintingData] = useState({
        title: '',
        description: '',
        image: '',
        height: '',
        width: '',
        techniques: [],
        year: '',
        price: '',
        sold: false
    })

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

        setPaintingData({ ...paintingData, techniques: updatedTechniques })
    }


    return (

        <Form>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título de la obra</Form.Label>
                <Form.Control type="text" value={paintingData.title} onChange={handleInputChange} name='title' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" value={paintingData.description} onChange={handleInputChange} name='description' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" value={paintingData.image} onChange={handleInputChange} name='image' />
            </Form.Group>

            <Row>
                <Form.Label>Dimensiones</Form.Label>
                <Col>
                    <InputGroup className="mb-3" controlId="height">
                        <InputGroup.Text>Altura</InputGroup.Text>
                        <Form.Control type="number" value={paintingData.height} onChange={handleInputChange} name='height' />
                        <InputGroup.Text>cm</InputGroup.Text>
                    </InputGroup>

                </Col>

                <Col>
                    <InputGroup className="mb-3" controlId="width">
                        <InputGroup.Text>Ancho</InputGroup.Text>
                        <Form.Control type="number" value={paintingData.width} onChange={handleInputChange} name='width' />
                        <InputGroup.Text>cm</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="techniques">
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

            <Form.Group className="mb-3" controlId="year">
                <Form.Label>Año de creación</Form.Label>
                <Form.Select value={paintingData.year} onChange={handleInputChange} name='year'>
                    <option>Elige un año</option>
                    {generateYearOptions()}
                </Form.Select>
            </Form.Group>

            <Row className='align-items-center'>
                <Col xs={9}>
                    <Form.Label >Precio</Form.Label>
                    <InputGroup className="mb-3" controlId="price">
                        <Form.Control type="number" value={paintingData.price} onChange={handleInputChange} name='price' />
                        <InputGroup.Text>€</InputGroup.Text>
                    </InputGroup>
                </Col>

                <Col>
                    <Form.Group className="mt-3" controlId="sold">
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
                <Button className="mb-8" style={{ backgroundColor: '#053B50', borderColor: '#053B50' }} type="submit">
                    Crear ficha del cuadro
                </Button>
            </Row>

        </Form >


    )
}

export default NewPaintingForm