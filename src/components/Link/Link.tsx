import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
  className?: string;
  variant?: string;
  disabled?: boolean;
  href?: string;
  to?: string;
}

const Link: React.FC<LinkProps> = ({ children, className, variant, disabled, href, to }) => {

  const getClasses = () => {
    return `link ${disabled ? ' is-disabled' : ''}${className ? ' '+className : ''}`;
  }

  return (
    <>
      { href ? 
        <a href={href}
          className={getClasses()}
        >
          {children}
        </a>
        :
        <RouterLink 
          className={getClasses()}
          to={{pathname: to}}
        >
          {children}
        </RouterLink>
      }
    </>
  );
}

Link.defaultProps = {
  variant: 'primary',
  to: '/'
}

export default Link;
