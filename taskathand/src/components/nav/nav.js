import { Nav, Navbar } from 'react-bootstrap';


let Navbars = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Nav
        fill variant='tabs' activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Todo list manager</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Navbars;