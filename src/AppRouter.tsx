import React from 'react';
import { Route, Switch } from 'react-router-dom';


import { RouterPath } from './constants';
import { Home } from './pages';


const AppRouter = () => {

  return (
    <>
      <Switch>
        <Route path={RouterPath.Home} exact component={Home} />
      </Switch>
    </>
  );
}

export default AppRouter;
