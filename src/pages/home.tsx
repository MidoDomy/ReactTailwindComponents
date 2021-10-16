import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Container from 'components/Container/Container';

const HomePage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
      <Container className="py-20">
        <Link to="/button" className="inline-block p-5">Button</Link>
        <Link to="/image" className="inline-block p-5">Image</Link>
        <Link to="/input" className="inline-block p-5">Input</Link>
        <Link to="/alert" className="inline-block p-5">Alert</Link>
        <Link to="/collapse" className="inline-block p-5">Collapse</Link>
        <Link to="/dropdown" className="inline-block p-5">Dropdown</Link>
        <Link to="/slider" className="inline-block p-5">Slider</Link>
        <Link to="/modal" className="inline-block p-5">Modal</Link>
      </Container>
    </div>
  );
}

export default HomePage;
