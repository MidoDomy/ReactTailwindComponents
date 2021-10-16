import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Container from 'components/Container/Container';
import Form from 'components/Forms/Form';

const InputsPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  const history = useHistory();

  return (
    <div>
      <Container className="py-20">
        <button onClick={() => history.goBack()}>{`<--`} Go Back</button> <br /> <br /> <br />
        
        
        <Form>
          <Form.Label label="Input sm" />
          <Form.Group>
            <Form.GroupText text="@" />
            <Form.Input size="sm" disabled value="fafsaf" />
          </Form.Group>
          
          <Form.Group>
            <Form.Label label="Input md (default)" />
            <Form.Input placeholder="Unesite text ovdje" />
          </Form.Group>

          <Form.Label label="Input lg" />
          <Form.Group>
            <Form.Input />
            <Form.GroupText>
              @example.com
            </Form.GroupText>
            <Form.Input placeholder="Unesite text ovdje" />
          </Form.Group>

          <Form.Label label="Select sm" />
          <Form.Group>
            <Form.Select size="sm" disabled options={[{value: 1, name: "Prvi"}, {value: 2, name: "Drugi"}, {value: 3, name: "Treci"}, {value: "4", name: "Cetvrti"}]}></Form.Select>
          </Form.Group>
          
          <Form.Label label="Select md (default)" />
          <Form.Group>
            <Form.Select options={[{value: 1, name: "Prvi"}, {value: 2, name: "Drugi"}, {value: 3, name: "Treci"}, {value: "4", name: "Cetvrti"}]}></Form.Select>
            <Form.GroupText>
              @example.com
            </Form.GroupText>
          </Form.Group>

          <Form.Label label="Select lg" />
          <Form.Group>
            <Form.Select size="lg" options={[{value: 1, name: "Prvi"}, {value: 2, name: "Drugi"}, {value: 3, name: "Treci"}, {value: "4", name: "Cetvrti"}]}></Form.Select>
          </Form.Group>

          <Form.Label label="Textarea sm" />
          <Form.Group>
            <Form.Textarea size="sm" placeholder="Textarea"></Form.Textarea>
          </Form.Group>

          <Form.Label label="Textarea md (default)" />
          <Form.Group>
            <Form.Textarea placeholder="Textarea"></Form.Textarea>
          </Form.Group>

          <Form.Label label="Textarea lg" />
          <Form.Group>
            <Form.GroupText text="@" />
            <Form.Textarea size="lg" placeholder="Textarea"></Form.Textarea>
            <Form.GroupText>
              @example.com
            </Form.GroupText>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default InputsPage;
