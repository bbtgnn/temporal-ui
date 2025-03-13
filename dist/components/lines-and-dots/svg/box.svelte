<script>export let point;
export let width;
export let height;
export let classification = undefined;
export let fill = '#141414';
$: [x, y] = point;
</script>

<rect {x} {y} {width} {height} class={classification} {fill}>
  <slot />
</rect>

<style>
  .Failed,
  .Terminated {
    stroke: #ff4518;
    stroke-width: 3;
  }

  .TimedOut {
    stroke: #f88f49;
    stroke-width: 3;
  }

  .Canceled {
    stroke: #fff3c6;
    stroke-width: 3;
  }

  .active {
    fill: #1e293b;
  }

  .pending,
  .retry {
    stroke: #a78bfa;
    stroke-width: 3;
    stroke-dasharray: 3;
  }

  .retry {
    stroke: #ff4518;
  }</style>
