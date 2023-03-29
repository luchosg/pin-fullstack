import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const menuOptions = ['Home', 'About', 'Products', 'Services', 'Contact'];

    // const clickHandler = id => {
    //     if(id !== 'Home'){
    //         document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    //     }
    // }

    return (
        <div id='NavBar'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand href={menuOptions[0]}>Logo</Navbar.Brand> */}
                    <Nav className="me-auto">
                        {menuOptions.map(option => (
                            <Nav.Link 
                                name={option} 
                                key={option}
                                href={`#${option}`} 
                                // onClick={event => clickHandler(event.target.name)}
                            >{option}</Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;