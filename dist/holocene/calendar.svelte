<script>import { createEventDispatcher } from 'svelte';
import { getDateRows, weekDays } from '../utilities/calendar';
const dispatch = createEventDispatcher();
export let date;
export let month;
export let year;
export let isAllowed = (_date) => true;
let cells = [];
const onChange = (date) => {
    dispatch('datechange', new Date(year, month, date));
};
const allow = (year, month, date) => {
    if (!date)
        return true;
    return isAllowed(new Date(year, month, date));
};
$: cells = getDateRows(month, year).map((c) => ({
    value: c,
    allowed: allow(year, month, c),
}));
</script>

<div class="container">
  <div class="row">
    {#each weekDays as day}
      <p class="cell">{day.label.slice(0, 2)}</p>
    {/each}
  </div>

  <div class="row">
    {#each cells as { allowed, value }, index (index)}
      {#if value}
        <button
          type="button"
          on:click={allowed && value ? () => onChange(value) : () => {}}
          class="cell"
          class:highlight={allowed && value}
          class:disabled={!allowed}
          class:selected={new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
          ).getTime() === new Date(year, month, value).getTime()}
        >
          {value || ''}
        </button>
      {:else}
        <div class="cell"></div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .container {

      margin-top: 0.5rem;

      height: 224px;

      width: 265px;

      padding-left: 1rem;

      padding-right: 1rem;
}

  .row {

      display: flex;

      width: 240px;

      flex-wrap: wrap;
}

  .cell {

      margin: 0.25rem;

      display: inline-flex;

      height: 24px;

      width: 24px;

      align-items: center;

      justify-content: center;

      border-radius: 0.75rem;

      padding: 0.5rem;

      font-size: 0.875rem;

      line-height: 1.25rem;
}

  .selected {

      background-color: rgb(var(--color-interactive-surface));

      --tw-text-opacity: 1;

      color: rgb(248 250 252 / var(--tw-text-opacity));
}

  .disabled {

      cursor: not-allowed;

      background-color: rgb(var(--color-interactive-surface) / 0.5);

      color: rgb(var(--color-text-primary));
}

  .highlight:not(.disabled):hover {

      --tw-scale-x: 1.25;

      --tw-scale-y: 1.25;

      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

      cursor: pointer;

      background-color: rgb(var(--color-interactive-hover));

      --tw-text-opacity: 1;

      color: rgb(248 250 252 / var(--tw-text-opacity));
}

  .highlight:not(.disabled) {

      transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    }</style>
