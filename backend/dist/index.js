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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const ai_1 = require("./ai");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('running up and fine');
    }
    catch (error) {
        res.status(400).json({
            msg: 'something went wrong',
        });
    }
}));
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt } = req.body;
    const result = yield (0, ai_1.generateResult)(prompt);
    try {
        res.status(200).json({
            result,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'something went wrong while getting AI response',
            error,
        });
    }
}));
app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
