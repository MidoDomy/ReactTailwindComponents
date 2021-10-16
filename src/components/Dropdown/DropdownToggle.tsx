import React from 'react';

import Button from 'components/Button/Button';

type DropdownToggleProps = {
  btnText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ btnText, onClick }) => {
  return (
    <Button
      className={`dropdown-btn`}
      variant="primary"
      onClick={onClick}
    >
      { btnText }
    </Button>
  );
}

export default DropdownToggle;
