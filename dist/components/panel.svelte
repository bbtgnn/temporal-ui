<script>export let error = false;
</script>

<div class="panel surface-primary {$$props.class}" class:error>
  <slot />
</div>

<style>
  .panel {

    border-width: 1px;

    padding: 2rem
}

.panel:where([data-theme="dark"], [data-theme="dark"] *) {

    border-color: rgb(var(--color-border-subtle))
}

    .panel.error {

    border-color: rgb(var(--color-border-danger));

    background-color: rgb(var(--color-surface-danger))
}</style>
