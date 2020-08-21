<script lang="ts">
  import { fade } from "svelte/transition";
  import ArticleModal from "./ArticleModal.svelte";
  import type { Article } from "../models/Article";

  export let article: Article;

  let isOpen = false;

  const onClose = () => {
    isOpen = false;
  };

  const onOpen = () => {
    isOpen = true;
  };
</script>

<style>
  .article-card {
    padding: 10px;
    border: solid 1px #ddd;
    border-radius: 3px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #fff;
  }

  .article-card:hover {
    border: solid 1px rgb(61, 190, 207);
  }

  .article-card__title {
    padding: 5px 0;
    font-size: 13px;
    font-weight: 600;
    color: #666;
  }

  .article-card__date {
    font-size: 11px;
  }

  .article-card__image {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .article-card__image img {
    max-width: 100%;
    max-height: 200px;
  }
</style>

<div class="article-card" transition:fade on:click={onOpen}>
  <div class="article-card__title">{article.title}</div>
  <div class="article-card__date">{article.date}</div>
  <div class="article-card__image">
    <img src={article.src} alt="article" />
  </div>
</div>

{#if isOpen}
  <ArticleModal {article} {onClose} />
{/if}
