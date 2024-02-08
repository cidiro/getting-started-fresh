import Axios from "npm:axios";

export default async function TriviaPage() {
  try {
    const response = await Axios.get(
      "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple",
    );
    const data = response.data.results[0];

    return (
      <main>
        <h1>Trivia</h1>
        <p>{data.question}</p>
        <ul>
          {data.incorrect_answers.map((answer: string) => (
            <li key={answer}>{answer}</li>
          ))}
          <li key={data.correct_answer}>{data.correct_answer}</li>
        </ul>
      </main> 
    );
  } catch (e) {
    return (
      <main>
        <h1>Trivia</h1>
        <p>There was an error loading the trivia questions.</p>
      </main>
    );
  }
}
