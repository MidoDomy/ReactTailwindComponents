import React from 'react';

import Icon from 'components/Icon/Icon';

import 'assets/scss/component/alert/_alert.scss'

type AlertProps = {
  className?: string;
  type?: string;
  icon?: string;
  text?: string;
}

const Alert: React.FC<AlertProps> = ({ children, className, type, icon, text }) => {
  return (
    <div className={`alert alert-${type}${className ? ' '+className : ''}`}>
      { icon && <Icon name={icon} className="alert-icon" /> }
      { text ? text : children }
    </div>
  );
}

Alert.defaultProps = {
  type: 'info'
}

export default Alert;
