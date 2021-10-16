import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Container from 'components/Container/Container';
import Dropdown from 'components/Dropdown/Dropdown';

const DropdownPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  const history = useHistory();

  return (
    <div>
      <Container className="py-20">
        <button onClick={() => history.goBack()}>{`<--`} Go Back</button> <br /> <br /> <br />
        
        
        <Dropdown btnText="Toggle" position="left">
          <Dropdown.Item href="nesto">
            Link 1
          </Dropdown.Item>

          <Dropdown.Item>
            Link 2
          </Dropdown.Item>

          <Dropdown.Item>
            Neki malo veci link 3
          </Dropdown.Item>
        </Dropdown>
        
        <Dropdown btnText="Toggle" position="right" className="float-right">
          <Dropdown.Item href="nesto">
            Link 1
          </Dropdown.Item>

          <Dropdown.Item>
            Link 2
          </Dropdown.Item>

          <Dropdown.Item>
            Neki malo veci link 3
          </Dropdown.Item>
        </Dropdown>
      </Container>
    </div>
  );
}

export default DropdownPage;
