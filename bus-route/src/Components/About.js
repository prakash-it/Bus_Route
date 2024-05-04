import React from 'react'
import image1 from '../img1.jpg'
import '../Components/Nav.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function About() {
  return (
    <div>
      <div className='ab'>ABOUT US</div>

     
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            <h1> Dhivakar</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada, arcu ac blandit tristique, tortor nisi consequat est,
              commodo scelerisque ante orci id enim. Suspendisse imperdiet
              accumsan ligula, a rhoncus risus imperdiet sed. In et erat diam.
              Nullam elementum ac ante consequat dapibus. Nunc finibus bibendum
              ex, pulvinar pellentesque felis varius ac.
            </p>
          </Col>
          <Col>
            <div className='d-none d-md-block'>
              <img className='myImage' width={80} height={100} src={image1} alt='busImage' />
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            <div className='d-none d-md-block'>
              <img className='myImage' width={80} height={100} src={image1} alt='busImage' />
            </div>
          </Col>
          <Col>
            <h1> Prakash</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada, arcu ac blandit tristique, tortor nisi consequat est,
              commodo scelerisque ante orci id enim. Suspendisse imperdiet
              accumsan ligula, a rhoncus risus imperdiet sed. In et erat diam.
              Nullam elementum ac ante consequat dapibus. Nunc finibus bibendum
              ex, pulvinar pellentesque felis varius ac.
            </p>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            <h1>Naveen kumar</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada, arcu ac blandit tristique, tortor nisi consequat est,
              commodo scelerisque ante orci id enim. Suspendisse imperdiet
              accumsan ligula, a rhoncus risus imperdiet sed. In et erat diam.
              Nullam elementum ac ante consequat dapibus. Nunc finibus bibendum
              ex, pulvinar pellentesque felis varius ac.
            </p>
          </Col>
          <Col>
            <div className='d-none d-md-block'>
              <img className='myImage' width={80} height={100} src={image1} alt='busImage' />
            </div>
          </Col>
        </Row>
      </Container>
     
    </div>

  )
}