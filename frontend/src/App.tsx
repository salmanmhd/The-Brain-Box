// import { useEffect, useReducer } from 'react';

// import Header from './Header';
// import Main from './Main1';
// import Loader from './Loader';
// import Error from './Error';
// import StartScreen from './StartScreen';
// import Question from './Question';
// import NextButton from './NextButton';
// import Progress from './Progress';
// import FinishScreen from './FinishScreen';
// import Footer from './Footer';
// import Timer from './Timer';

// export default function App() {
//   // const [
//   //   { questions, status, index, answer, points, highscore, secondsRemaining },
//   // ] = useReducer(reducer, initialState);

//   // const { questions, status, index, answer, points, highscore, secondsRemaining } = obj
//   // const dispatch =
//   const URL = import.meta.env.VITE_BASE_URL;
//   console.log(URL);
//   const questions: any = [];

//   const numQuestions = questions.length;
//   const maxPossiblePoints = questions.reduce(
//     (prev: any, cur: any) => prev + cur.points,
//     0
//   );

//   useEffect(
//     function () {
//       async function fetchData() {
//         const res = await fetch(URL);
//         const data = await res.json();
//         console.log(data);
//       }

//       fetchData();
//       // fetch('http://localhost:9000/questions')
//       //   .then((res) => res.json())
//       //   .then((data) => dispatch({ type: 'dataReceived', payload: data }))
//       //   .catch((err) => dispatch({ type: 'dataFailed' }));
//     },
//     [URL]
//   );

//   return (
//     <div className='app'>
//       <Header />

//       <Main>
//         {status === 'loading' && <Loader />}
//         {status === 'error' && <Error />}
//         {status === 'ready' && (
//           <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
//         )}
//         {status === 'active' && (
//           <>
//             <Progress
//               index={index}
//               numQuestions={numQuestions}
//               points={points}
//               maxPossiblePoints={maxPossiblePoints}
//               answer={answer}
//             />
//             <Question
//               question={questions[index]}
//               dispatch={dispatch}
//               answer={answer}
//             />
//             <Footer>
//               <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
//               <NextButton
//                 dispatch={dispatch}
//                 answer={answer}
//                 numQuestions={numQuestions}
//                 index={index}
//               />
//             </Footer>
//           </>
//         )}
//         {status === 'finished' && (
//           <FinishScreen
//             points={points}
//             maxPossiblePoints={maxPossiblePoints}
//             highscore={highscore}
//             dispatch={dispatch}
//           />
//         )}
//       </Main>
//     </div>
//   );
// }
