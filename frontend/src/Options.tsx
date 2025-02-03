import { useQuestionContext } from './context/QuestionContext';

function Options({ question }: { question: any }) {
  const { dispatch, answer } = useQuestionContext();
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option: any, index: number) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
