import React, { Component } from "react";
import styled, { css } from "styled-components";
import ReactMarkdown from "react-markdown";

const StyledCard = styled.div`
  position: relative;
  width: 450px;
  min-height: 120px;
  border-radius: 1.3vw;
  text-align: left;
  padding: 20px;
  background: #f0a500;

  ${(props) =>
    props.align &&
    css`
      border-top-${props.align}-radius: 0;
      float: ${props.align};
    `}

  & .Card--title {
    position: absolute;
    top: -70px;
    ${(props) =>
      props.align &&
      css`
        ${props.align}: 0;
      `}
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
  title: "Headings",
  markdown: `# This is a h1 heading,
  ## number of hashes defines
  ### the importance level
  #### up to h6`,
};

const Card = ({
  title = MD_EX.title,
  markdown = MD_EX.markdown,
  align = "left",
}) => {
  return (
    <StyledCard align={align}>
      <h1 className="Card--title">{title}</h1>
      <ReactMarkdown className="Card--markdown__result" source={markdown} />
      <pre className="Card--markdown">{markdown}</pre>
    </StyledCard>
  );
};

export default Card;
