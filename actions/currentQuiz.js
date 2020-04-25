export const RESET_QUIZ = 'RESET_QUIZ'
export const ADD_ANSWER = 'ADD_ANSWER'

export function resetQuiz() {
  return {
    type: RESET_QUIZ
  }
}

export function addAnswer(correct) {
  return {
    type: ADD_ANSWER,
    correct
  }
}