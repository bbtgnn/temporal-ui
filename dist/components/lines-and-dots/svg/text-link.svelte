<script>import { goto } from '$app/navigation';
export let point = [0, 0];
export let fontSize = '14px';
export let href;
$: [x, y] = point;
</script>

<text
  role="link"
  tabindex="0"
  on:click={() => goto(href)}
  on:keydown={(e) => {
    if (e.key === 'Enter') {
      goto(href);
    }
  }}
  class="cursor-pointer select-none outline-none"
  {x}
  {y}
  font-size={fontSize}
>
  <slot />
</text>

<style>
  text {
    fill: #93bbfd;
    font-weight: 400;
    opacity: 1;
    stroke: none;
    text-decoration: underline;
  }</style>
