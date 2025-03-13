<script>var _a;
import { writable } from 'svelte/store';
import { page } from '$app/stores';
import Checkbox from '../../holocene/checkbox.svelte';
import Icon from '../../holocene/icon/icon.svelte';
import MenuButton from '../../holocene/menu/menu-button.svelte';
import MenuContainer from '../../holocene/menu/menu-container.svelte';
import MenuDivider from '../../holocene/menu/menu-divider.svelte';
import MenuItem from '../../holocene/menu/menu-item.svelte';
import Menu from '../../holocene/menu/menu.svelte';
import { translate } from '../../i18n/translate';
import { allEventTypeOptions, compactEventTypeOptions, } from '../../models/event-history/get-event-categorization';
import { clearActiveGroups } from '../../stores/active-events';
import { eventTypeFilter } from '../../stores/filters';
import { temporalVersion } from '../../stores/versions';
import { nexusEnabled } from '../../utilities/nexus-enabled';
import { isVersionNewer } from '../../utilities/version-check';
import { CategoryIcon } from './constants';
export let compact = false;
let open = writable(false);
$: defaultOptions = compact
    ? compactEventTypeOptions.map((o) => o.value)
    : allEventTypeOptions.map((o) => o.value);
$: options = [
    ...(compact ? compactEventTypeOptions : allEventTypeOptions).map((o) => ({
        ...o,
        label: translate(o.label),
        icon: CategoryIcon[o.value],
        description: translate(o.description),
    })),
];
$: {
    if (isVersionNewer('1.21.0', $temporalVersion)) {
        options = options.filter(({ value }) => value !== 'update');
    }
}
$: {
    if (!nexusEnabled((_a = $page.data.systemInfo) === null || _a === void 0 ? void 0 : _a.capabilities)) {
        options = options.filter(({ value }) => value !== 'nexus');
    }
}
const onOptionClick = ({ value }) => {
    clearActiveGroups();
    $eventTypeFilter = $eventTypeFilter.some((type) => type === value)
        ? $eventTypeFilter.filter((type) => type !== value)
        : [...$eventTypeFilter, value];
};
$: filterActive = $eventTypeFilter.length < defaultOptions.length;
</script>

<MenuContainer {open}>
  <MenuButton controls="status-menu">
    <div
      slot="leading"
      class="flex h-6 w-6 flex-col items-center justify-center rounded-full transition-colors duration-200"
      class:bg-interactive={filterActive}
    >
      <Icon name="filter" class={filterActive && 'pt-0.5 text-white'} />
    </div>
    {translate('events.event-types')}
  </MenuButton>
  <Menu
    id="event-type-menu"
    keepOpen
    position="top-right"
    class="w-[240px] md:w-[400px]"
  >
    <MenuItem
      data-testid={translate('common.all')}
      on:click={() => {
        $eventTypeFilter = defaultOptions;
      }}
    >
      <Checkbox
        on:change={() => {
          $eventTypeFilter = defaultOptions;
        }}
        slot="leading"
        checked={$eventTypeFilter.length === defaultOptions.length}
        label={translate('common.all')}
        labelHidden
      />
      {translate('common.all')}
    </MenuItem>
    <MenuItem
      data-testid={translate('common.none')}
      on:click={() => {
        $eventTypeFilter = [];
      }}
    >
      <Checkbox
        on:change={() => {
          $eventTypeFilter = [];
        }}
        slot="leading"
        checked={!$eventTypeFilter.length}
        label={translate('common.none')}
        labelHidden
      />
      {translate('common.none')}
    </MenuItem>
    <MenuDivider />
    {#each options as option}
      <MenuItem
        data-testid={option.label}
        description={option.description}
        on:click={() => {
          onOptionClick(option);
        }}
        class="items-start"
      >
        <Checkbox
          on:click={() => onOptionClick(option)}
          slot="leading"
          checked={$eventTypeFilter.some((type) => type === option.value)}
          label={option.label}
          labelHidden
        />
        {option.label}
      </MenuItem>
    {/each}
  </Menu>
</MenuContainer>
