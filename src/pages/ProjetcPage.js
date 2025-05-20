import { withRouter } from "react-router-dom";
import data from "../data/Data.json";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectPage(props) {
  const clickedId = props.match.params.project_id;
  var integerId = parseInt(clickedId, 10);
  console.log(integerId);

  const project = data
    .filter((d) => d.id === integerId)
    .map((filteredProject) => (
      <div>
        <h1 className="text-center mb-3 mt-5 page-titles">
          {filteredProject.title}
        </h1>
        <div className="text-center mb-3">
          <Link to="/projects" className="goback">
            Go Back to Projects
          </Link>
        </div>

        <Carousel className="carrousel-style">
          {filteredProject.images.map((option) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={option.image}
                alt={option.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* <img src={filteredProject.imgurl} alt={filteredProject.title} /> */}
        <p className="category">{filteredProject.category}</p>
        <p className="description-header">About</p>
        <p className="description">{filteredProject.description}</p>
      </div>
    ));

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          {project}
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(ProjectPage);
