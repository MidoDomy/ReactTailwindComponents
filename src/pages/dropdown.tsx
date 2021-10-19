import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Dropdown from 'components/Dropdown/Dropdown';

const DropdownPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
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
    </div>
  );
}

export default DropdownPage;
