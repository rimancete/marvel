import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};
  line-height: 2em;
  letter-spacing: 0.005em;
}
h1{
  text-align: center;
}
html, body, #root {
height: 100%;
}
button {
  color: ${colors.primaryDarkColor};
  cursor: pointer;
  background: transparent;
  border:none;
  padding: 8px 20px;
  transition: all, 0.3s;
}
button:hover{
  color: ${colors.primaryColor};
}


a{
  text-decoration: none;
  color: ${colors.primaryDarkColor};
  transition: all, 0.3s;
}
a:hover{
  color: ${colors.primaryColor};
}

ul{
  list-style: none;
}
.title404{
  text-align: center;
  font-size: 2em;
}

.toast-container .Toastify__toast--success{
  background: ${colors.successColor};
}
.toast-container .Toastify__toast--error{
  background: ${colors.errorColor};
}
.toast-container .Toastify__toast--info{
  background: ${colors.infoColor};
}

`;

export const Container = styled.section`
  @media (max-width: 500px) {
    padding: 10px;
    max-width: 95%;
    input[type='text'] {
      width: 180px;
    }
    span {
      font-size: 0.8em;
    }
    label {
      font-size: 0.8em;
    }
    h1 {
      font-size: 1.4em;
    }
    input[type='text'],
    input[type='email'] {
      font-size: 1.2em;
      &::placeholder {
        font-size: 0.8em;
      }
    }
    svg {
      width: 18px;
      height: 18px;
    }
    a {
      font-size: 0.85em;
    }
  }
  @media (min-width: 501px) {
    width: 650px;
    .backtosearch {
      margin-left: 110px;
    }
    input[type='text'] {
      width: 245px;
    }
    svg {
      width: 20px;
      height: 20px;
    }

    a {
      font-size: 0.95em;
    }
  }

  @media (min-width: 780px) {
    width: 680px;
    form {
      margin-left: 165px;
    }
    .backtosearch {
      margin-left: 230px;
    }

    input[type='text'] {
      width: 250px;
    }

    svg {
      width: 22px;
      height: 22px;
    }

    a {
      font-size: 1em;
    }
  }
  @media (min-width: 1024px) {
    width: 850px;
    form {
      margin-left: 230px;
    }
    .backtosearch {
      margin-left: 315px;
    }
    span {
      font-size: 1.2em;
    }
    label {
      font-size: 1.1em;
    }

    h1 {
      font-size: 1.8em;
    }
    input[type='text'] {
      font-size: 1.25em;
      width: 300px;
      &::placeholder {
        font-size: 1em;
      }
    }
  }
  max-width: 90%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;
