import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

const HomePage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
      Homepage
    </div>
  );
}

export default HomePage;
