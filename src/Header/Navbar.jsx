import React, { useContext } from 'react';
import { RiMovie2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Movie_Context } from '../App';


function Navbar1() {
  const {searchdata,setsearchdata,filteredUsers,setFilteredUsers} = useContext(Movie_Context)
  const getValue=(e)=>{
    setsearchdata(e.target.value)
  }
  console.log(searchdata);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            CREATIVE FILMS <img src="" alt="" />
            <RiMovie2Line style={{ marginLeft: '10px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/Latest" className="Nav_Content">
                Latest Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/Popular" className="Nav_Content">
                Popular Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/Comedy" className="Nav_Content">
                Comedy Movies
              </Nav.Link>
            </Nav>

            <div className='search-container'>
            <input type='text' className='search-input' placeholder='Search...' onChange={getValue}/>
             </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <h1 style={{ textAlign: 'center', marginTop: '20px' }}>HOME</h1> */}
    </div>
  );
}

export default Navbar1;
