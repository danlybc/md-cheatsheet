import React from "react";
import { Container, Col, Row, Navbar, Nav, Dropdown } from "react-bootstrap";

import Card from "./components/Card.component";

import logo from "./logo.svg";
import syntaxes from "./data/syntaxes.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  state = {
    activeSyntax: syntaxes[0].title,
  };
  componentDidMount() {
    this.handleScroll();
    this.handleTooltips();
  }

  handleScroll() {
    const wrapper = document.querySelector("body");
    wrapper.addEventListener("wheel", (e) => {
      for (let syntax of syntaxes) {
        if (
          this.isInViewport(
            document.querySelector(`#${syntax.title.toLowerCase()}`),
            -(window.innerHeight / syntaxes.length)
          )
        ) {
          this.setState({ activeSyntax: syntax.title });
        }
      }
    });
  }

  /**
   * Check if query is in viewport
   * @param query Query to check for viewport
   * @param {number} offset Offset property
   */
  isInViewport(query, offset = 0) {
    const top = query.getBoundingClientRect().top;
    return top + offset >= 0 && top - offset <= window.innerHeight;
  }

  handleTooltips() {
    const tooltipReceivers = document.querySelectorAll("[data-tooltip]");
    for (let receiver of tooltipReceivers) {
      let tooltip = document.createElement("div");

      receiver.addEventListener("mouseenter", () => {
        tooltip.innerText = receiver.dataset.tooltip;
        receiver.append(tooltip);
        tooltip.classList = "App--tooltip in";
      });

      receiver.addEventListener("click", () => {
        tooltip.innerText = receiver.dataset.tooltipclicked;
      });
      receiver.addEventListener("mouseleave", () => {
        tooltip.remove();
      });
    }
  }
  render() {
    const { activeSyntax } = this.state;
    return (
      <div className="App">
        <Container className="App--header">
          <Row
            style={{
              padding: 20,
              paddingTop: 80,
            }}
          >
            <Col md={5}>
              <div className="Logo" data-tooltip="Click to go up">
                <h1 className="Logo--mark">Markdown Cheatsheet</h1>
                <div className="Logo--underline"></div>
              </div>
            </Col>
            <Col md={7}>
              <Dropdown style={{ float: "left" }}>
                <Dropdown.Toggle />
                <Dropdown.Menu>
                  {syntaxes.map((syntax, i) => (
                    <Dropdown.Item
                      href={`#${syntax.title.toLowerCase()}`}
                      onClick={() =>
                        this.setState({ activeSyntax: syntax.title })
                      }
                    >
                      {syntax.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Nav
                className="flex-column App--nav"
                style={{
                  position: "absolute",
                  transition: ".3s",
                  left: 60,
                  top:
                    0 -
                    syntaxes.findIndex(
                      (syntax) => syntax.title === this.state.activeSyntax
                    ) *
                      57,
                }}
              >
                {syntaxes.map((syntax, i) => (
                  <Nav.Link
                    style={{ opacity: 0 }}
                    className={`${
                      syntax.title === activeSyntax ? "active" : ""
                    }`}
                  >
                    {syntax.title}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>
          </Row>
        </Container>
        <Container className="syntaxes--wrapper">
          {syntaxes.map((syntax, i) => (
            <Row id={syntax.title.toLowerCase()}>
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
