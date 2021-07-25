import React, { useState } from 'react';

// importando link do react router dom
import { Link } from 'react-router-dom';
// importando ícones que serão exibidos no lugar de fotos inexistentes de cada imagem
import { FaSearch } from 'react-icons/fa';

// importando history para chamar a página de pesquisa
import history from '../../services/history';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

// importando componente de loading da página
import Loading from '../../components/Loading';

export default function Home() {
  // definindo estado isLoading da página
  const [isLoading, setIsLoading] = useState(false);
  // definindo os estados da string a ser pesquisada
  const [string, setString] = useState('');
  // criando ref para foco no input
  const searchInputRef = React.useRef(null);
  React.useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  // função que coleta o nome do herói e envia para a página de resultado
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let error = false;
      if (string.length < 1) {
        setString('   ');
        error = true;
      }
      if (error) {
        setIsLoading(false);
        history.push(`/heroes/ `);
        return;
      }
      history.push(`/heroes/${string}`);
    } catch (err) {
      history.push(`/`);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Heroes</h1>
      <Form onSubmit={handleSearch}>
        <input
          type="text"
          ref={searchInputRef}
          placeholder="search by hero name"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <Link to={`/heroes/${string}`}>
          <FaSearch size={24} />
        </Link>
      </Form>
    </Container>
  );
}
