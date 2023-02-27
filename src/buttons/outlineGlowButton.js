import React from "react";
import styled, { keyframes } from "styled-components";

import "./outlineGlowButton.scss";

const OutlineGlowButton = ({
  title,
  titleColor = "#fff",
  titleSize = "1rem",
  borderColor = "#7effb2",
  backgroundColor = "#090909",
}) => {
  const pulse = keyframes`
  from {
    box-shadow: 0 0 25px ${borderColor};
  }
  to {
    box-shadow: 0 0 50px ${borderColor};
  }
`;

  const Button = styled.div`
    display: inline-block;
    text-decoration: none;
    background-color: ${backgroundColor};
    color: ${titleColor};
    padding: 1rem 2rem;
    border: 2px solid ${borderColor};
    border-radius: 8px;
    font-size: ${titleSize};
    font-weight: 700;
    cursor: pointer;
    animation: ${pulse} 10s infinite;
  `;

  return <Button className="button-glow-outline">{title}</Button>;
};

export default OutlineGlowButton;
