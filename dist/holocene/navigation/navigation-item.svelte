<script>import { page } from '$app/stores';
import { navOpen } from '../../stores/nav-open';
import Icon from '../icon/icon.svelte';
export let link;
export let label;
export let icon = undefined;
export let tooltip = label;
export let external = false;
export let animate = false;
export let disabled = false;
export let isActive = undefined;
$: rel = external ? 'noopener noreferrer' : '';
$: target = external ? '_blank' : '';
$: active = isActive && isActive($page.url.href);
</script>

<div
  role="listitem"
  data-testid={$$props?.['data-testid'] || `${icon}-button`}
  class="relative"
>
  <a
    href={link}
    {rel}
    {target}
    aria-hidden={disabled ? 'true' : 'false'}
    aria-disabled={disabled}
    class:disabled
    tabindex={disabled ? -1 : 0}
    class:active
    class="mb-1 flex items-center whitespace-nowrap rounded-sm p-1 pl-2 text-sm font-medium"
    class:text-disabled={disabled}
  >
    {#if icon}
      <div
        class="flex h-6 w-6 items-center after:absolute after:left-[calc(100%_+_1.5rem)] after:top-0 after:hidden after:h-8 after:items-center after:bg-slate-800 after:p-1 after:px-2 after:text-xs after:text-white after:content-[attr(data-tooltip)] group-data-[nav=closed]:hover:after:flex"
        data-tooltip={tooltip}
      >
        <Icon name={icon} {animate} />
      </div>
    {/if}
    <div
      class="opacity-0 transition-opacity group-data-[nav=open]:opacity-100"
      class:pointer-events-none={!$navOpen}
    >
      {label}
    </div>
  </a>
</div>

<style>
  a:hover,
  a.active {

    --tw-bg-opacity: 1;

    background-color: rgb(255 255 255 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(0 0 0 / var(--tw-text-opacity))
}

.group.surface-primary a:hover,.group.surface-primary 
  a.active {

    --tw-bg-opacity: 1;

    background-color: rgb(0 0 0 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity))
}

.group.surface-primary a:hover:where([data-theme="dark"], [data-theme="dark"] *),.group.surface-primary 
  a.active:where([data-theme="dark"], [data-theme="dark"] *) {

    --tw-bg-opacity: 1;

    background-color: rgb(255 255 255 / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: rgb(0 0 0 / var(--tw-text-opacity))
}

  a.disabled {

    pointer-events: none;

    cursor: not-allowed;

    color: rgb(var(--color-text-subtle))
}</style>
