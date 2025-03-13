<script>import { v4 } from 'uuid';
import Icon from '../icon/icon.svelte';
export let id = v4();
export let open = false;
export let onToggle = undefined;
export let icon = undefined;
const toggleAccordion = async () => {
    if (onToggle) {
        await onToggle();
        open = !open;
    }
    else {
        open = !open;
    }
};
</script>

<div class="w-full {$$restProps.class}">
  <button
    id="{id}-trigger"
    aria-expanded={open}
    aria-controls="{id}-content"
    class="focus-visible:outline-interactive w-full cursor-pointer hover:bg-interactive-secondary-hover"
    type="button"
    on:click={toggleAccordion}
  >
    <div class="flex w-full flex-row items-center justify-between gap-2 pr-4">
      <slot name="title" />
      <slot name="description" />
      <div class="flex items-center gap-4">
        <slot name="action" />
        <Icon name={icon ? icon : open ? 'arrow-down' : 'arrow-right'} />
      </div>
    </div>
  </button>
  <div
    id="{id}-content"
    aria-labelledby="{id}-trigger"
    class="block w-full bg-primary p-2"
    class:hidden={!open}
  >
    <slot {open} />
  </div>
</div>
