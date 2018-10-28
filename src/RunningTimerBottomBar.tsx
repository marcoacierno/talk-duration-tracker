import * as React from 'react';

import Button from './Button';
import styled from 'styled-components';

type Props = {
  running: boolean;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
};

const RunningTimerBottomBar: React.SFC<Props> = props => {
  return (
    <Container>
      <Button onClick={props.running ? props.onPause : props.onResume}>
        {props.running && `Pause`}
        {!props.running && `Resume`}
      </Button>
      <Button onClick={props.onStop}>Stop</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default RunningTimerBottomBar;
