import React from 'react';
import { Route, Switch } from 'react-router-dom';


import { RouterPath } from './constants';
import { Home } from './pages';


const AppRouter = () => {

  return (
    <>
      <Switch>
        <Route path={RouterPath.Home} exact component={Home} />
        <Route path={RouterPath.AboutUs} exact component={Home} />
        <Route path={RouterPath.Reservation} exact component={Home} />
        <Route path={RouterPath.Instruction} exact component={Home} />
        <Route path={RouterPath.Price} exact component={Home} />
        <Route path={RouterPath.Facility} exact component={Home} />
        <Route path={RouterPath.ContactUs} exact component={Home} />

      </Switch>
    </>
  );
}

export default AppRouter;
