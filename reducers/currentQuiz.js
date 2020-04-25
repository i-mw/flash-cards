import { RESET_QUIZ } from "../actions/currentQuiz";

export default function currentQuiz(state = {}, action) {
  switch(action.type) {
    case RESET_QUIZ:
      return {
        cardNum: 0,
        score: 0
      }
    default:
      return state
  }
}