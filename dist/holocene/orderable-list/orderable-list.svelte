<script>import OrderableListItem from './orderable-list-item.svelte';
</script>

<div class="orderable-section">
  <h5>
    <slot name="heading">Items</slot>
  </h5>
  <ol class="orderable-list">
    <slot>
      <OrderableListItem readonly label="No Items" pinned={false} />
    </slot>
  </ol>
</div>

<style>
  .orderable-section {

    display: flex;

    flex-direction: column;

    gap: 0.25rem
}

  .orderable-list {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary));

    border-width: 1px;

    border-color: rgb(var(--color-border-subtle))
}</style>
