// import { createContext, useContext, useReducer, useState } from 'react';

// const initialState = {
//   questions: [],

//   // 'loading', 'error', 'ready', 'active', 'finished'
//   status: 'loading',
//   index: 0,
//   answer: null,
//   points: 0,
//   highscore: 0,
//   secondsRemaining: null,
// };

// const QuestionContext = createContext();

// // func
// const SECS_PER_QUESTION = 30;

// function questionReducer(state: any, action: any) {
//   switch (action.type) {
//     case 'dataReceived':
//       return {
//         ...state,
//         questions: action.payload,
//         status: 'ready',
//       };
//     case 'dataFailed':
//       return {
//         ...state,
//         status: 'error',
//       };
//     case 'start':
//       return {
//         ...state,
//         status: 'active',
//         secondsRemaining: state.questions.length * SECS_PER_QUESTION,
//       };
//     case 'newAnswer': {
//       const question = state.questions.at(state.index);
//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };
//     }
//     case 'nextQuestion':
//       return { ...state, index: state.index + 1, answer: null };
//     case 'finish':
//       return {
//         ...state,
//         status: 'finished',
//         highscore:
//           state.points > state.highscore ? state.points : state.highscore,
//       };
//     case 'restart':
//       return { ...initialState, questions: state.questions, status: 'ready' };

//     case 'tick':
//       return {
//         ...state,
//         secondsRemaining: state.secondsRemaining - 1,
//         status: state.secondsRemaining === 0 ? 'finished' : state.status,
//       };

//     default:
//       return;
//   }
// }

// export function QuestionProvider({ children }: any) {
//   const [questions, dispatch] = useReducer(questionReducer, []);
//   return (
//     <QuestionContext.Provider value={{ questions, dispatch }}>
//       {children}
//     </QuestionContext.Provider>
//   );
// }

// export const useTodos = () => useContext(QuestionContext);
