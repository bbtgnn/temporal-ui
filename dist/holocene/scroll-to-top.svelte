<script>import Button from './button.svelte';
export let hidden;
export let onScrollToTopClick;
</script>

<div class:invisible={hidden}>
  <Button
    size="xs"
    variant="primary"
    on:click={onScrollToTopClick}
    leadingIcon="arrow-up"
    {...$$restProps}
  />
</div>
