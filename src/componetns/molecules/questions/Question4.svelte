<script lang="ts">
  import RadioButtons from "../RadioButtons.svelte";
  import { question4 } from "../../../consts/questions";
  import { answer } from "../../../store/answer";
</script>

<RadioButtons
  title="Q4. 酸っぱいのは好き？"
  items={question4}
  bind:group={$answer.q4} />
