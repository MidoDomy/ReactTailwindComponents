import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Container from 'components/Container/Container';
import Row from 'components/Grid/Row';
import Col from 'components/Grid/Col';
import Form from 'components/Forms/Form';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';

const ModalPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  let [showSmModal, setShowSmModal] = useState(false);
  let [showMdModal, setShowMdModal] = useState(false);
  let [showLgModal, setShowLgModal] = useState(false);

  function toggleModalSm() {
    setShowSmModal(!showSmModal);
  }

  function toggleModalMd() {
    setShowMdModal(!showMdModal);
  }

  function toggleModalLg() {
    setShowLgModal(!showLgModal);
  }

  const history = useHistory();

  return (
    <div>
      <Container className="py-20">
        <button onClick={() => history.goBack()}>{`<--`} Go Back</button> <br /> <br /> <br />

        <Button className="mr-3" onClick={toggleModalSm}>Show Modal sm</Button>
        <Button className="mr-3" onClick={toggleModalMd}>Show Modal md</Button>
        <Button className="mr-3" onClick={toggleModalLg}>Show Modal lg</Button>

        { showSmModal &&
          <Modal size="sm" title="Comment" onClick={toggleModalSm}>
            <Form>
              <Form.Label label="Add comment" />
              <Form.Textarea placeholder="Give us your feedback" />

              <br />

              <Button block>Send</Button>
            </Form>
          </Modal>
        }

        { showMdModal &&
          <Modal size="md" title="Log in" onClick={toggleModalMd}>
            <Form>
              <Row>
                <Col>
                  <Form.Input type="email" placeholder="E-mail address" />
                </Col>

                <Col>
                  <Form.Input type="password" placeholder="Password" />
                </Col>
              </Row>
              <br />

              <Button block>Submit</Button>
            </Form>
          </Modal>
        }

        { showLgModal &&
          <Modal size="lg" title="Sign in" onClick={toggleModalLg}>
            <Form>
              <Row>
                <Col>
                  <Form.Label label="Name" />
                  <Form.Input name="name" placeholder="Name" />
                </Col>

                <Col>
                  <Form.Label label="Lastname" />
                  <Form.Input name="lastname" placeholder="Lastname" />
                </Col>
              </Row>

              <br />

              <Row>
                <Col>
                  <Form.Label label="Email address" />
                  <Form.Input type="email" placeholder="E-mail address" />
                </Col>

                <Col>
                  <Form.Label label="Password" />
                  <Form.Input type="password" placeholder="Password" />
                </Col>
              </Row>

              <br />

              <Button block>Submit</Button>
            </Form>
          </Modal>
        }
        
      </Container>
    </div>
  );
}

export default ModalPage;
