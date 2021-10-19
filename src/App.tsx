import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import logging from './config/loggings';
import routes from './config/routes';
import './assets/scss/base.scss';

import Container from 'components/Container/Container';
import Row from 'components/Grid/Row';
import Col from 'components/Grid/Col';

import Header from 'layout/header';
import SidebarNavigation from 'layout/sidebarNavigation';

const App: React.FC<{}> = props => {
  useEffect(() => {
    logging.info(`Loading`)
  }, [])

  return (
    <div>
      <Header />

      <Container className="py-5">
        <BrowserRouter>
          <Row>
            <Col cols={2}>
              <SidebarNavigation />
            </Col>

            <Col cols={10}>
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
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
