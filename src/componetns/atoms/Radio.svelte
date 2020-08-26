<script lang="ts">
  export let group = undefined;
  export let value = undefined;
</script>

<style>
  label {
    cursor: pointer;
    font-size: 12px;
    width: 150px;
    display: flex;
    align-items: center;
    color: #636363;
    transition: 0.5s ease;
  }

  label.active {
    color: #2a6b42;
    font-weight: 600;
  }

  label input {
    margin-right: 10px;
    display: none;
  }
</style>

<label class:active={group === value}>
  <input type="radio" bind:group {value} />
  <div class="radio" />
  <slot />
</label>
