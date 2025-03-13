<script context="module">import { Story, Template } from '@storybook/addon-svelte-csf';
import CompatibilityBadge from './compatibility-badge.svelte';
export const meta = {
    title: 'Compatibility Badge',
    component: CompatibilityBadge,
    args: {
        defaultVersion: true,
        active: false,
        buildId: '1234567890',
    },
};
</script>

<Template let:args>
  <CompatibilityBadge {...args} />
</Template>

<Story name="Build ID" args={{ defaultVersion: false }} />

<Story name="Active" args={{ defaultVersion: true, active: true }} />

<Story name="Default Worker" let:args>
  <CompatibilityBadge {...args}>
    <span slot="default-worker">Default</span>
  </CompatibilityBadge>
</Story>

<Story name="Overall Default Worker" let:args>
  <CompatibilityBadge {...args}>
    <span slot="overall-default-worker">Overall</span>
  </CompatibilityBadge>
</Story>

<Story name="Default Worker (Active)" args={{ active: true }} let:args>
  <CompatibilityBadge {...args}>
    <span slot="default-worker">Default</span>
  </CompatibilityBadge>
</Story>

<Story name="Overall Default Worker (Active)" args={{ active: true }} let:args>
  <CompatibilityBadge {...args}>
    <span slot="overall-default-worker">Overall</span>
  </CompatibilityBadge>
</Story>
