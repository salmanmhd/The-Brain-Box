import { useQuestionContext } from './context/QuestionContext';

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } =
    useQuestionContext();

  const percentage = (points / maxPossiblePoints) * 100 || 0;

  let emoji;
  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 0 && percentage < 50) emoji = '🤨';
  if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <div className="finish-screen">
      <div className="result-container">
        <p className='result'>
          <span className="emoji">{emoji}</span>
          <span className="score-text">
            You scored <strong>{points}</strong> out of{' '}
            {maxPossiblePoints} ({Math.ceil(percentage)}%)
          </span>
        </p>
        <p className='highscore'>(Highscore: {highscore} points)</p>
      </div>
      <div className="button-container">
        <button
          className='btn btn-primary'
          onClick={() => dispatch({ type: 'home' })}
        >
          Home
        </button>
        <button
          className='btn btn-secondary'
          onClick={() => dispatch({ type: 'restart' })}
        >
          Restart quiz
        </button>
      </div>
    </div>
  );
}

export default FinishScreen;
