import Thumbnail from "../components/Thumbnail";
import data from "../data/Data.json";
import { Container, Row, Col } from "react-bootstrap";
import NewProject from "../components/NewProject";

function Projects() {
  console.log(JSON.stringify(data));

  const listProjects = data.map((d) => (
    <Col sm={10} md={4} className="px-0">
      <Thumbnail
        title={d.title}
        imgurl={d.thumbnail}
        category={d.category}
        link={"/project/" + d.id}
      ></Thumbnail>
    </Col>
  ));

  return (
    <Container className="mb-5">
      <Row className="justify-content-center">
        <h1 className="text-center  mt-5 page-titles">Projects</h1>
        <h2 className="text-center mb-5  page-subtitles">
          Find my latest projects
        </h2>
        {listProjects}
      </Row>

      <NewProject />
    </Container>
  );
}

export default Projects;
