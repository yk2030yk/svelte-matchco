import type { Answer } from "../models/Answer";
import { MatchCoffee } from "../models/MatchCoffee";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export interface IAnswerApi {
  post: (answer: Answer) => Promise<MatchCoffee>;
}

const mock = new MatchCoffee(
  "レジェンドボス（自動販売機限定）",
  `あなたは缶コーヒーで充分！
缶コーヒーはどこでも買えます！
素晴らしいコーヒーライフをお楽しみください！`,
  "images/coffee.png"
);

export class MatchCoffeeApi implements IAnswerApi {
  async post(answer: Answer) {
    await sleep(3000);
    return mock;
  }
}

export const matchCoffeeApi = new MatchCoffeeApi();
