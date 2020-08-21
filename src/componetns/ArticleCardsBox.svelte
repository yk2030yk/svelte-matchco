<script lang="ts">
  import { onMount } from "svelte";
  import { fade, blur } from "svelte/transition";

  import Spinner from "svelte-spinner";
  import ArticlesLoading from "./ArticlesLoading.svelte";
  import ReloadArticlesButton from "./ReloadArticlesButton.svelte";
  import ArticleCards from "./ArticleCards.svelte";

  import { articles } from "../store/article";
  import { ArticleApi } from "../api/ArticleApi";

  const fetch = async () => {
    // reset store data.
    articles.set([]);

    // get articles from api.
    const api = new ArticleApi();
    articles.set(await api.fetchAll());
  };

  // fetch articles.
  onMount(fetch);
</script>

<style>
  .article-cards-box {
    width: 800px;
  }

  .article-cards-title {
    width: 100%;
    font-size: 20px;
    padding: 15px 20px;
    font-weight: 800;
    border-left: 4px solid rgb(61, 190, 207);
    margin-bottom: 20px;
    color: #808080;
    background-color: #fff;
  }
</style>

<div class="article-cards-box">
  <div class="article-cards-title">Article List</div>

  <ReloadArticlesButton {fetch} articles={$articles} />

  {#if $articles.length === 0}
    <ArticlesLoading />
  {:else}
    <ArticleCards articles={$articles} />
  {/if}
</div>
