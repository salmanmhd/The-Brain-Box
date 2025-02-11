import axios from 'axios';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useQuestionContext } from './context/QuestionContext';

export default function InputItems() {
  const [topic, setTopic] = useState('');
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('Easy');
  const URL = import.meta.env.VITE_BASE_URL;
  const { dispatch } = useQuestionContext();

  async function handleStart() {
    dispatch({ type: 'loading' });
    try {
      const { data } = await axios.post(URL, {
        prompt: `give me quiz questions for ${
          topic ? topic : 'react'
        }, ${difficulty}, ${numQuestions}`,
      });
      const questions = await JSON.parse(data.result);
      dispatch({ type: 'dataReceived', payload: questions.questions, topic });
    } catch (error) {
      dispatch({ type: 'dataFailed' });
      console.log(error);
    }
  }
  return (
    <div className='mt-6  w-full flex flex-col items-center max-w-[60rem]'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleStart();
        }}
        className='flex  flex-wrap justify-center gap-6 p-6 rounded-xl'
      >
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className='input-item rounded-full border border-gray-300 w-[22rem] h-[4rem] px-8 text-xl focus:ring-2 focus:ring-gray-800 outline-none'
          type='text'
          placeholder='Enter the quiz topic'
        />

        <div className='relative w-[22rem]'>
          <select
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className='input-item rounded-full border border-gray-300 w-full h-[4rem] px-8 text-xl appearance-none focus:ring-2 focus:ring-gray-700 outline-none cursor-pointer '
          >
            <option className='text-gray-700 text-xl p-4'>
              Choose number of Qs
            </option>
            <option className='text-gray-900 text-xl p-4' value='5'>
              5
            </option>
            <option className='text-gray-900 text-xl p-4' value='10'>
              10
            </option>
            <option className='text-gray-900 text-xl p-4' value='15'>
              15
            </option>
            <option className='text-gray-900 text-xl p-4' value='20'>
              20
            </option>
            <option className='text-gray-900 text-xl p-4' value='25'>
              25
            </option>
            <option className='text-gray-900 text-xl p-4' value='30'>
              30
            </option>
          </select>
          <ChevronDown className='absolute inset-y-0 right-4 top-4 flex items-center pointer-events-none' />
        </div>

        <div className='relative w-[22rem]'>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className='input-item rounded-full border border-gray-300 w-full h-[4rem] px-8 text-xl appearance-none focus:ring-2 focus:ring-gray-700 outline-none cursor-pointer '
          >
            <option className='text-gray-700 text-xl p-4'>
              Choose Difficulty
            </option>
            <option className='text-gray-900 text-xl p-4' value='Easy'>
              Easy
            </option>
            <option className='text-gray-900 text-xl p-4' value='Medium'>
              Medium
            </option>
            <option className='text-gray-900 text-xl p-4' value='Hard'>
              Hard
            </option>
          </select>

          <ChevronDown className='absolute inset-y-0 right-4 top-4 flex items-center pointer-events-none' />
        </div>
      </form>
      <button onClick={handleStart} className='start-btn btn w-[20rem]'>
        Start
      </button>
    </div>
  );
}
