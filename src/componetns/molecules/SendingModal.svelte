<script lang="ts">
  import Spinner from "svelte-spinner";
  import Modal from "../atoms/Modal.svelte";
  import { isSending } from "../../store/answer";
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 12px;
  }
</style>

{#if $isSending}
  <Modal>
    <div class="content">
      <p>マッチするコーヒー豆を探してるよ...！</p>
      <Spinner color="#18a04a" />
    </div>
  </Modal>
{/if}
