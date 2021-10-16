import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Container from 'components/Container/Container';
import Image from 'components/Image/Image';

const ButtonsPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  const history = useHistory();

  return (
    <div>
      <Container className="py-20">
        <button onClick={() => history.goBack()}>{`<--`} Go Back</button> <br /> <br /> <br />
        
        
        <div style={{height: '400px'}}>
          <Image src="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2659&q=80" />
        </div>
      </Container>
    </div>
  );
}

export default ButtonsPage;
