<script lang="ts">
  import Question1 from "../molecules/questions/Question1.svelte";
  import Question2 from "../molecules/questions/Question2.svelte";
  import Question3 from "../molecules/questions/Question3.svelte";
  import Question4 from "../molecules/questions/Question4.svelte";
  import Question5 from "../molecules/questions/Question5.svelte";
  import Question6 from "../molecules/questions/Question6.svelte";

  const Questions = [
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6,
  ];
</script>

<style>
  p {
    font-size: 14px;
    font-weight: 600;
    color: #686868;
    border-left: solid 3px #18a04a;
    padding-left: 5px;
  }

  .question-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .question {
    padding-bottom: 15px;
    border-bottom: solid 1px #b7b7b7;
  }
</style>

<div class="question-box">
  <p>好みを答えてみよう！</p>
  <div class="question-wrapper">
    <div class="questions">
      {#each Questions as Question}
        <div class="question">
          <Question />
        </div>
      {/each}
    </div>
  </div>
</div>
