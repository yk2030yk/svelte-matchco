<script lang="ts">
  import RadioButtons from "../RadioButtons.svelte";
  import { question6 } from "../../../consts/questions";
  import { answer } from "../../../store/answer";
</script>

<RadioButtons
  title="Q6. アイスで飲む？"
  items={question6}
  bind:group={$answer.q6} />
