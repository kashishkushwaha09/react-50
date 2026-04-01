import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
const Project = () => {
     const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  const [students, setStudents] = useState([
  { id: 1, name: "Khush", mobile: "9876543210", address: "Delhi" },
  { id: 2, name: "Ravi", mobile: "9123456780", address: "Mumbai" },
]);
const [editingId, setEditingId] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setStudents(
        students.map((student) => (student.id === editingId ? { ...student, ...formData } : student))
      );
      setEditingId(null);
    } else {
      setStudents([...students, { id: Date.now(), ...formData }]);
    }
    setFormData({ name: "", mobile: "", address: "" });
   
  };
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleEdit = (student) => {
    setFormData(student);
    setEditingId(student.id);
  };

  return (
      <div className="bg-section">
      <Container className="text-white ">
       <h1 className="text-center mb-4">Student Manager</h1>
         <Row>
        <Col>
        <Form onSubmit={handleSubmit} className="form-box p-4 rounded-3">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="light" type="submit" className="w-100 mt-2">
            Submit
          </Button>
        </Form>
        </Col>
        <Col>
          <Row>
    {students.map((student) => (
      <Col md={12} key={student.id} className="mb-3">
        <Card className="shadow-sm position-relative gradient-card">
          <Card.Body>
            <Card.Title>{student.name}</Card.Title>
            <Card.Text>
              {student.mobile}{" "}-{" "}
              {student.address}
            </Card.Text>

            <div className="d-flex justify-content-end gap-2 position-absolute top-0 end-0 m-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => handleEdit(student)}
              >
                Edit
              </Button>

              <Button
                variant="dark"
                size="sm"
                onClick={() => handleDelete(student.id)}
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
        </Col>
      </Row>
        
        
      </Container>
    </div>
  )
}

export default Project