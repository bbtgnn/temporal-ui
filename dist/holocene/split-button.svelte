<script>import Button from './button.svelte';
import Icon from './icon/icon.svelte';
import { Menu, MenuButton, MenuContainer } from './menu';
export let label;
export let menuLabel;
export let icon = undefined;
export let id;
export let disabled = false;
export let position = 'left';
export let primaryActionDisabled = false;
export let href = undefined;
export let menuClass = undefined;
</script>

<MenuContainer class={$$props.class}>
  <div class="button-group flex h-10 cursor-pointer flex-row gap-[1px]">
    <Button
      disabled={disabled || primaryActionDisabled}
      id="{id}-primary-button"
      {href}
      on:click
    >
      {#if icon}
        <Icon name={icon} />
      {/if}
      {label}
    </Button>
    <MenuButton
      class="max-w-fit grow-0 px-3"
      id="{id}-menu-button"
      label={menuLabel}
      controls="{id}-menu"
      variant="primary"
      {disabled}
      hasIndicator
    />
  </div>

  <Menu id="{id}-menu" {position} class={menuClass}>
    <slot />
  </Menu>
</MenuContainer>
