<script>import { createEventDispatcher } from 'svelte';
import { twMerge as merge } from 'tailwind-merge';
import Button from './button.svelte';
import { focusTrap } from '../utilities/focus-trap';
import IconButton from './icon-button.svelte';
export let hideConfirm = false;
export let confirmText;
export let cancelText;
export let confirmType = 'primary';
export let confirmDisabled = false;
export let large = false;
export let loading = false;
export let hightlightNav = false;
export let id;
export let open;
export let error = '';
let className = '';
export { className as class };
let modalElement;
$: toggleModal(open, modalElement);
export const toggleModal = (open, modal) => {
    if (open) {
        modal === null || modal === void 0 ? void 0 : modal.showModal();
    }
    else {
        modal === null || modal === void 0 ? void 0 : modal.close();
    }
};
const dispatch = createEventDispatcher();
const handleCancel = () => {
    dispatch('cancelModal');
    open = false;
    error = '';
};
const confirmModal = () => {
    dispatch('confirmModal');
};
const closeModal = () => {
    open = false;
};
const handleClick = (event) => {
    if (event.target === modalElement)
        closeModal();
};
$: {
    if (open && modalElement) {
        modalElement.focus();
    }
}
</script>

<svelte:window on:click={handleClick} />

<dialog
  {id}
  on:close={handleCancel}
  bind:this={modalElement}
  class={merge('body', className)}
  class:large
  class:hightlightNav
  aria-modal="true"
  aria-labelledby="modal-title-{id}"
  data-testid={$$props['data-testid']}
  {...$$restProps}
  use:focusTrap={true}
>
  {#if !loading}
    <IconButton
      label={cancelText}
      icon="close"
      class="float-right m-4"
      on:click={closeModal}
    />
  {/if}
  <div id="modal-title-{id}" class="title">
    <slot name="title" />
  </div>
  <form on:submit|preventDefault={confirmModal} method="dialog">
    <div id="modal-content-{id}" class="content">
      <slot name="content" />
      <p
        class="mt-2 text-sm font-normal text-danger"
        class:hidden={!error}
        role="alert"
      >
        {error}
      </p>
    </div>
    <div class="flex items-center justify-end space-x-2 p-6">
      <Button variant="ghost" disabled={loading} on:click={closeModal}
        >{cancelText}</Button
      >
      {#if !hideConfirm}
        <Button
          variant={confirmType}
          {loading}
          disabled={confirmDisabled || loading}
          data-testid="confirm-modal-button"
          type="submit">{confirmText}</Button
        >
      {/if}
    </div>
  </form>
</dialog>

<style>
  .body {

    background-color: rgb(var(--color-surface-primary));

    z-index: 50;

    width: 100%;

    max-width: 32rem;

    overflow-y: auto;

    border-width: 1px;

    border-color: rgb(var(--color-border-secondary));

    padding: 0px;

    color: rgb(var(--color-text-primary));

    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

@media (min-width: 768px) {

    .body {

        height: -moz-max-content;

        height: max-content
    }
}

  .body::backdrop {

    cursor: pointer
}

  .body.hightlightNav::backdrop {

    left: 60px;

    top: 40px
}

  @media (min-width: 1024px) {

    .large {

        max-width: 48rem
    }
}

  .title {

    background-color: rgb(var(--color-surface-primary));

    color: rgb(var(--color-text-primary));

    padding-left: 2rem;

    padding-right: 2rem;

    padding-bottom: 0px;

    padding-top: 2rem;

    font-size: 1.5rem;

    line-height: 2rem
}

  .content {

    white-space: normal;

    padding: 2rem
}</style>
