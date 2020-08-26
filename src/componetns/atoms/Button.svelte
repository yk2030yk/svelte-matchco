<script lang="ts">
  export let disabled;
  export let handleClick;
</script>

<style>
  button {
    border-radius: 3px;
    font-size: 12px;
    padding: 15px;
    background-color: #18a04a;
    color: #fff;
    cursor: pointer;
    border: none;
    width: 300px;
  }

  button:disabled {
    background-color: #03491c;
    color: #888;
  }
</style>

<button on:click={handleClick} {disabled}>
  <slot />
</button>
