import { Article } from "../models/Article";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const content = `
Write less code
The most important metric you're not paying attention to

All code is buggy. It stands to reason, therefore, that the more code you have to write the buggier your apps will be.

Writing more code also takes more time, leaving less time for other things like optimisation, nice-to-have features, or being outdoors instead of hunched over a laptop.

In fact it's widely acknowledged that  and  grow quadratically, not linearly, with the size of a codebase. That tracks with our intuitions: a ten-line pull request will get a level of scrutiny rarely applied to a 100-line one. And once a given module becomes too big to fit on a single screen, the cognitive effort required to understand it increases significantly. We compensate by refactoring and adding comments — activities that almost always result in more code. It's a vicious cycle.

Yet while we obsess — rightly! — over performance numbers, bundle size and anything else we can measure, we rarely pay attention to the amount of code we're writing.


Readability is important
I'm certainly not claiming that we should use clever tricks to scrunch our code into the most compact form possible at the expense of readability. Nor am I claiming that reducing lines of code is necessarily a worthwhile goal, since it encourages turning readable code like this...

...into something much harder to parse:

Instead, I'm claiming that we should favour languages and patterns that allow us to naturally write less code.
`;

const src = "/images/sample.png";

export interface IArticleApi {
  fetchAll: () => Promise<Article[]>;
}

export class ArticleApi implements IArticleApi {
  async fetchAll() {
    // wait 3 sec.
    await sleep(3000);

    // return mock.
    return [
      new Article("Write less code Part 1.", "2020/09/03", content, src),
      new Article("Write less code Part 2.", "2020/09/04", content, src),
      new Article("Write less code Part 3.", "2020/09/05", content, src),
      new Article("Write less code Part 4.", "2020/09/06", content, src),
      new Article("Write less code Part 5.", "2020/09/07", content, src),
      new Article("Write less code Part 6.", "2020/09/08", content, src),
      new Article("Write less code Part 7.", "2020/09/08", content, src),
      new Article("Write less code Part 8.", "2020/09/09", content, src),
    ];
  }
}
