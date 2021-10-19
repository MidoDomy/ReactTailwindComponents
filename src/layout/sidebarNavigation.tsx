import React from 'react';
import routes from '../config/routes';

import 'assets/scss/layout/_sidebar-navigation.scss'

import Link from 'components/Link/Link';

const SidebarNavigation: React.FC<{}> = () => {
  return (
    <div className="sidebar-navigation">
      <ul>
        <h4 className="mb-5 font-semibold uppercase">Components</h4>
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <Link 
                to={route.path} 
                className="block py-3 transition-colors hover:text-base-primary" 
              >{route.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default SidebarNavigation;
