import { useEffect } from 'react';
import { useQuestionContext } from './context/QuestionContext';

function Timer() {
  const { dispatch, secondsRemaining } = useQuestionContext();

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'tick' });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  if (secondsRemaining === null) return null;
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;
