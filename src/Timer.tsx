import * as React from 'react';

import styled from 'styled-components';

type Props = {
  label: String;
  time: number;
  hasBackground?: boolean;
  className?: string;
};

function getTime(date: Date) {
  const hours = date.getHours() - 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = parseInt(
    date
      .getMilliseconds()
      .toString()
      .slice(0, 2),
    10
  );

  let output = '';

  if (hours > 0) {
    output = `${pad(hours)}:`;
  }

  output += `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  return output;
}

const Timer: React.SFC<Props> = props => {
  const date = new Date(props.time);
  const time = getTime(date);

  return (
    <div className={props.className}>
      <Label>{props.label}</Label>
      <Time>{time}</Time>
    </div>
  );
};

const Label = styled.span`
  font-size: 1.4rem;
  font-weight: lighter;
`;

const Time = styled.span`
  font-size: 6.4rem;
  font-weight: bold;
  padding: 1rem 0 0;
`;

const StyledTimer = styled(Timer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 2rem;

  background: ${props => (props.hasBackground ? '#2a9079' : '')};
`;

const pad = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

export default StyledTimer;
