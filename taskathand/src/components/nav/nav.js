import { Nav, Navbar } from 'react-bootstrap';



let Navbars = (props) => {
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
          <Nav.Link>
            {/* Need this imported in as props? in order to take the current list from todo */}
            {/* There are {list.filter(item => !item.complete).length} Items To Complete */}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Navbars;