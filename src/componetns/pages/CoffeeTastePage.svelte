<script lang="ts">
  import { fade } from "svelte/transition";
  import Questions from "../organisms/Questions.svelte";
  import AnswerBox from "../organisms/AnswerBox.svelte";
  import CoffeeTasteGraphBox from "../organisms/CoffeeTasteGraphBox.svelte";
</script>

<style>
  .title {
    text-align: center;
    font-size: 17px;
    font-weight: 800;
    margin-bottom: 50px;
    border-bottom: solid 2px #18a04a;
    padding: 10px 0;
    width: 80%;
  }

  .card {
    padding: 50px;
    border: solid 1px #ddd;
    border-radius: 3px;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.25);
  }

  .layout {
    display: flex;
  }

  .layout-right {
    margin-left: 50px;
  }

  .bottom-area {
    margin-top: 50px;
  }

  .logo {
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    background-color: #18a04a;
    color: #fff;
    padding: 7px;
    width: 140px;
    font-family: "Balsamiq Sans", cursive;
    font-family: "Pacifico", cursive;
  }
</style>

<div class="card" transition:fade>
  <div class="logo">Matchco</div>
  <div class="title">- あなたとコーヒーをマッチング！ -</div>
  <div class="layout">
    <div class="layout-left">
      <CoffeeTasteGraphBox />
    </div>
    <div class="layout-right">
      <Questions />
    </div>
  </div>
  <div class="bottom-area">
    <AnswerBox />
  </div>
</div>
