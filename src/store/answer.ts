import { writable } from "svelte/store";
import type { Answer } from "../models/Answer";

export const answer = writable<Answer>({
  q1: "1",
  q2: "1",
  q3: "1",
  q4: "1",
  q5: "1",
  q6: "1",
});

export const isSendingAnswer = writable<boolean>(false);

export const isOpenMatchCoffeeModal = writable<boolean>(false);
