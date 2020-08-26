<script lang="ts">
  import RadioButtons from "../RadioButtons.svelte";
  import { question2 } from "../../../consts/questions";
  import { answer } from "../../../store/answer";
</script>

<RadioButtons
  title="Q2. 濃いのが好き？"
  items={question2}
  bind:group={$answer.q2} />
