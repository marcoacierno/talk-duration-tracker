import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import StyledButton from './Button';

type Props = {
  onStart: (mins: number) => void;
};

const PreTimerBottomBar: React.SFC<Props> = props => {
  const [mins, setMins] = useState(15);

  return (
    <Container>
      <Label>
        Talk duration?
        <DurationInput onChange={e => setMins(e.target.value)} value={mins} type="number" min="1" />
        mins
      </Label>
      <StyledButton onClick={() => props.onStart(mins)}>Start</StyledButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 2rem;
`;

const DurationInput = styled.input`
  width: 3rem;
  margin: 0 1rem;
`;

export default PreTimerBottomBar;
