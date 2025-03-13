<script>import Button from './button.svelte';
export let hidden;
export let onScrollToBottomClick;
</script>

<div class="jump-to-bottom relative" class:hidden>
  <Button
    size="xs"
    variant="primary"
    on:click={onScrollToBottomClick}
    leadingIcon="arrow-down"
    {...$$restProps}
  />
</div>

<style>
  .hidden {
    visibility: hidden
}</style>
