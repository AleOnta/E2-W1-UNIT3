import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import JumbotronComponent from "./Jumbotron";
import fantasy from "../data/fantasy.json";
// import history from "../data/history.json";
// import horror from "../data/horror.json";
// import romance from "../data/romance.json";
// import scifi from "../data/scifi.json";

class Home extends Component {
  render() {
    return (
      <Container className="container-fluid">
        <JumbotronComponent
          title="Welcome to my library"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam sint maiores debitis suscipit reprehenderit distinctio!"
        />

        <Row>
          {fantasy.map((book) => (
            <Col
              key={"asin: " + book.asin}
              xs="4"
              lg="3"
              className="p-0 mb-3 d-flex justify-content-center cardContainer"
            >
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={book.img} className="cardImage" />
                <Card.Body>
                  <Card.Title className="cardTitle">{book.title}</Card.Title>
                  <Card.Text className="cardCategory">
                    <span>Category: </span>
                    {book.category}
                  </Card.Text>
                  <Button variant="primary" className="cardPrice">
                    {book.price}€
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Home;
