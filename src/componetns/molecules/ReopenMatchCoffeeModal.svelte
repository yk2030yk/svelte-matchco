<script lang="ts">
  import { isOpenMatchCoffeeModal, matchCoffee } from "../../store/answer";

  const handleClick = async () => isOpenMatchCoffeeModal.set(true);
</script>

<style>
  p {
    font-size: 12px;
    text-decoration: underline;
    text-align: center;
    color: #636363;
    cursor: pointer;
  }

  p:hover {
    color: #2a6b42;
  }
</style>

{#if $matchCoffee}
  <p on:click={handleClick}>前回のマッチング結果を確認する</p>
{/if}
