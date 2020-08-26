<script lang="ts">
  import RadioButtons from "../RadioButtons.svelte";
  import { question1 } from "../../../consts/questions";
  import { answer } from "../../../store/answer";
</script>

<RadioButtons
  title="Q1. 苦いのが好き？"
  items={question1}
  bind:group={$answer.q1} />
