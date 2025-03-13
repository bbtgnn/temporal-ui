<script>import MenuItem from '../menu/menu-item.svelte';
export let selected = false;
export let disabled = false;
export let label;
</script>

<MenuItem
  on:click
  role="option"
  class="break-all"
  aria-selected={selected}
  aria-disabled={disabled}
  {selected}
  {disabled}
>
  <slot slot="leading" name="leading" />
  {label}
  <slot slot="trailing" name="trailing" />
</MenuItem>
