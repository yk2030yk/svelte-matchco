<script lang="ts">
  import { fade } from "svelte/transition";
  import Spinner from "svelte-spinner";
</script>

<style>
  .spinner-box-wrapper {
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

  .spinner-box {
    width: 400px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: 2px 2px 11px 5px rgba(0, 0, 0, 0.2);
  }

  .spinner-box p {
    color: rgb(61, 190, 207);
  }
</style>

<div class="spinner-box-wrapper" transition:fade>
  <div class="spinner-box">
    <p>loading articles ...</p>
    <Spinner size={50} color={'rgb(61, 190, 207)'} />
  </div>
</div>
