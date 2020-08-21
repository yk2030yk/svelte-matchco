<script lang="ts">
  import { fade } from "svelte/transition";

  import ArticleCard from "./ArticleCard.svelte";
  import type { Article } from "../models/Article";

  export let articles: Article[];
</script>

<style>
  .article-cards {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
</style>

<div class="article-cards" transition:fade>
  {#each articles as article}
    <ArticleCard {article} />
  {/each}
</div>
