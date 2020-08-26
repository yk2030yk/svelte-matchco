<script lang="ts">
  import Spinner from "svelte-spinner";
  import Modal from "../atoms/Modal.svelte";
  import { isOpenMatchCoffeeModal } from "../../store/answer";
  import { MatchCoffee } from "../../models/MatchCoffee";

  const close = () => isOpenMatchCoffeeModal.set(false);

  const matchCoffee = new MatchCoffee(
    "レジェンドボス（自動販売機限定）",
    `あなたは缶コーヒーで充分！
缶コーヒーはどこでも買えます！
素晴らしいコーヒーライフをお楽しみください！`
  );
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

{#if $isOpenMatchCoffeeModal}
  <Modal {close}>
    <div class="content">
      <img src="images/coffee.png" alt="coffeee" />
      <p>マッチするコーヒー豆はこれ！</p>
      <p class="name">「{matchCoffee.name}」</p>
      <p>{matchCoffee.description}</p>
      <p class="notice">※これはモックデータだよ</p>
    </div>
  </Modal>
{/if}
