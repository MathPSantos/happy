import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import Login from './pages/Login';

const Routes = () => {
  return (  
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/app' component={OrphanagesMap} />

            <Route path='/orphanages/create' component={CreateOrphanage} />
            <Route path='/orphanages/:id' component={Orphanage} />

            <Route path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;