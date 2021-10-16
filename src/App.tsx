import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import logging from './config/loggings';
import routes from './config/routes';
import './assets/scss/base.scss';

const App: React.FC<{}> = props => {
  useEffect(() => {
    logging.info(`Loading`)
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
