export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};

export type CharacterPage = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
};

export type CountryData = {
  currency: {
    code: string;
    name: string;
  };
  capital: string;
  population: number;
  name: string;
  region: string;
};

export type CityData = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  population: number;
  is_capital: boolean;
};

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
