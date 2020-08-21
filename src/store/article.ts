import { writable } from "svelte/store";
import type { Article } from "../models/Article";

export const articles = writable<Article[]>([]);
