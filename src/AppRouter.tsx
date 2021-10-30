import React from 'react';
import { Route, Switch } from 'react-router-dom';


import { RouterPath } from './constants';
import { Home , Reservation } from './pages';


const Test = () => {
  return <div>hi</div>
}

const AppRouter = () => {

  return (
    <>
      <Switch>
        <Route path={RouterPath.Home} exact component={Home} />
        {/* <Route path={RouterPath.QnA} exact  component={Test} />
        <Route path={RouterPath.Instruction} exact component={Test} />
        <Route path={RouterPath.Reservation} exact component={Reservation} />
        <Route path={RouterPath.Price} exact component={Test} />
        

        
        <Route path={RouterPath.AboutUs} exact component={Test} />
        <Route path={RouterPath.Facility} exact component={Test} />
        <Route path={RouterPath.ContactUs} exact component={Test} /> */}
      </Switch>
    </>
  );
}

export default AppRouter;
