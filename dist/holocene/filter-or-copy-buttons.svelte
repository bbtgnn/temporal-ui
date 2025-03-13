<script>import { twMerge as merge } from 'tailwind-merge';
import Icon from './icon/icon.svelte';
import { copyToClipboard } from '../utilities/copy-to-clipboard';
export let show = false;
export let filterable = true;
export let copyable = true;
export let content;
export let onFilter = () => { };
export let filtered = false;
export let copyIconTitle;
export let copySuccessIconTitle;
export let filterIconTitle;
let className = '';
export { className as class };
const { copy, copied } = copyToClipboard();
</script>

{#if show}
  <div class={merge('copy-or-filter', className)}>
    {#if filterable}
      <button
        on:click|preventDefault|stopPropagation={onFilter}
        class="copy-or-filter-button"
        class:filtered
        id="filter-button"
      >
        {#key filtered}
          <Icon title={filterIconTitle} name="filter" class="m-1" />
        {/key}
      </button>
    {/if}
    {#if copyable}
      <button
        class="copy-or-filter-button"
        on:click|preventDefault|stopPropagation={(e) => copy(e, content)}
        id="copy-button"
      >
        <Icon
          title={$copied ? copySuccessIconTitle : copyIconTitle}
          name={$copied ? 'checkmark' : 'copy'}
          class="m-1"
        />
      </button>
    {/if}
  </div>
{/if}

<style>
  .copy-or-filter {

    position: absolute;

    bottom: 0px;

    right: 0px;

    top: 0px;

    display: inline-flex;

    gap: 0.5rem;

    padding-left: 0.5rem;

    padding-right: 0.5rem
}

  .copy-or-filter-button {

    background-color: rgb(var(--color-surface-primary));

    position: relative;

    top: 50%;

    height: -moz-fit-content;

    height: fit-content;

    --tw-translate-y: -50%;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

    border-radius: 9999px;

    padding: 0.25rem;

    color: rgb(var(--color-text-primary))
}

  .copy-or-filter-button:hover {

    background-color: rgb(var(--color-surface-inverse));

    color: rgb(var(--color-text-inverse))
}

  .filtered {

    background-color: rgb(var(--color-surface-inverse));

    color: rgb(var(--color-text-inverse))
}</style>
