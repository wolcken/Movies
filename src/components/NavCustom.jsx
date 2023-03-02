import React, { useState } from 'react';
import '../styles/nav.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import apiObjects from '../api/axios';
import { useMovieHandleContext } from '../contexts/SearchProvider';
import { NavLink, useNavigate } from 'react-router-dom';

const apiSearch = '/search/movie';

const NavCustom = () => {

  const [text, setText] = useState('');
  const handleText = ({target}) => {
    setText(target.value)
  }

  const response = apiObjects.useSearch(apiSearch, text)

  const aux = response.data?.results

  const handleSearch = useMovieHandleContext();

  const navigate = useNavigate();

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-0">
          <Container fluid>
            <Navbar.Brand href="/">
              <i className="fa-solid fa-film"></i> Wolcken Movies
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className='nave' to={'/'}>Home</NavLink>
                  <NavLink className='nave' to={'/movies'}>Movies</NavLink>
                  <NavLink className='nave' to={'/series'}>Series</NavLink>
                  {/* <Nav.Link href='/' >Home</Nav.Link>
                  <Nav.Link href='/movies' >Movies</Nav.Link>
                  <Nav.Link href='/series' >Series</Nav.Link> */}
                  {/* <NavDropdown

                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search Movie"
                    className="me-2"
                    aria-label="Search"
                    value={text}
                    onChange={handleText}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => {
                      navigate('/')
                      handleSearch(aux)
                    }}
                  >
                    Search
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavCustom
