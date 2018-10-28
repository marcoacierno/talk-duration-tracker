import * as React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  onClick?: () => void;
};

const Button: React.SFC<Props> = props => {
  return (
    <div onClick={props.onClick} className={props.className}>
      {props.children}
    </div>
  );
};

const StyledButton = styled(Button)`
  display: inline-block;
  padding: 0.7rem 4rem;

  cursor: pointer;
  border-radius: 0.4rem;
  background: #9b9b9b;
`;

export default StyledButton;
