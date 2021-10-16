import React from 'react';

import 'assets/scss/component/button/_button.scss'

type ButtonProps = {
  className?: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  block?: boolean;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, variant, size, disabled, block, href, onClick }) => {

  const getClasses = () => {
    return `btn btn-${variant} btn-${size}${block ? ' btn-block' : ''}${disabled ? ' is-disabled' : ''}${className ? ' '+className : ''}`;
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
