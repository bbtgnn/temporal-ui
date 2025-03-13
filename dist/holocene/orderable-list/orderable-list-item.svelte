<script>import { createEventDispatcher } from 'svelte';
import IconButton from '../icon-button.svelte';
const dispatch = createEventDispatcher();
let isStatic = false;
export { isStatic as static };
export let label;
export let maxPinnedItems = undefined;
export let pinned = false;
export let readonly = false;
export let index = 0;
export let totalItems = 0;
export let moveUpButtonLabel = '';
export let moveDownButtonLabel = '';
export let pinButtonLabel = '';
export let unpinButtonLabel = '';
export let addButtonLabel = '';
export let removeButtonLabel = '';
const handleDragStart = (event, index) => {
    if (isStatic || readonly)
        return;
    event.dataTransfer.setData('text/plain', index.toString());
    event.dataTransfer.dropEffect = 'move';
};
const handleDrop = (event, to) => {
    event.currentTarget.classList.remove('dragging-over');
    const from = parseInt(event.dataTransfer.getData('text/plain'));
    dispatch('moveItem', { from, to });
};
const handleDragEnter = (event) => event.currentTarget.classList.add('dragging-over');
const handleDragLeave = (event) => event.currentTarget.classList.remove('dragging-over');
</script>

<li
  draggable={!isStatic && !readonly}
  class="orderable-item group"
  class:readonly
  on:dragstart={(e) => handleDragStart(e, index)}
  on:drop|preventDefault={(e) => handleDrop(e, index)}
  on:dragenter|preventDefault|stopPropagation={handleDragEnter}
  on:dragleave|preventDefault|stopPropagation={handleDragLeave}
  on:dragover|preventDefault|stopPropagation
  data-testid="orderable-list-item-{label}"
>
  <div class="flex flex-row items-center gap-2">
    {#if !isStatic && !readonly}
      <div class="flex items-center">
        <IconButton
          disabled={index === 0}
          icon="chevron-up"
          data-testid="orderable-list-item-{label}-move-up-button"
          label={moveUpButtonLabel}
          on:click={() => dispatch('moveItem', { from: index, to: index - 1 })}
        />
        <IconButton
          disabled={index === totalItems - 1}
          icon="chevron-down"
          data-testid="orderable-list-item-{label}-move-down-button"
          label={moveDownButtonLabel}
          on:click={() => dispatch('moveItem', { from: index, to: index + 1 })}
        />
      </div>
    {/if}
    {label}
    {#if !isStatic && !readonly && index <= maxPinnedItems - 1}
      {#if pinned}
        <IconButton
          icon="pin-filled"
          data-testid="orderable-list-item-{label}-unpin-button"
          label={unpinButtonLabel}
          on:click={() => dispatch('pinItem')}
        />
      {:else}
        <IconButton
          icon="pin"
          data-testid="orderable-list-item-{label}-pin-button"
          label={pinButtonLabel}
          on:click={() => dispatch('pinItem')}
        />
      {/if}
    {/if}
  </div>
  {#if !readonly}
    {#if isStatic}
      <IconButton
        icon="add"
        data-testid="orderable-list-item-{label}-add-button"
        label={addButtonLabel}
        on:click={() => dispatch('addItem')}
      />
    {:else}
      <IconButton
        icon="hyphen"
        data-testid="orderable-list-item-{label}-remove-button"
        label={removeButtonLabel}
        on:click={() => dispatch('removeItem')}
      />
    {/if}
  {/if}
</li>

<style>
  .orderable-item {

    display: flex;

    -webkit-user-select: none;

       -moz-user-select: none;

            user-select: none;

    list-style-type: none;

    flex-direction: row;

    align-items: center;

    justify-content: space-between;

    border-bottom-width: 1px;

    border-color: rgb(var(--color-border-subtle));

    padding: 0.5rem;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 500
}

.orderable-item:last-of-type {

    border-bottom-width: 0px
}

  .orderable-item[draggable='true'] {

    cursor: move
}

  .orderable-item.readonly {

    background-color: rgb(var(--color-surface-secondary));

    color: rgb(var(--color-text-primary))
}

  :global(.orderable-item.dragging-over:not(.locked)) {

    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));

    --tw-gradient-from: #DBE8FE var(--tw-gradient-from-position);

    --tw-gradient-to: rgb(219 232 254 / 0) var(--tw-gradient-to-position);

    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);

    --tw-gradient-to: #EFE9FE var(--tw-gradient-to-position)
}</style>
