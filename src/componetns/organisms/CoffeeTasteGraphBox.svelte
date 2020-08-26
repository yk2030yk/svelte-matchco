<script lang="ts">
  import Graph from "../molecules/CoffeeTasteGraph.svelte";
</script>

<style>
  p {
    font-size: 14px;
    font-weight: 600;
    color: #686868;
    border-left: solid 3px #18a04a;
    padding-left: 5px;
  }

  .graph-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="graph-box">
  <p>あなたのお好みのコーヒー表</p>
  <div class="graph-wrapper">
    <Graph />
  </div>
</div>
