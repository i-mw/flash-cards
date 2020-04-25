import { combineReducers } from "redux";
import decks from "./decks";
import currentQuiz from './currentQuiz'

export default combineReducers({ decks, currentQuiz });
