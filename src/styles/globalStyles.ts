import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  height: 100%;
 }

 a, li {
  text-decoration: none;
  list-style: none;
  color: black;
 }
`;
