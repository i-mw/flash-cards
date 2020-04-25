import { RESET_QUIZ, ADD_ANSWER } from "../actions/currentQuiz";

export default function currentQuiz(state = {}, action) {
  switch (action.type) {
    case RESET_QUIZ:
      return {
        cardNum: 1,
        score: 0,
      };
    case ADD_ANSWER:
      return action.correct
        ? {
            cardNum: state.cardNum + 1,
            score: state.score + 1,
          }
        : {
            cardNum: state.cardNum + 1,
            score: state.score,
          };
    default:
      return state;
  }
}
