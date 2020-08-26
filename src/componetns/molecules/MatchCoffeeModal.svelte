<script lang="ts">
  import Spinner from "svelte-spinner";
  import Modal from "../atoms/Modal.svelte";
  import { isOpenMatchCoffeeModal, matchCoffee } from "../../store/answer";

  const close = () => isOpenMatchCoffeeModal.set(false);
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 12px;
    padding: 10px;
  }

  img {
    height: 200px;
  }

  .notice {
    color: rgb(148, 37, 37);
  }

  p {
    white-space: pre-wrap;
  }

  .name {
    font-weight: 800;
  }
</style>

{#if $isOpenMatchCoffeeModal && $matchCoffee}
  <Modal {close}>
    <div class="content">
      <img src={$matchCoffee.img} alt="coffeee" />
      <p>マッチするコーヒー豆はこれ！</p>
      <p class="name">「{$matchCoffee.name}」</p>
      <p>{$matchCoffee.description}</p>
      <p class="notice">※これはモックデータだよ</p>
    </div>
  </Modal>
{/if}
