import React from "react";
import { Container, Col, Row, Navbar } from "react-bootstrap";

import Card from "./components/Card.component";

import logo from "./logo.svg";
import syntaxes from "./data/syntaxes.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container className="App--header">
          <Row
            style={{
              padding: 20,
              paddingTop: 80
            }}
          >
            <Col md={5}>
              <div className="Logo">
                <h1 className="Logo--mark">Markdown Cheatsheet</h1>
                <div className="Logo--underline"></div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="syntaxes--wrapper">
          {syntaxes.map((syntax, i) => (
            <Row>
              <Col>
                <Card
                  align={i % 2 ? "right" : "left"}
                  title={syntax.title}
                  markdown={syntax.markdown}
                  copy={syntax.copy}
                />
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
