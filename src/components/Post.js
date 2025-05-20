import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Post(props) {
  return (
    <Link to={props.link}>
      <Card className="card-style-blog" style={{ width: "100%" }}>
        <Card.Header className="card-header-style">{props.title}</Card.Header>
        <Card.Img
          variant="top"
          className="card-img-blog"
          src={props.imgurl}
          alt={props.title}
        />

        <Card.Body className="text-center card-body-style">
          <Card.Title className="card-title-blog">{props.title}</Card.Title>
          <Card.Text className=" card-body">{props.body}</Card.Text>
          <Button className="btn-thumb btn-thumb-text text-center">
            Full Article
          </Button>{" "}
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Post;
