import React, { useEffect } from 'react';
import IPage from 'interfaces/page'
import logging from 'config/loggings'

import Collapse from 'components/Collapse/Collapse';

const CollapsePage: React.FC<IPage> = props => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`)
  }, [props.name])

  return (
    <div>
      <Collapse>
        <Collapse.Item heading="Item 1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consectetur deserunt ipsam culpa quo. Eos, consequuntur aspernatur reprehenderit dolore iure sint error aperiam. Accusamus reiciendis vitae, ullam exercitationem ad quas.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ullam reprehenderit temporibus delectus doloremque culpa, incidunt veniam beatae harum aliquam quis earum praesentium id non nostrum sunt dignissimos numquam atque.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum minus, eum vero blanditiis repellat delectus perferendis aliquam soluta tempore iure officiis itaque quos repudiandae id esse ratione fuga! Temporibus, illum.
        </Collapse.Item>

        <Collapse.Item heading="Item 2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod esse voluptates possimus sequi eveniet recusandae magnam facere aliquam itaque minus? Quo, nobis soluta nam doloremque eos dolore veniam rerum unde!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid qui recusandae ipsam animi repellat quaerat, in error dolorem cupiditate eveniet molestiae saepe deleniti inventore, tempora voluptatum laudantium hic rerum officiis!
        </Collapse.Item>

        <Collapse.Item heading="Item 3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et obcaecati pariatur fuga fugiat officia? Reprehenderit error perspiciatis laborum officiis delectus adipisci nobis numquam? Optio cupiditate fuga magni debitis deserunt!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dignissimos dicta adipisci suscipit delectus sequi voluptate cumque quidem laborum. Quod facilis ducimus rerum blanditiis quia vel accusantium id possimus optio?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quisquam aperiam, qui consectetur aut fugit, maiores aliquid numquam assumenda expedita porro quaerat at laboriosam nostrum deleniti repellendus earum labore dolor!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit facilis quos voluptatum omnis rem harum, voluptatem ullam obcaecati dolorum reprehenderit veritatis nihil accusamus provident. Labore reprehenderit distinctio cupiditate quae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi animi vitae placeat eaque commodi rem quo sunt. Nulla omnis eligendi vero deleniti nihil repellendus voluptatem maxime voluptatibus quo at!
        </Collapse.Item>
      </Collapse>
    </div>
  );
}

export default CollapsePage;
