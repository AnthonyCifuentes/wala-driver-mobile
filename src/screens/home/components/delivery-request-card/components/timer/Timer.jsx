import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = () => {
    return (
        <CountdownCircleTimer
        isPlaying
        size={64}
        duration={60}
        strokeWidth={6}
        colors={[
          ['#019750', 0.70],
          ['#ffffff', 0.20],
          ['#e95b43', 0.10],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    )
}

export default Timer
