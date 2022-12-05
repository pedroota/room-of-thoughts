import styled, { css } from "styled-components";

interface IButtonProps {
  variant?: "primary" | "warning";
}

export const Button = styled.button<IButtonProps>`
  // Remove completely button appearence
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;

  width: 100%;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: "Recoleta", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #212121;
  white-space: nowrap;

  ${({variant}) => css`
    background-color: ${variant === "primary" && "#DADEE9" || variant === "warning" && "#E7D6D6"};
  `}
`