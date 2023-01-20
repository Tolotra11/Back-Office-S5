import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

  
const Navbarre = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Enchere</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/listeCategorie">Categories</Nav.Link>
            <Nav.Link href="/parametrage">Parametre</Nav.Link>
            <Nav.Link href="/stat">Statistiques</Nav.Link>
            <Nav.Link href="/credit">Rechargement</Nav.Link>
            <Nav.Link href= "/deconnexion">Deconnexion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
  
export default Navbarre;