import React from "react";
import Post from "../components/Post";
import blogdata from "../data/BlogData.json";
import { Container, Row, Col } from "react-bootstrap";

function Articles() {
  const data = blogdata.map((singledata) => (
    <Col sm={10} md={10} className="px-0 mb-4">
      <Post
        title={singledata.title}
        imgurl={singledata.thumbnail}
        body={singledata.body}
        link={"/article/" + singledata.id}
      ></Post>
    </Col>
  ));

  return (
    <Container className="mb-5">
      <Row className="justify-content-center">
        <h1 className="text-center mb-5 mt-5 page-titles">Blog</h1>
        {data}
      </Row>
    </Container>
  );
}

export default Articles;
