import type { Answer } from "../models/Answer";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export interface IAnswerApi {
  post: (answer: Answer) => Promise<void>;
}

export class AnswerApi implements IAnswerApi {
  async post(answer: Answer) {
    console.log(answer);
    await sleep(3000);
  }
}

export const answerApi = new AnswerApi();
