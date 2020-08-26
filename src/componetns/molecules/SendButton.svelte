<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import { question1 } from "../../consts/questions";
  import {
    answer,
    matchCoffee,
    isSending,
    isOpenMatchCoffeeModal,
  } from "../../store/answer";
  import { matchCoffeeApi } from "../../api/MatchCoffeeApi";

  const handleClick = async () => {
    isSending.set(true);
    matchCoffee.set(null);

    const latestMatchCoffee = await matchCoffeeApi.post($answer);
    matchCoffee.set(latestMatchCoffee);

    isSending.set(false);
    isOpenMatchCoffeeModal.set(true);
  };
</script>

<Button {handleClick} disabled={$isSending}>
  マッチするコーヒー豆を探す！
</Button>
