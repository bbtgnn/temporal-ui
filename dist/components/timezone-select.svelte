<script>var _a, _b, _c, _d;
import { onMount } from 'svelte';
import Icon from '../holocene/icon/icon.svelte';
import Input from '../holocene/input/input.svelte';
import { Menu, MenuButton, MenuContainer, MenuDivider, MenuItem, } from '../holocene/menu';
import ToggleSwitch from '../holocene/toggle-switch.svelte';
import { translate } from '../i18n/translate';
import { relativeTime, timeFormat, TimezoneOptions, Timezones, } from '../stores/time-format';
import { capitalize } from '../utilities/format-camel-case';
import { formatUTCOffset, getLocalTime } from '../utilities/format-date';
export let position = 'right';
const localTime = getLocalTime();
const QuickTimezoneOptions = [
    {
        label: translate('common.utc'),
        value: 'UTC',
    },
    { label: translate('common.local'), value: 'local' },
];
let search = '';
$: filteredOptions = !search
    ? TimezoneOptions
    : TimezoneOptions.filter(({ abbr, value, zones }) => {
        const searchValue = search.trim().toLowerCase();
        return (value.toLowerCase().includes(searchValue) ||
            (abbr === null || abbr === void 0 ? void 0 : abbr.toLowerCase().includes(searchValue)) ||
            (zones === null || zones === void 0 ? void 0 : zones.some((zone) => zone.toLowerCase().includes(searchValue))));
    });
const selectTimezone = (value) => {
    if ($relativeTime && value !== 'local')
        $relativeTime = false;
    $timeFormat = value;
    search = '';
};
const handleRelativeToggle = (e) => {
    const target = e.target;
    if (target.checked && $timeFormat !== 'local') {
        $timeFormat = 'local';
    }
};
$: timezone =
    (_d = (_b = (_a = Timezones[$timeFormat]) === null || _a === void 0 ? void 0 : _a.abbr) !== null && _b !== void 0 ? _b : (_c = Timezones[$timeFormat]) === null || _c === void 0 ? void 0 : _c.label) !== null && _d !== void 0 ? _d : capitalize($timeFormat);
onMount(() => {
    if (String($timeFormat) === 'relative') {
        $timeFormat = 'local';
        $relativeTime = true;
    }
});
</script>

<MenuContainer>
  <MenuButton
    label={translate('common.timezone', { timezone })}
    controls="timezones-menu"
    hasIndicator
    variant="ghost"
    data-testid="timezones-menu-button"
  >
    <Icon slot="leading" name="clock" />
    {timezone}
  </MenuButton>
  <Menu
    id="timezones-menu"
    {position}
    class="w-[10rem] sm:w-[20rem] md:w-[26rem]"
  >
    <Input
      label={translate('common.search')}
      labelHidden
      id="timezone-search"
      noBorder
      bind:value={search}
      icon="search"
      placeholder={translate('common.search')}
    />

    <MenuDivider />

    {#if !search}
      {#each QuickTimezoneOptions as { value, label }}
        <MenuItem
          on:click={() => selectTimezone(value)}
          data-testid={`timezones-${value}`}
          selected={value === $timeFormat}
          description={value === 'local' && localTime}
        >
          {label}
        </MenuItem>
      {/each}

      <div class="mx-2 my-4">
        <ToggleSwitch
          label={translate('common.relative')}
          id="relative-toggle"
          bind:checked={$relativeTime}
          labelPosition="left"
          on:change={handleRelativeToggle}
          data-testid="timezones-relative-toggle"
        />
      </div>

      <MenuDivider />
    {/if}

    {#each filteredOptions as { value, label, offset, abbr }}
      <MenuItem
        selected={value === $timeFormat}
        on:click={() => selectTimezone(value)}
        description={formatUTCOffset(offset, translate('common.utc'))}
      >
        {label} ({abbr})
      </MenuItem>
    {:else}
      <MenuItem disabled>{translate('common.no-results')}</MenuItem>
    {/each}
  </Menu>
</MenuContainer>
