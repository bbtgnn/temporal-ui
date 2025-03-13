<script context="module">import IconButton from './icon-button.svelte';
import { iconNames } from './icon';
export const meta = {
    title: 'Icon Button (Deprecated)',
    component: IconButton,
    args: {
        icon: 'close',
        label: 'Click Me',
    },
    argTypes: {
        label: { control: 'text' },
        icon: {
            control: 'select',
            options: iconNames,
        },
    },
};
</script>

<script>import { action } from '@storybook/addon-actions';
import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <IconButton {...args} on:click={action('click')} />
</Template>

<Story name="Default" />
