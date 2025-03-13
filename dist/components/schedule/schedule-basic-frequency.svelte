<script>import { stringifyWithBigInt } from '../../utilities/parse-with-big-int';
export let calendar = undefined;
export let interval = undefined;
</script>

{#key [calendar, interval]}
  <div class="frequency {$$props.class}">
    <code
      ><pre>{stringifyWithBigInt(
          calendar || interval,
          undefined,
          2,
        )}</pre></code
    >
  </div>
{/key}

<style>
  .frequency {
    display: flex;
    height: auto;
    max-height: 8rem;
    flex-direction: column;
    overflow: auto;
    border-width: 1px;
    border-color: rgb(var(--color-border-subtle));
    background-color: rgb(var(--color-surface-primary));
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: Noto Sans Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.875rem;
    line-height: 1.25rem
}</style>
