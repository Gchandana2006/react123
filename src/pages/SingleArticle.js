import { withRouter } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import blogdata from "../data/BlogData";
import { Link } from "react-router-dom";

function SingleArticle(props) {
  const clickedId = props.match.params.post_id;
  var integerId = parseInt(clickedId, 10);

  const data = blogdata
    .filter((d) => d.id === integerId)
    .map((filteredProject) => (
      <div>
        <div className="text-center mt-5 mb-3">
          <Link to="/blog" className="goback">
            Go Back to Blog
          </Link>
        </div>

        <Card className="card-style-blog" style={{ width: "100%" }}>
          <Card.Header className="card-header-style">
            {filteredProject.title}
          </Card.Header>
          <Card.Img
            variant="top"
            className="card-img-blog"
            src={filteredProject.thumbnail}
            alt={filteredProject.title}
          />

          <Card.Body className="text-center card-body-style">
            <Card.Title className="card-title-blog">
              {filteredProject.title}
            </Card.Title>
            <Card.Text className=" card-body">{filteredProject.body}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));

  return (
    <Container fluid className="mb-5 mt-5">
      <Row className="justify-content-center">
        <Col sm={12} md={10}>
          {data}
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(SingleArticle);
