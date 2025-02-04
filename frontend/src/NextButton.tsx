import { useQuestionContext } from './context/QuestionContext';

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuestionContext();
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <div className="question-buttons">
        <button
          className='btn btn-ui'
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div className="question-buttons">
        <button
          className='btn btn-ui'
          onClick={() => dispatch({ type: 'finish' })}
        >
          Finish
        </button>
      </div>
    );
}

export default NextButton;
