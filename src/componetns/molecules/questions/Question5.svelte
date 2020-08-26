<script lang="ts">
  import RadioButtons from "../RadioButtons.svelte";
  import { question5 } from "../../../consts/questions";
  import { answer } from "../../../store/answer";
</script>

<RadioButtons
  title="Q5. フルーティーな味は好き？"
  items={question5}
  bind:group={$answer.q5} />
