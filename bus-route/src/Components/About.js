import React from 'react';
import image1 from '../img1.jpg';

import '../Components/Nav.css';
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function About() {
  return (
    <div>
      <h1 className='bus-head' style={{ fontWeight: 'bold' }}>ABOUT US</h1>

      <Container style={{ marginTop: '10px' }}>
        <Row>
          <Col xs={12} md={6}>
            <h1 style={{ fontWeight: 'bold' }}> Dhivakar</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada, arcu ac blandit tristique, tortor nisi consequat est,
              commodo scelerisque ante orci id enim. Suspendisse imperdiet
              accumsan ligula, a rhoncus risus imperdiet sed. In et erat diam.
              Nullam elementum ac ante consequat dapibus. Nunc finibus bibendum
              ex, pulvinar pellentesque felis varius ac.
            </p>
            <Button variant="primary" size="sm" href="#" target="_blank">
              Learn More
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <div className='d-none d-md-block'>
              <img
                className='myImage'
                src={image1}
                alt='busImage'
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '60px',
                  objectFit: 'cover'
                }}
              />
            </div>
            <img
              className='myImage d-md-none'
              src={image1}
              alt='busImage'
              style={{
                width: '50%',
                height: '280px',
                borderRadius: '60px',
                objectFit: 'cover'
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col xs={12} md={6}>
            <div className='d-none d-md-block'>
              <img
                className='myImage'
                src={image1}
                alt='busImage'
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '60px',
                  objectFit: 'cover'
                }}
              />
            </div>
            <img
              className='myImage d-md-none'
              src={image1}
              alt='busImage'
              style={{
                width: '50%',
                height: '75px',
                borderRadius: '60px',
                objectFit: 'cover'
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h1 style={{ fontWeight: 'bold' }}> Prakash</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada, arcu ac blandit tristique, tortor nisi consequat est,
              commodo scelerisque ante orci id enim. Suspendisse imperdiet
              accumsan ligula, a rhoncus risus imperdiet sed. In et erat diam.
              Nullam elementum ac ante consequat dapibus. Nunc finibus bibendum
              ex, pulvinar pellentesque felis varius ac.
            </p>
            <Button variant="primary" size="sm" href="https://prakash-joyboy.netlify.app/" target="_blank">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col xs={12} md={6}>
            <h1 style={{ fontWeight: 'bold' }}>Naveen kumar</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              malesuada, arcu ac blandit tristique, tortor nisi consequat est,
              commodo scelerisque ante orci id enim. Suspendisse imperdiet
              accumsan ligula, a rhoncus risus imperdiet sed. In et erat diam.
              Nullam elementum ac ante consequat dapibus. Nunc finibus bibendum
              ex, pulvinar pellentesque felis varius ac.
            </p>
            <Button variant="primary" size="sm" href="#" target="_blank">
              Learn More
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <div className='d-none d-md-block'>
              <img
                className='myImage'
                src={image1}
                alt='busImage'
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '60px',
                  objectFit: 'cover'
                }}
              />
            </div>
            <img
              className='myImage d-md-none'
              src={image1}
              alt='busImage'
              style={{
                width: '50%',
                height: '75px',
                borderRadius: '60px',
                objectFit: 'cover'
              }}
            />
          </Col>
        </Row>
      </Container>

      </div>
  )}