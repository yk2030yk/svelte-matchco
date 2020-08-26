<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import { question1 } from "../../consts/questions";
  import {
    answer,
    isSendingAnswer,
    isOpenMatchCoffeeModal,
  } from "../../store/answer";
  import { answerApi } from "../../api/AnswerApi";

  const handleClick = async () => {
    isSendingAnswer.set(true);
    await answerApi.post($answer);
    isSendingAnswer.set(false);
    isOpenMatchCoffeeModal.set(true);
  };
</script>

<Button {handleClick} disabled={$isSendingAnswer}>
  マッチするコーヒー豆を探す！
</Button>
