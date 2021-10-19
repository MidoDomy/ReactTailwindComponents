import React from 'react';

import 'assets/scss/component/button/_button.scss'

import Link from 'components/Link/Link';

type ButtonProps = {
  className?: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  outline?: boolean;
  href?: string;
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, variant, size, disabled, block, outline, href, to, onClick }) => {

  const getClasses = () => {
    return `btn btn${outline ? '-outline' : ''}-${variant} btn-${size}${block ? ' btn-block' : ''}${disabled ? ' is-disabled' : ''}${className ? ' '+className : ''}`;
  }

  return (
    <>
      { href ? 
        <Link href={href} className={getClasses()}>
          {children}
        </Link>
      : to ?
        <Link to={to} className={getClasses()}>
          {children}
        </Link>
      :
        <button 
          className={getClasses()}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      }
    </>
  );
}

Button.defaultProps = {
  size: 'md',
  variant: 'primary'
}

export default Button;
