import React, { useEffect, useState } from 'react';
// importar get lodash para coleta do id da imagem
import { get } from 'lodash';
// importa PropTypes para validação do match
import PropTypes from 'prop-types';
// importanto url de autenticação e pesquisa na API
import {
  ts,
  publicKey,
  privateKey,
  detailImageExtension,
} from '../../services/api';
import md5 from 'md5';

// importando componentes para consumo da api
import axios from '../../services/axios';
import history from '../../services/history';

// LOADING
import Loading from '../../components/Loading';

// STYLES
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Description, Picture, Title } from './styled';

export default function Hero({ match }) {
  const id = get(match, 'params.id', '');

  // configurar campos do fomulário
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [foto, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function getAuthURL() {
    const hash = md5(`${ts}${privateKey}${publicKey}`);
    return `&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  }

  // recebendo/atualizando dados para os inputs
  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const auth = getAuthURL();

        // recebendo os dados da imagem em uma variável para serem retornados após cadastro como edição de imagem
        const { data } = await axios.get(`characters?id=${id}${auth}`);

        const Photo =
          data.data.results[0].thumbnail.path + detailImageExtension;
        setPhoto(Photo);
        setTitle(data.data.results[0].name);
        setDescription(data.data.results[0].description);

        setIsLoading(false);
        // eslint-disable-next-line no-empty
      } catch (err) {
        setIsLoading(false);
        history.push(`/`);
        setIsLoading(false);
      }
    }
    getData();
  }, [id]);
  const backPage = () => {
    history.go(-1);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Link onClick={backPage}>
        <TiArrowBack />
      </Link>
      <Picture>
        <img src={foto} alt={title} />
      </Picture>
      <Title>{`${title}`}</Title>
      <Description>
        <label htmlFor="title"> Description: </label>
        {!description || description === ' ' ? (
          <p>No description</p>
        ) : (
          <p>{description}</p>
        )}
      </Description>
    </Container>
  );
}

// validação do match como objeto
Hero.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
