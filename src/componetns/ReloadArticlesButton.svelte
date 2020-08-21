<script lang="ts">
  import { fade, blur } from "svelte/transition";

  import type { Article } from "../models/Article";

  export let fetch: () => Promise<void>;
  export let articles: Article[];
</script>

<style>
  .reload-article-button {
    border: #ddd;
    background-color: rgb(61, 190, 207);
    border-radius: 3px;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
    margin-bottom: 20px;
    font-size: 11px;
  }

  .reload-article-button:disabled {
    background-color: #aaa;
  }
</style>

<button
  class="reload-article-button"
  on:click={fetch}
  disabled={articles.length === 0}
  transition:blur={{ duration: 300 }}>
  Reload article list...?
</button>
