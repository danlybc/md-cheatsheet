import React, { Component } from "react";
import styled, { css } from "styled-components";
import ReactMarkdown from "react-markdown";

import { clipboard } from "../utils/clipboard";

const StyledCard = styled.div`
  position: relative;
  width: 450px;
  min-height: 120px;
  border-radius: 1.3vw;
  text-align: left;
  padding: 20px;
  background: #f0a500;
  ${props =>
    props.align &&
    css`
      border-top-${props.align}-radius: 0;
      float: ${props.align};
    `}

  & .Card--title {
    position: absolute;
    top: -50px;
    ${props =>
      props.align &&
      css`
        ${props.align}: 0;
      `}
  }

  & .Card--button__copy {
    position: absolute;
    right: 20px;
    font-size: 0.7rem;
    border-radius: 1.3vw;
    border: none;
    padding: 5px;
  }

  & pre {
    :before {
      font-size: 2rem;
      content: "‟";
      display: block;
      white-space: pre;
      color: #c1c1c1;
    }

    color: #8e7a4f;
    background: #f3f3f3;
    padding: 15px;
    border-radius: 1.3vw;
  }
`;

const MD_EX = {
  title: "Test",
  markdown: `# This is a h1 heading,
  ## number of hashes defines
  ### the importance level
  #### up to h6`,
  copy: "# placeholder"
};

class Card extends Component {
  render() {
    const { title, markdown, copy, align } = this.props.title
      ? this.props
      : MD_EX;
    return (
      <StyledCard align={align} onClick={() => clipboard.copy(copy)}>
        <button className="Card--button__copy">
          <span role="img" aria-label="clipboard">
            📋
          </span>
        </button>
        <h1 className="Card--title">{title}</h1>
        <ReactMarkdown className="Card--markdown__result" source={markdown} />
        <pre className="Card--markdown">{markdown}</pre>
      </StyledCard>
    );
  }
}

export default Card;
