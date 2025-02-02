import express from 'express';
import dotenv from 'dotenv';
import questions from './questions.json';
import cors from 'cors';
import { generateResult } from './ai';
// console.log(questions);
dotenv.config();
const PORT = process.env.PORT;
console.log(PORT);
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    res.status(200).json({
      questions: questions.questions,
    });
  } catch (error) {
    res.status(400).json({
      msg: 'something went wrong',
    });
  }
});

app.post('/', async (req, res) => {
  const { prompt } = req.body;
  const result = await generateResult(prompt);
  try {
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(400).json({
      msg: 'something went wrong while getting AI response',
      error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
