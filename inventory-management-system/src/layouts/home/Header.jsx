import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navlinks = [
  {
    title: 'Home'
  },
  {
    title: 'About'
  },
  {
    title: 'Services'
  },
  {
    title: 'Contact'
  },
  {
    title: 'Inventory'
  },
  {
    title: 'Login'
  }
]

function Header() {
  return (
    <Navbar expand="lg" style={{backgroundColor:'teal', color:'white'}}>
      <Container style={{display:'flex', justifyContent:'space-between', position:'sticky'}}>
        <div>
        <Navbar.Brand href="#home">
            <img
              src="https://i.pinimg.com/736x/a1/5f/51/a15f5117759cd710fae6ab2461250f4a.jpg"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navlinks.map((val, key) => {
              return <Nav.Link key={key} href="#home"  style={{color: 'white'}}>{val.title}</Nav.Link>
            })}
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;