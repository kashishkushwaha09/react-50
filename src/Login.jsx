import React from 'react'
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Card
} from "react-bootstrap";
const Login = () => {
  return (
    <div>
         <div className="d-flex flex-column min-vh-100">
      
     
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid >
          <Navbar.Brand href="#">My App</Navbar.Brand>

          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link active href="#">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <Container fluid className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card className="shadow p-4">
            <h3 className="text-center mb-3">Login</h3>

            <Form>
             
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

             
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
             
              <Button variant="primary" className="w-100">
                Login
              </Button>
            </Form>
          </Card>
        </div>
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">© 2026 khushboo kachhi. All rights reserved.</p>
      </footer>
    </div>
    </div>
  )
}

export default Login