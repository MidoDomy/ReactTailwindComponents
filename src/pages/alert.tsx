import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Container from 'components/Container/Container';
import Alert from 'components/Alert/Alert';
import Icon from 'components/Icon/Icon';

const AlertsPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  const history = useHistory();

  return (
    <div>
      <Container className="py-20">
        <button onClick={() => history.goBack()}>{`<--`} Go Back</button> <br /> <br /> <br />
        
        
        <Alert text='A simple primary alert with an example link. Give it a click if you like.' />
        <br />
        <Alert type="primary">
          A simple primary alert with <a href="#top">an example link</a>. Give it a click if you like.
        </Alert>
        <br />
        <Alert type="secondary">
          A simple secondary alert with <a href="#top">an example link</a>. Give it a click if you like.
        </Alert>
        <br />
        <Alert type="success">
          A simple success alert with <a href="#top">an example link</a>. Give it a click if you like.
        </Alert>
        <br />
        <Alert type="danger">
          A simple danger alert with <a href="#top">an example link</a>. Give it a click if you like.
        </Alert>
        <br />
        <Alert type="warning">
          A simple warning alert with <a href="#top">an example link</a>. Give it a click if you like.
        </Alert>
        <br />
        <Alert type="info" icon="info">
          A simple info alert with <a href="#top">an example link</a>. Give it a click if you like.
        </Alert>
        <br />
        <Alert type="light">
          A simple light alert with <a href="#top">an example link</a>. Give it a click if you like.
        </Alert>
        <br />
        <Alert type="dark">
          A simple dark alert with <a href="#top">an example link</a>. Give it a click if you like.
        </Alert>

        <br />
        <Alert>
          <h4>Heading</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr />
          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
      </Container>
    </div>
  );
}

export default AlertsPage;
