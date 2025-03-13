<script>import { getContext } from 'svelte';
export let title = '';
let position = getContext('drawer-pos');
</script>

<div class="title-wrapper {position}">
  <h2>{title}</h2>
  {#if $$slots['subtitle']}
    <p class="text-xs font-normal">
      <slot name="subtitle" />
    </p>
  {/if}
</div>

<div class="content {position}">
  <slot />
</div>

<style>
  .title-wrapper {

    display: flex;

    flex-direction: column;

    justify-content: center;

    gap: 0.5rem;

    padding-left: 2rem;

    padding-right: 2rem;

    padding-top: 1rem;

    padding-bottom: 1rem
}

    .title-wrapper.bottom {

    align-items: flex-start
}

    .title-wrapper.right {

    align-items: flex-start
}

  .content {

    white-space: normal;

    padding-left: 2rem;

    padding-right: 2rem
}

  .content.right {

    padding-top: 1rem;

    padding-bottom: 1rem
}

  .content.bottom {

    padding-top: 2rem;

    padding-bottom: 2rem
}</style>
