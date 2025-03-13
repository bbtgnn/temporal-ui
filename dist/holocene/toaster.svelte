<script>import Link from './link.svelte';
import ToastComponent from './toast.svelte';
export let pop;
export let toasts;
export let closeButtonLabel;
const dismissToast = (event) => {
    pop(event.detail.id);
};
</script>

<div
  class="fixed bottom-5 right-5 z-[99999] flex flex-col items-end gap-2"
  role="log"
>
  {#each $toasts as { message, variant, id, link } (id)}
    <ToastComponent {closeButtonLabel} {variant} {id} on:dismiss={dismissToast}>
      {#if link}
        <Link href={link}>
          {message}
        </Link>
      {:else}
        {message}
      {/if}
    </ToastComponent>
  {/each}
</div>
