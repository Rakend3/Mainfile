import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>

<Navbar className="bg-primary">
        <Container>

          <Navbar.Brand>
<Link to='/' style={{textDecoration:"none", color:'white', fontSize:'25px'}}>
          <i class="fa-solid fa-play fa-beat-fade fa-lg"></i>{' '}
            MX PLAYER

            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header