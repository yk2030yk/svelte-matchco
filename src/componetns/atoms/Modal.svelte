<script lang="ts">
  import { fade } from "svelte/transition";
  export let close: () => void | undefined;

  const handleClose = () => {
    if (close) close();
  };
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .modal-content {
    width: 500px;
    border-radius: 3px;
    background-color: #fff;
    padding: 10px;
  }
</style>

<div class="modal-background" on:click={handleClose} transition:fade>
  <div class="modal-content" on:click|stopPropagation>
    <slot />
  </div>
</div>
