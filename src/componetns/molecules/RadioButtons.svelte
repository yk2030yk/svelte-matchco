<script lang="ts">
  import Radio from "../atoms/Radio.svelte";

  export let group;
  export let title: string;
  export let items: {
    value: string;
    label: string;
  }[];
</script>

<style>
  .radio-buttons {
    display: flex;
    align-items: center;
  }

  p {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: #636363;
  }
</style>

<p>{title}</p>
<div class="radio-buttons">
  {#each items as item}
    <Radio value={item.value} bind:group>{item.label}</Radio>
  {/each}
</div>
