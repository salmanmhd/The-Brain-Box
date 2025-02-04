import { useQuestionContext } from './context/QuestionContext';

function StartScreen() {
  const { numQuestions, dispatch, topic } = useQuestionContext();
  return (
    <div className='start text-center'>
      <h2>Welcome to The {topic.toUpperCase()} Quiz!</h2>
      <h3>
        {numQuestions} questions to test your {topic} mastery
      </h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
