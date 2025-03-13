<script>import { twMerge as merge } from 'tailwind-merge';
import { goto } from '$app/navigation';
import Icon from './icon/icon.svelte';
let className = '';
export { className as class };
export let href;
export let active = false;
export let interactive = false;
export let newTab = false;
export let icon = null;
export let text = '';
export let light = false;
const onLinkClick = (e) => {
    // Skip if middle mouse click or new tab
    if (e.button === 1 || newTab || e.metaKey)
        return;
    e.preventDefault();
    goto(href);
};
</script>

<a
  {href}
  target={newTab ? '_blank' : null}
  rel={newTab ? 'noreferrer' : null}
  class={merge('link', icon ? 'inline-flex' : 'inline', className)}
  class:active
  class:interactive
  class:light
  on:click|stopPropagation={onLinkClick}
  tabindex={href ? null : 0}
  {...$$restProps}
>
  {#if icon}
    <Icon class="mt-0.5" name={icon} />
  {/if}
  {#if text}
    {text}
  {/if}
  <slot />
</a>

<style>
  .link {

    max-width: -moz-fit-content;

    max-width: fit-content;

    cursor: pointer;

    align-items: center;

    gap: 0.5rem;

    color: rgb(var(--color-text-primary));

    text-decoration-line: underline;

    text-underline-offset: 2px
}

.link:hover {

    color: rgb(var(--color-text-brand))
}

.link:focus-visible {

    color: rgb(var(--color-text-brand));

    outline: 2px solid transparent;

    outline-offset: 2px;

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7)
}

    .link.active {

    color: rgb(var(--color-text-brand))
}

    .link.interactive {

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity))
}

    .link.interactive:hover {

    --tw-text-opacity: 1;

    color: rgb(198 216 255 / var(--tw-text-opacity))
}

    .link.interactive:focus-visible {

    --tw-text-opacity: 1;

    color: rgb(198 216 255 / var(--tw-text-opacity))
}

    .link.light {

    --tw-text-opacity: 1;

    color: rgb(248 250 252 / var(--tw-text-opacity))
}

    .link.light:hover {

    --tw-text-opacity: 1;

    color: rgb(128 152 249 / var(--tw-text-opacity))
}

  .link[role='button'] {

    text-decoration-line: none
}</style>
