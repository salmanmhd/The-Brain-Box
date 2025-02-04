"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResult = void 0;
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const KEY = process.env.API_KEY || '';
const genAI = new generative_ai_1.GoogleGenerativeAI(KEY);
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
const generateResult = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model.generateContent(prompt);
    return result.response.text();
});
exports.generateResult = generateResult;
