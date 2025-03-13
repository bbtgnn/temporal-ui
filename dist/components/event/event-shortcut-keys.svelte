<script>import Button from '../../holocene/button.svelte';
import DrawerContent from '../../holocene/drawer-content.svelte';
import Drawer from '../../holocene/drawer.svelte';
import Shortcut from '../../holocene/keyboard-shortcut/shortcut.svelte';
import { translate } from '../../i18n/translate';
export let open = false;
export let onOpen;
export let onClose;
</script>

<div class="shortcut-key-button">
  <Button
    size="sm"
    variant="secondary"
    leadingIcon="keyboard"
    on:click={onOpen}
  />
</div>
<Drawer
  {open}
  onClick={onClose}
  closeButtonLabel={translate('common.close-keyboard-shortcuts')}
  class="min-w-min max-w-fit"
>
  <DrawerContent title={translate('common.keyboard-shortcuts')}>
    <div
      class="grid grid-cols-1 gap-8 text-slate-500 md:grid-cols-2 xl:grid-cols-4 dark:text-slate-400"
    >
      <div class="cell">
        {translate('common.next-page')}
        <div class="shortcut">
          <Shortcut
            arrow="right"
            title={translate('common.arrow-key-right')}
          />|<Shortcut title="">L</Shortcut>
        </div>
      </div>
      <div class="cell">
        {translate('common.previous-page')}
        <div class="shortcut">
          <Shortcut
            arrow="left"
            title={translate('common.arrow-key-left')}
          />|<Shortcut title="">H</Shortcut>
        </div>
      </div>
      <div class="cell">
        {translate('common.next-row')}
        <div class="shortcut">
          <Shortcut
            arrow="down"
            title={translate('common.arrow-key-down')}
          />|<Shortcut title="">J</Shortcut>
        </div>
      </div>
      <div class="cell">
        {translate('common.previous-row')}
        <div class="shortcut">
          <Shortcut
            arrow="up"
            title={translate('common.arrow-key-up')}
          />|<Shortcut title="">K</Shortcut>
        </div>
      </div>
    </div>
  </DrawerContent>
</Drawer>

<style>
  .shortcut-key-button {

    position: fixed;

    bottom: 1.25rem;

    left: 6rem;

    z-index: 50
}

  .cell {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 2rem;

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity))
}

  .shortcut {

    display: flex;

    align-items: center;

    gap: 0.5rem
}</style>
