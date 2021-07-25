import React, { useState } from 'react';

// importando link do react router dom
import { Link } from 'react-router-dom';
// importando lodash => tratamento excessão
import { get } from 'lodash';
// importa PropTypes para validação do match
import PropTypes from 'prop-types';
// importando ícones que serão exibidos no lugar de fotos inexistentes de cada imagem
import { FaEye, FaSearch } from 'react-icons/fa';
// importanto url de autenticação e pesquisa na API
import {
  ts,
  publicKey,
  privateKey,
  listImageExtension,
} from '../../services/api';
import md5 from 'md5';
import { Container } from '../../styles/GlobalStyles';
import { HeroesContainer, ThumbImage, BackToSearch } from './styled';
// importando componentes para consumo da api
import axios from '../../services/axios';

// importando componente de loading da página
import Loading from '../../components/Loading';

export default function Heroes({ match }) {
  const name = get(match, 'params.name', '');

  // definindo estado isLoading da página
  const [isLoading, setIsLoading] = useState(false);
  // definindo os estados da imagem
  const [images, setImages] = useState([]);

  function getAuthURL() {
    const hash = md5(`${ts}${privateKey}${publicKey}`);
    return `&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  }

  React.useEffect(() => {
    async function getData() {
      // antes de comunicar com api, informar o loading
      setIsLoading(true);
      const auth = getAuthURL();
      const response = await axios.get(
        `characters?nameStartsWith=${name}${auth}`
      );
      // enviando dados da api para o app
      setImages(response.data.data.results);
      // depois de retornar da api retirar o loading
      setIsLoading(false);
    }
    getData();
  }, [name]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <BackToSearch>
        <Link className="backtosearch" to="/">
          <FaSearch />
          <h2>Back to Search</h2>
        </Link>
      </BackToSearch>
      {/* exibindo dados da api na página */}
      <HeroesContainer>
        {/* Coletando dados da api */}
        {images.map((image) => (
          <div key={String(image.id)}>
            <Link to={`/hero/${image.id}`}>
              <ThumbImage>
                <img src={image.thumbnail.path + listImageExtension} alt="" />
              </ThumbImage>
            </Link>
            <Link to={`/hero/${image.id}`}>
              <span className="name">{image.name}</span>
            </Link>
            <Link to={`/hero/${image.id}`}>
              <FaEye id="details" size={24} />
            </Link>
          </div>
        ))}
      </HeroesContainer>
    </Container>
  );
}
// validação do match como objeto
Heroes.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
