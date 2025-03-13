<script context="module">import CollapsibleDivider from './collapsible-divider.svelte';
export const meta = {
    title: 'Collapsible Divider',
    component: CollapsibleDivider,
    args: {
        label: 'Expand me',
    },
    argTypes: {
        label: { name: 'Label', control: 'text' },
    },
};
</script>

<script>import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <CollapsibleDivider label={args.label}>
    <p>This is the content</p>
  </CollapsibleDivider>
</Template>

<Story name="Default" />
