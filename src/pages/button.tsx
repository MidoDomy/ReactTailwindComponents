import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Container from 'components/Container/Container';
import Row from 'components/Grid/Row';
import Col from 'components/Grid/Col';
import Button from 'components/Button/Button';

const ButtonsPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  const history = useHistory();

  return (
    <div>
      <Container className="py-20">
        <button onClick={() => history.goBack()}>{`<--`} Go Back</button> <br /> <br /> <br />
        
        
        <Row>
          <Col>
            <Button size="sm">Primary sm</Button>
          </Col>
          
          <Col>
            <Button>Primary md</Button>
          </Col>

          <Col>
            <Button size="lg">Primary lg</Button>
          </Col>

          <Col>
            <Button block>Primary</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="secondary">Secondary sm</Button>
          </Col>
          
          <Col>
            <Button variant="secondary">Secondary md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="secondary">Secondary lg</Button>
          </Col>

          <Col>
            <Button variant="secondary" block>Secondary</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="light">Light sm</Button>
          </Col>
          
          <Col>
            <Button variant="light">Light md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="light">Light lg</Button>
          </Col>

          <Col>
            <Button variant="light" block>Light</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="dark">dark sm</Button>
          </Col>
          
          <Col>
            <Button variant="dark">dark md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="dark">dark lg</Button>
          </Col>

          <Col>
            <Button variant="dark" block>dark</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="success">success sm</Button>
          </Col>
          
          <Col>
            <Button variant="success">success md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="success">success lg</Button>
          </Col>

          <Col>
            <Button variant="success" block>success</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="danger">danger sm</Button>
          </Col>
          
          <Col>
            <Button variant="danger">danger md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="danger">danger lg</Button>
          </Col>

          <Col>
            <Button variant="danger" block>danger</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="warning">warning sm</Button>
          </Col>
          
          <Col>
            <Button variant="warning">warning md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="warning">warning lg</Button>
          </Col>

          <Col>
            <Button variant="warning" block>warning</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="info">info sm</Button>
          </Col>
          
          <Col>
            <Button variant="info">info md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="info">info lg</Button>
          </Col>

          <Col>
            <Button variant="info" block>info</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" disabled>Disabled sm</Button>
          </Col>
          
          <Col>
            <Button disabled>Disabled md</Button>
          </Col>

          <Col>
            <Button size="lg" disabled>Disabled lg</Button>
          </Col>

          <Col>
            <Button disabled block>Disabled</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="outline-primary">Primary sm</Button>
          </Col>
          
          <Col>
            <Button variant="outline-primary">Primary md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="outline-primary">Primary lg</Button>
          </Col>

          <Col>
            <Button block variant="outline-primary">Primary</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="outline-secondary">Secondary sm</Button>
          </Col>
          
          <Col>
            <Button variant="outline-secondary">Secondary md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="outline-secondary">Secondary lg</Button>
          </Col>

          <Col>
            <Button variant="outline-secondary" block>Secondary</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="outline-light">Light sm</Button>
          </Col>
          
          <Col>
            <Button variant="outline-light">Light md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="outline-light">Light lg</Button>
          </Col>

          <Col>
            <Button variant="outline-light" block>Light</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="outline-dark">dark sm</Button>
          </Col>
          
          <Col>
            <Button variant="outline-dark">dark md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="outline-dark">dark lg</Button>
          </Col>

          <Col>
            <Button variant="outline-dark" block>dark</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="outline-success">success sm</Button>
          </Col>
          
          <Col>
            <Button variant="outline-success">success md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="outline-success">success lg</Button>
          </Col>

          <Col>
            <Button variant="outline-success" block>success</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="outline-danger">danger sm</Button>
          </Col>
          
          <Col>
            <Button variant="outline-danger">danger md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="outline-danger">danger lg</Button>
          </Col>

          <Col>
            <Button variant="outline-danger" block>danger</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="outline-warning">warning sm</Button>
          </Col>
          
          <Col>
            <Button variant="outline-warning">warning md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="outline-warning">warning lg</Button>
          </Col>

          <Col>
            <Button variant="outline-warning" block>warning</Button>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Button size="sm" variant="outline-info">info sm</Button>
          </Col>
          
          <Col>
            <Button variant="outline-info">info md</Button>
          </Col>

          <Col>
            <Button size="lg" variant="outline-info">info lg</Button>
          </Col>

          <Col>
            <Button variant="outline-info" block>info</Button>
          </Col>
        </Row>

        <br />
      </Container>
    </div>
  );
}

export default ButtonsPage;
