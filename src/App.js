import React, { useState } from 'react';
import logo from './logo-1932539.svg';
import logo1 from './Img1.jpeg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  const [name, setName] = useState('Please Enter Your Name');
  const [description, setDescription] = useState('Describe Yourself Here');
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [calculatedValue, setCalculatedValue] = useState(0);

  const nameChange = (e) => setName(e.target.value);
  const descriptionChange = (e) => setDescription(e.target.value);

  const addNumbers = async () => {
    const payload = {
      firstNumber: parseInt(firstNumber),
      secondNumber: parseInt(secondNumber)
    }
    const response = await fetch('http://localhost:7000/api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const content = await response.json();
  
    setCalculatedValue(content && content.value);

  }

  return (
    <div className="App">
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand className='text-props'>
            <img src={logo} className="App-logo" alt="logo" /> <span className='text-props'>Welcome To SE Assignment-2</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className='mt-4' fluid>
        <Row>
          <Col md={4} className='text-center'>
            <img src={logo1} className="photo-props" alt="logo" />
          </Col>
          <Col md={8}>
          <Card className='card-props'>
            <Card.Body>
              <div className="d-flex flex-column">
                <h2>{name}</h2>
                <div className='mt-3'>{description}</div>
              </div>
            </Card.Body>
          </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="nameFormControl">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control type="text" placeholder="Please Enter your Name" value={name} onChange={nameChange}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="descriptionFormControl">
                <Form.Label>Enter Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} placeholder="Please Enter your Description" onChange={descriptionChange}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="descriptionFormControl">
                <Form.Label><a href='https://www.cnbc.com/'><h3>Looking for Latest News around the world?</h3></a></Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="descriptionFormControl">
                <Form.Label><h1>Let's See The Functionality Of Express JS Below:</h1></Form.Label>
              </Form.Group>
            </Form>
          </Col>
        </Row>


        <Row>
          <Col>
            <Form>
              <Form.Group controlId="firstNumberFormControl">
                <Form.Label>Enter First Number</Form.Label>
                <Form.Control type="number" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)}/>
              </Form.Group>
            </Form>
          </Col>

          <Col>
            <Form>
              <Form.Group controlId="secondNumberFormControl">
                <Form.Label>Enter Second Number</Form.Label>
                <Form.Control type="number" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)}/>
              </Form.Group>
            </Form>
          </Col>

          <Col className='d-flex flex-column justify-content-end align-items-start'>
            <Button variant="primary" onClick={addNumbers}>Calculate</Button>{' '}
          </Col>
        </Row>

        <Row className='mt-3'>
          calculated value is {calculatedValue}
        </Row>
      </Container>
    </div>
  );
}

export default App;
