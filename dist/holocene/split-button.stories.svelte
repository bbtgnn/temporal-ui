<script context="module">import { iconNames } from './icon';
import MenuItem from './menu/menu-item.svelte';
import SplitButton from './split-button.svelte';
export const meta = {
    title: 'Split Button',
    component: SplitButton,
    args: {
        label: 'Split Button',
        menuLabel: 'Actions',
        position: 'left',
        icon: undefined,
        disabled: false,
        primaryActionDisabled: false,
        href: 'https://caniuse.com',
    },
    argTypes: {
        position: {
            name: 'Position',
            control: 'radio',
            options: ['left', 'right'],
        },
        label: { name: 'Label', control: 'text' },
        menuLabel: {
            name: 'Menu Label',
            control: 'text',
            table: {
                category: 'Accessibility',
            },
        },
        icon: { name: 'Icon', control: 'select', options: iconNames },
        disabled: { name: 'Disabled', control: 'boolean' },
        primaryActionDisabled: {
            name: 'Primary Action Disabled',
            control: 'boolean',
        },
    },
};
</script>

<script>import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <div class="flex">
    <SplitButton {...args}>
      <MenuItem>View</MenuItem>
      <MenuItem destructive>Delete</MenuItem>
    </SplitButton>
  </div>
</Template>

<Story name="Default" />

<Story name="With Icon" args={{ icon: 'trash' }} />

<Story name="Disabled" args={{ disabled: true }} />
