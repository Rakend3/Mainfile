import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Landing() {

  const navigatebyurl= useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-betwen w-100 mb-5'>
      <Col>
      </Col>
      <Col lg={5}>
        <h1 style={{textAlign:'justify'}}>Welcome to <span style={{color:'purple',fontWeight:'bolder'}}>MX PLAYER</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti totam autem placeat, facere suscipit quaerat voluptatum doloribus odit dolorum nesciunt quod temporibus sequi sed necessitatibus cupiditate. Dolorem, minus eveniet!</p>

        <Button style={{borderRadius:'10px'}} onClick={()=>navigatebyurl('/home')}>Get Started</Button>
      </Col>
      <Col lg={5}>
        <img src="https://uploads-ssl.webflow.com/629b43e4ec16c904063413b4/629ba78707d54f28180db505_ezgif.com-gif-maker.gif" alt="" />
      </Col>
      <Col></Col>
    </Row>


    <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center">
<h3>Features</h3>
<div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100 ">
    <Card className='p-5 bg-primary text-light' style={{ width: '20rem' }}>
      <Card.Img width={'300px'} height={'150px'} variant="top" src="https://i.gifer.com/Yzg5.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='p-5 bg-primary text-light' style={{ width: '20rem' }}>
      <Card.Img width={'300px'} height={'150px'} variant="top" src="https://i.pinimg.com/originals/7e/c9/e8/7ec9e8240f505cd988fd39d2e9db2a49.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>



    <Card className='p-5 bg-primary text-light' style={{ width: '20rem' }}>
      <Card.Img width={'300px'} height={'150px'} variant="top" src="https://cdn.dribbble.com/users/6156355/screenshots/14385181/animated-disco-lights.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    </div>

    </div>


    <div className="container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between-100 bg-dark ">

      <div className="col-lg-5 ">
        <h3 className="mb-3 text-warning">Simple,Powerful and Fast</h3>
        <h6 className='mb-5 text-light'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquid enim maiores culpa asperiores reprehenderit deserunt non beatae laborum ut fugiat possimus quia assumenda dolor amet totam magni, temporibus sapiente?</h6>

        <h6 className='mb-5 text-light'><span className='fs-5 fw-bolder text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquid enim maiores culpa asperiores reprehenderit deserunt non beatae laborum ut fugiat possimus quia assumenda dolor amet totam magni, temporibus sapiente?</h6>

        <h6 className='mb-5 text-light'><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquid enim maiores culpa asperiores reprehenderit deserunt non beatae laborum ut fugiat possimus quia assumenda dolor amet totam magni, temporibus sapiente?</h6>
      </div>

      <div className="video col-lg-5">

      <iframe width="560" height="315" src="https://www.youtube.com/embed/0DBM1ZK-040?si=z5sJPxL28MosDDn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
    
    
    </>
  )
}

export default Landing