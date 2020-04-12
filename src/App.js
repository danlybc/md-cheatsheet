import React from "react";
import { Container, Col, Row, Navbar } from "react-bootstrap";

import Card from "./components/Card.component";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container style={{ marginBottom: 100, paddingTop: 80 }}>
          <Row>
            <Col>
              <h1>Markdown Cheatsheet</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Card />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card align="right" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
