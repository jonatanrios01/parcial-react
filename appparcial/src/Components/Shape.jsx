import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import pcimg from '../assets/pcimg.png'



function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={10} md={6}>
        <h3 style={{ fontSize: '40px', padding: '1px 10px', color: 'white' }}>
          Computer and Laptop
        </h3>
        <h1 style={{ fontSize: '90px', padding: '9px 10px', color: 'white' }}>
         Accessories
        </h1>
          <p style={{ color: 'white' }}>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit at impedit corporis autem, dolores commodi natus quibusdam sunt, reiciendis illo voluptatem, modi quas consequuntur dicta mollitia. Dignissimos quae inventore dolorem asperiores temporibus! Expedita perferendis laudantium, alias non quod amet temporibus repellendus necessitatibus beatae facere voluptatem quasi repudiandae rem voluptatibus accusantium.
          </p>
          <br />
         <br />
         <Button variant="outline-light" style={{ fontSize: '20px', padding: '9px 30px' }}>Buy now
        </Button>{' '}
        <Button variant="outline-light" style={{ fontSize: '20px', padding: '9px 30px' }}>Contact</Button>{' '}
        </Col>
        <Col>
        </Col>
        <Col xs={6} md={4}>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className=""
          src={pcimg}
          style={{width:300,height:200}}
          alt="pcimg"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={pcimg}
          style={{width:300,height:200}}
          alt="pcimg"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={pcimg}
          style={{width:300,height:200}}
          alt="pcimg"
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;