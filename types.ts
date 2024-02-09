export type TriviaData = {
  response_code: number;
  results: TriviaQuestion[];
};

export type TriviaQuestion = {
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
