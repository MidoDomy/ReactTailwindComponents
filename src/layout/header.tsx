import React from 'react';

import Container from 'components/Container/Container';
import Row from 'components/Grid/Row';
import Col from 'components/Grid/Col';
import Image from 'components/Image/Image';

import 'assets/scss/layout/_header.scss'

const Header: React.FC<{}> = () => {
  return (
    <header className="py-4">
      <Container>
        <Row>
          <Col>
            <Image src="logo/DevOasis.png" size={100} />
          </Col>

          <Col>
            Welcome
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
