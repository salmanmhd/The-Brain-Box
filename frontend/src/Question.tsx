import { useQuestionContext } from './context/QuestionContext';
import Options from './Options';

function Question() {
  const { questions, index } = useQuestionContext();
  // answer={answer}
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
