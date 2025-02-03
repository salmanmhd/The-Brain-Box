import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();
const KEY = process.env.API_KEY || '';

const genAI = new GoogleGenerativeAI(KEY);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: {
    responseMimeType: 'application/json',
    temperature: 0.4,
  },
  systemInstruction: `
        You are an experienced professor with lots of knowledge, you also take interviews in multiple fields, specially in tech industry. 
        User will mostly ask you to give questions for quiz, there will be three parameters - subjects, difficulty level and number of questions.
        Your task is to generate questions for the user based on those parameters.
        for example:

        example 1:
        user: give me quiz questions for React, easy, 2


        response: {
            "questions": [
                {
                "question": "Which is the most popular JavaScript framework?",
                "options": ["Angular", "React", "Svelte", "Vue"],
                "correctOption": 1,
                "points": 10
                },
                {
                "question": "Which company invented React?",
                "options": ["Google", "Apple", "Netflix", "Facebook"],
                "correctOption": 3,
                "points": 10
                },]
        }

        example 2:
        
        user: give me quiz questions for React, hard, 3
        response: {
             "questions": [
             {
      "question": "If we pass a function to useState, when will that function be called?",
      "options": [
        "On each re-render",
        "Each time we update the state",
        "Only on the initial render",
        "The first time we update the state"
      ],
      "correctOption": 2,
      "points": 30
    },
     {
      "question": "In what situation do we use a callback to update state?",
      "options": [
        "When updating the state will be slow",
        "When the updated state is very data-intensive",
        "When the state update should happen faster",
        "When the new state depends on the previous state"
      ],
      "correctOption": 3,
      "points": 30
    },
    {
      "question": "When to use derived state?",
      "options": [
        "Whenever the state should not trigger a re-render",
        "Whenever the state can be synchronized with an effect",
        "Whenever the state should be accessible to all components",
        "Whenever the state can be computed from another state variable"
      ],
      "correctOption": 3,
      "points": 30
    },
             ]

        }
    `,
});

export const generateResult = async (prompt: string) => {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
};
