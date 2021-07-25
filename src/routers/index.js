import React from 'react';
// importando componentes de rota
import { Switch } from 'react-router-dom';
import MyRoute from './myRoute';

// recebendo as páginas
import Home from '../pages/Home';
import Heroes from '../pages/Heroes';
import Hero from '../pages/Hero';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/heroes/:name" component={Heroes} />
      <MyRoute exact path="/hero/:id" component={Hero} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
