import { Form, Button, Row, Col } from "react-bootstrap";

function NewProject() {
  return (
    <Row className="justify-content-center">
      <Col sm={12} md={10}>
        <h1 className="text-center  mt-5 page-titles">Add New Project</h1>
        <Form className="mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label mt-3">Project Title</Form.Label>
            <Form.Control
              className="input-form"
              type="email"
              placeholder="Project Title"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label mt-3">Category</Form.Label>
            <Form.Control
              className="input-form"
              type="email"
              placeholder="Category Number 1"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label mt-3">Description</Form.Label>
            <Form.Control
              className="input-form"
              type="email"
              placeholder="Description"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="form-label mt-3">Image Url</Form.Label>
            <Form.Control
              className="input-form"
              type="email"
              placeholder="Insert Image Url"
            />
          </Form.Group>

          <Button
            className="btn-thumb-form mt-4"
            variant="primary"
            type="submit"
          >
            Submit Project
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default NewProject;
