// import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { TriviaData } from "../types.ts";


export const handler: Handlers<TriviaData> = {
  async GET(_req: Request, ctx: FreshContext<unknown, TriviaData>) {
    const token = "4d3ad268ac0ed42a7c84f4babdcf9f2f2cc565e6ed48d37158a48f444a80a801"
    const url = "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple&token=";
    console.log(url + token);

    const response = await fetch(url + token);
    if (response.status !== 200) {
      console.error(
        "Failed to fetch trivia questions.",
        response.status,
        response.statusText
      );
      throw new Error("Failed to fetch trivia questions.");
    }
    const data = await response.json();
    console.log(data);
    return ctx.render({ ...data });
  }
};


const TriviaPage = (props: PageProps<TriviaData>) => {
  const { data } = props;
  const question = data.results[0];
  return (
    <main>
      <h1>Trivia</h1>
      <h2>{question.category}</h2>
      <p>{question.question}</p>
      <ul>
        <li>{question.correct_answer}</li>
        {question.incorrect_answers.map((answer: string) => (
          <li>{answer}</li>
        ))}
      </ul>
    </main>
  );
}

export default TriviaPage;
