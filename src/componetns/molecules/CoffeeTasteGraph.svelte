<script>
  import { onMount } from "svelte";
  import { scaleLinear } from "d3-scale";

  import { answer } from "../../store/answer";

  let points = [];
  let svg;

  const max = 6;
  const half = max / 2;
  const padding = 30;
  const graphWidth = 50;

  const maxWidth = max * graphWidth + padding * 2;

  const calcX = (x) => padding + x;
  const calcY = (y) => padding + y;
  const calcGraphX = (x) => calcX(graphWidth * x);
  const calcGraphY = (y) => calcY(graphWidth * y);

  const yAxisLine = {
    x1: calcGraphX(0),
    x2: calcGraphX(max),
    y1: calcGraphY(half),
    y2: calcGraphY(half),
  };

  const xAxisLine = {
    x1: calcGraphX(half),
    x2: calcGraphX(half),
    y1: calcGraphY(0),
    y2: calcGraphY(max),
  };

  const yAxixTextY = calcGraphY(half) + 3;
  const yAxisStartText = {
    x: 0,
    y: yAxixTextY,
  };

  const yAxisEndText = {
    x: maxWidth,
    y: yAxixTextY,
  };

  const xAxixTextX = calcGraphX(half) - 11;
  const xAxisStartText = {
    x: xAxixTextX,
    y: 14,
  };

  const xAxisEndText = {
    x: xAxixTextX,
    y: maxWidth - 10,
  };

  $: circle = {
    x: calcGraphX(
      parseInt($answer.q1) + parseInt($answer.q3) + parseInt($answer.q6)
    ),
    y: calcGraphY(
      parseInt($answer.q2) + parseInt($answer.q4) + parseInt($answer.q5)
    ),
  };
</script>

<style>
  svg {
    background-color: rgb(240, 240, 240);
    padding: 15px;
    border-radius: 2px;
    border: solid 1px #686868;
  }

  .y-axis line {
    stroke: #686868;
    stroke-dasharray: 2;
  }

  .x-axis line {
    stroke: #686868;
    stroke-dasharray: 2;
  }

  text {
    font-size: 12px;
    fill: rgb(58, 58, 58);
    font-weight: 600;
  }

  .y-axis .end-text {
    text-anchor: end;
  }

  circle {
    fill: #18a04a;
    transition: 0.7s ease;
  }
</style>

<svg bind:this={svg} width={maxWidth} height={maxWidth}>
  <g class="y-axis">
    <g>
      <line
        x1={yAxisLine.x1}
        x2={yAxisLine.x2}
        y1={yAxisLine.y1}
        y2={yAxisLine.y2} />

      <text class="start-text" x={yAxisStartText.x} y={yAxisStartText.y}>
        苦味
      </text>

      <text class="end-text" x={yAxisEndText.x} y={yAxisEndText.y}>酸味</text>
    </g>
  </g>

  <g class="x-axis">
    <g>
      <line
        x1={xAxisLine.x1}
        x2={xAxisLine.x2}
        y1={xAxisLine.y1}
        y2={xAxisLine.y2} />

      <text class="start-text" x={xAxisStartText.x} y={xAxisStartText.y}>
        コク
      </text>

      <text class="end-text" x={xAxisEndText.x} y={xAxisEndText.y}>甘み</text>
    </g>
  </g>

  <circle cx={circle.x} cy={circle.y} r="8" />
</svg>
