import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: block;
  input {
    font-size: 20px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 3px 10px;
    &:focus {
      border-color: ${colors.primaryDarkColor};
    }
  }
  input::placeholder {
    font-size: 16px;
  }
  button {
    display: inline;
    padding-left: 10px;
    margin-bottom: 15px;
  }
`;
export const HeroesContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    a {
      margin: 0;
      position: relative;
      bottom: 5px;
    }
    .name {
      width: 60%;
      text-align: center;
    }
  }
  /*Inserindo borda para separar cada imagem, retirando do primeiro */
  div + div {
    border-top: 1px solid #eee;
  }
`;
export const ThumbImage = styled.div`
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;

export const Search = styled.button`
  width: 1%;
  display: inline;
`;
