import { createContext, useContext, useReducer } from 'react';

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'idle',
  index: 0,
  topic: '',
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
};

interface QuestionContextType {
  questions: any[];
  topic: '';
  status: string;
  index: number;
  answer: null | number;
  points: number;
  highscore: number;
  numQuestions: number;
  maxPossiblePoints: number;
  secondsRemaining: number | null;
  dispatch: React.Dispatch<any>;
}
export const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
);

// func
const SECS_PER_QUESTION = 30;

function questionReducer(state: any, action: any) {
  switch (action.type) {
    case 'home':
      return { ...initialState };
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
        topic: action.topic,
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    case 'loading':
      return { ...state, status: 'loading' };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case 'newAnswer': {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return { ...initialState, questions: state.questions, status: 'ready' };

    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };

    default:
      return state;
  }
}

export function QuestionProvider({ children }: { children: React.ReactNode }) {
  const [
    {
      questions,
      topic,
      status,
      index,
      answer,
      points,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(questionReducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev: any, cur: any) => prev + cur.points,
    0
  );

  return (
    <QuestionContext.Provider
      value={{
        questions,
        status,
        topic,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
        numQuestions,
        maxPossiblePoints,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error(
      'useQuestionContext must be used within a QuestionProvider'
    );
  }
  return context;
};
