import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Description = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-size: 1.23em;
  }
  p {
    font-size: 1.13em;
  }
`;

export const Picture = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 20px;
  margin-bottom: 20px;

  img {
    width: 50%;
    vertical-align: 0%;
    height: 400px;
    border: 5px solid ${colors.primaryColor};

    border-radius: 5%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 15px;
    left: 52%;
    color: #fff;
    background: ${colors.primaryDarkColor};
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
export const Title = styled.h1`
  text-align: center;
`;
export const Home = styled.div`
  margin-right: 97%;
  .backicon {
    font-size: 4em;
  }
`;
