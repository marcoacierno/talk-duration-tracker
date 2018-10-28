import * as React from 'react';
import { useState } from 'react';

import styled from 'styled-components';

import Timer from './Timer';
import PreTimerBottomBar from './PreTimerBottomBar';
import RunningTimerBottomBar from './RunningTimerBottomBar';

type Interval = {
  start: number;
  end: number | null;
};

function calculateElapsedTime(intervals: Interval[]) {
  return intervals.reduce((p, c) => {
    if (c.end === null) {
      return p + (Date.now() - c.start);
    }

    return p + (c.end - c.start);
  }, 0);
}

export default () => {
  const [intervals, setIntervals] = useState([]);
  const [talkDuration, setTalkDuration] = useState(0);
  const [renderer, setRenderer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const time = intervals.length > 0 ? intervals[intervals.length - 1].start : null;

  if (isRunning) {
    requestAnimationFrame(() => {
      setRenderer(renderer + 1);
    });
  }

  const elapsedTime = time ? calculateElapsedTime(intervals) : 0;
  let remainingTime = time ? talkDuration * 60000 - elapsedTime : 0;

  if (remainingTime < 0) {
    remainingTime = 0;
  }

  return (
    <Container>
      <div>
        <Timer time={remainingTime} label="Remaining time" hasBackground />
        <Timer time={elapsedTime} label="Total time" />
      </div>

      <BottomBar>
        {time === null && (
          <PreTimerBottomBar
            onStart={mins => {
              setIntervals([{ start: Date.now(), end: null }]);
              setTalkDuration(mins);
              setIsRunning(true);
            }}
          />
        )}

        {time !== null && (
          <RunningTimerBottomBar
            running={isRunning && time !== null}
            onStop={() => {
              setRenderer(0);
              setTalkDuration(0);
              setIsRunning(false);
              setIntervals([]);
            }}
            onResume={() => {
              setIntervals([
                ...intervals,
                {
                  start: Date.now(),
                  end: null,
                },
              ]);
              setIsRunning(true);
            }}
            onPause={() => {
              const newIntervals = [...intervals];
              newIntervals[intervals.length - 1].end = Date.now();
              setIntervals(newIntervals);
              setIsRunning(false);
            }}
          />
        )}
      </BottomBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;
`;

const BottomBar = styled.div``;
