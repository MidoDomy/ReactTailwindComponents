import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Container from 'components/Container/Container';
import Slider from 'components/Slider/Slider';
import Image from 'components/Image/Image';
import BannerImage from 'components/Banner/BannerImage';

const SliderPage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  const history = useHistory();

  return (
    <div>
      <Container className="py-20">
        <button onClick={() => history.goBack()}>{`<--`} Go Back</button> <br /> <br /> <br />

        <Slider dots controls>
          <Slider.Item>
            <Image src="https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </Slider.Item>

          <Slider.Item>
            <Image src="https://media.istockphoto.com/photos/spooky-halloween-sky-picture-id1270121259?b=1&k=20&m=1270121259&s=170667a&w=0&h=LGJ9lGqFWSPCGUVS0hBRlTXXb_Ez2xZwWhmk5pccRZg=" />
          </Slider.Item>

          <Slider.Item>
            <Image src="https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </Slider.Item>

          <Slider.Item>
            <Image src="https://media.istockphoto.com/photos/golden-yellow-orange-red-maple-leaves-closeup-on-the-blurred-picture-id1270022469?b=1&k=20&m=1270022469&s=170667a&w=0&h=n_30HrStWzJIRtACEzqmr5HZelrg1iGm6ZUjxEYHDuU=" />
          </Slider.Item>
        </Slider>

        <Slider dots controls>
          <Slider.Item>
            <BannerImage src="https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" cover />
          </Slider.Item>

          <Slider.Item>
            <BannerImage src="https://media.istockphoto.com/photos/spooky-halloween-sky-picture-id1270121259?b=1&k=20&m=1270121259&s=170667a&w=0&h=LGJ9lGqFWSPCGUVS0hBRlTXXb_Ez2xZwWhmk5pccRZg=" cover />
          </Slider.Item>

          <Slider.Item>
            <BannerImage src="https://media.istockphoto.com/photos/golden-yellow-orange-red-maple-leaves-closeup-on-the-blurred-picture-id1270022469?b=1&k=20&m=1270022469&s=170667a&w=0&h=n_30HrStWzJIRtACEzqmr5HZelrg1iGm6ZUjxEYHDuU=" cover />
          </Slider.Item>
        </Slider>
      </Container>
    </div>
  );
}

export default SliderPage;
