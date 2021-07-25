import React from 'react';
// importando links do react-router-dom
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <img alt="logo" src="/images/logo_white.png" className="logo" />
      </Link>
    </Nav>
  );
}
