<script lang="ts">
  import RadioButtons from "../RadioButtons.svelte";
  import { question3 } from "../../../consts/questions";
  import { answer } from "../../../store/answer";
</script>

<RadioButtons
  title="Q3. お砂糖は入れる？"
  items={question3}
  bind:group={$answer.q3} />
