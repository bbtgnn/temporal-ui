<script>export let conditional = '=';
</script>

<div class="mt-2 transition-all hover:cursor-pointer">
  <button class="flex items-center" on:click={() => (conditional = '=')}>
    <div class="ml-4 mr-2 p-1 text-primary" class:active={conditional === '='}>
      Is
    </div>
  </button>
  <button class="flex items-center" on:click={() => (conditional = '!=')}>
    <div class="ml-4 mr-2 p-1 text-primary" class:active={conditional === '!='}>
      Is Not
    </div>
  </button>
</div>

<style>
  .active {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}</style>
