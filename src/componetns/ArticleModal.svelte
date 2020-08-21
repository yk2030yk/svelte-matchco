<script lang="ts">
  import type { Article } from "../models/Article";
  import { fade } from "svelte/transition";

  export let article: Article;
  export let onClose: () => void;
</script>

<style>
  .article-modal-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .article-modal {
    padding: 10px;
    border: solid 1px #ddd;
    border-radius: 3px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: #fff;
    width: 800px;
  }

  .article-modal__title {
    padding: 5px 0;
    font-size: 13px;
    font-weight: 600;
    color: #666;
  }

  .article-modal__date {
    font-size: 11px;
  }

  .article-modal__image {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .article-modal__image img {
    max-width: 100%;
    max-height: 200px;
  }

  .article-modal__content {
    height: 300px;
    overflow: scroll;
    font-size: 12px;
    color: #999;
    white-space: break-spaces;
  }
</style>

<div class="article-modal-wrapper" transition:fade on:click={onClose}>
  <div class="article-modal" on:click|stopPropagation>
    <div class="article-modal__title">{article.title}</div>
    <div class="article-modal__date">{article.date}</div>
    <div class="article-modal__image">
      <img src={article.src} alt="dancing" />
    </div>
    <div class="article-modal__content">{article.content}</div>
  </div>
</div>
