<script>import { getContext } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import Badge from '../badge.svelte';
import Icon from '../icon/icon.svelte';
import { isNull } from '../../utilities/is';
import { PILLS } from './pill-container.svelte';
export let id;
export let onClick = () => { };
export let disabled = false;
export let loading = false;
export let active = null;
export let icon = null;
export let count = null;
let className = '';
export { className as class };
const { activePill, registerPill, selectPill } = getContext(PILLS);
registerPill(id);
$: isActive = isNull(active) ? $activePill === id : active;
const handleClick = () => {
    if (disabled)
        return;
    selectPill(id);
    onClick && onClick();
};
</script>

<button
  on:click|stopPropagation={handleClick}
  class={merge(
    'surface-subtle flex items-center justify-center gap-2 rounded-full px-3 py-1 text-sm',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70',
    isActive && 'bg-interactive text-white',
    className,
  )}
  {disabled}
>
  {#if icon}
    <span class:animate-spin={loading}>
      <Icon name={loading ? 'spinner' : icon} />
    </span>
  {/if}
  <slot />
  {#if !isNull(count)}
    <Badge type="count">{count}</Badge>
  {/if}
</button>
