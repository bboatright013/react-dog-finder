import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import DogsDetail from './DogsDetail';
import Dogs from './Dogs';

const Routes = ({dogs}) => {
    
    return (
        <div className="Routes">
            <Switch>
            <Route path="/dogs/:name">
                <DogsDetail dogs={dogs} />
            </Route>
            <Route path="/dogs">
                <Dogs dogs={dogs}/>
            </Route>

            <Redirect to="/dogs" />
            </Switch>
        </div>
    )
}

export default Routes;