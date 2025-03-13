<script>import Icon from './icon/icon.svelte';
export let title;
export let content = '';
export let error = '';
export let icon = 'comet';
</script>

<div
  class="my-12 flex w-full flex-col items-center justify-start gap-2 text-primary {$$props.class}"
  data-testid={$$props.testId}
>
  <span
    class="surface-secondary flex h-16 w-16 items-center justify-center rounded-full"
  >
    <Icon name={icon} class="block h-full w-full" /></span
  >
  <p class="text-xl font-medium">{title}</p>
  {#if content}
    <p class="text-center">{content}</p>
  {/if}
  {#if error}
    <p class="border border-danger bg-danger p-5 text-center">
      {error}
    </p>
  {/if}
  <slot />
</div>
