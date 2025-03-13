<script>import DrawerContent from '../../../holocene/drawer-content.svelte';
import Drawer from '../../../holocene/drawer.svelte';
import Icon from '../../../holocene/icon/icon.svelte';
import { translate } from '../../../i18n/translate';
import { TABLE_TYPE, } from '../../../stores/configurable-table-columns';
import OrderableList from './orderable-list.svelte';
export let availableColumns;
export let open;
export let table = TABLE_TYPE.WORKFLOWS;
export let type;
export let title;
const closeCustomizationDrawer = () => {
    open = false;
};
</script>

<Drawer
  {open}
  onClick={closeCustomizationDrawer}
  position="right"
  id="{table}-table-configuration-drawer"
  dark={false}
  closeButtonLabel={translate('workflows.close-configure-headers', { title })}
  class="w-[35vw] min-w-min max-w-fit"
>
  <DrawerContent title={translate('workflows.configure-headers', { title })}>
    <svelte:fragment slot="subtitle">
      Add (<Icon class="inline" name="add" />), re-arrange (<Icon
        class="inline"
        name="chevron-selector-vertical"
      />), and remove (<Icon class="inline" name="hyphen" />), {type} to personalize
      the {title}.
    </svelte:fragment>

    <OrderableList {availableColumns} {table} {type} />
  </DrawerContent>
</Drawer>
