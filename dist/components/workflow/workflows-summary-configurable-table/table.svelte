<script>import Loading from '../../../holocene/loading.svelte';
import ProgressBar from '../../../holocene/progress-bar.svelte';
import { loading, updating } from '../../../stores/workflows';
export let pinned = false;
export let columns;
</script>

<table class="workflows-summary-table" class:pinned>
  <thead>
    <slot name="headers" />
    {#if $updating}
      <ProgressBar />
    {/if}
  </thead>
  <tbody>
    {#if !pinned && ($loading || $updating)}
      <tr>
        <td colspan={columns.length + 1}>
          <Loading />
        </td>
      </tr>
    {:else}
      <slot />
    {/if}
  </tbody>
</table>

<style>
  .workflows-summary-table {

    width: auto;

    table-layout: fixed
}

    .workflows-summary-table:not(.pinned) {

    width: 100%;

    table-layout: auto
}</style>
