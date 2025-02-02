import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
console.log(PORT);
const app = express();
// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('running up and fine');
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
