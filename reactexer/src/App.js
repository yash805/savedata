
import './App.css';
 
import{Navbar,Nav,Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import List from './datas/Lists';





function App() {
 
  return (
    <div className="App">
     
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">FE Task</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
 
    </Nav>
    <Nav>
      <Nav.Link href="#deets">info</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        task
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<List />

  
    </div>
  );
}

export default App;