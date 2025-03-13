<script>import { twMerge as merge } from 'tailwind-merge';
import Label from '../label.svelte';
import Option from './simple-option.svelte';
let className = null;
export { className as class };
export let id;
export let value;
export let label;
export let arrow = false;
export let name = id;
export let required = false;
export let options = [];
</script>

<div>
  <Label {required} {label} hidden for={id} />
  <select
    class={merge('inline h-10 w-full border px-2 text-base', className)}
    class:remove={arrow}
    {name}
    {id}
    bind:value
    on:change
    {...$$restProps}
  >
    <slot>
      {#each options as option}
        <Option value={option} />
      {/each}
    </slot>
  </select>
</div>

<style>
  select {

    border-color: rgb(var(--color-border-secondary));

    background-color: transparent;

    color: rgb(var(--color-text-primary));

    outline: 2px solid transparent;

    outline-offset: 2px
}

select:focus-visible {

    outline-style: solid;

    outline-color: #1D64D8
}

  .remove {

    height: 2rem;

    -webkit-appearance: none;

       -moz-appearance: none;

            appearance: none;

    padding-top: 0.25rem;

    padding-bottom: 0.25rem;

    padding-left: 0.75rem;

    font-size: 0.875rem;

    line-height: 1.25rem
}</style>
