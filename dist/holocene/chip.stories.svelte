<script context="module">import Chip from './chip.svelte';
export const meta = {
    title: 'Chip',
    component: Chip,
    args: {
        intent: 'default',
        button: false,
        removeButtonLabel: 'Remove',
    },
    argTypes: {
        intent: { control: 'select', options: ['warning', 'default'] },
        button: { control: 'boolean' },
        removeButtonLabel: {
            name: 'Aria label for remove button',
            control: 'text',
            table: {
                category: 'Accessibility',
            },
        },
    },
};
</script>

<script>import { action } from '@storybook/addon-actions';
import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <Chip {...args} on:remove={action('remove')} on:click={action('click')}>
    ross.edfort@temporal.io
  </Chip>
</Template>

<Story name="Default" />

<Story name="Warning" args={{ intent: 'warning' }} />

<Story name="Default (as Button)" args={{ button: true }} />

<Story name="Warning (as Button)" args={{ intent: 'warning', button: true }} />
