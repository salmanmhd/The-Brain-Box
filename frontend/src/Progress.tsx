import { useQuestionContext } from './context/QuestionContext';

function Progress() {
  const { index, numQuestions, points, answer, questions } =
    useQuestionContext();
  const maxPossiblePoints = questions.reduce(
    (prev: any, cur: any) => prev + cur.points,
    0
  );
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
