<script>let className = '';
export { className as class };
</script>

<tr on:click|stopPropagation class={className} {...$$restProps}>
  <slot />
</tr>
