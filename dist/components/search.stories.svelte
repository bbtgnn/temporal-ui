<script context="module">import { Story, Template } from '@storybook/addon-svelte-csf';
import Search from './search.svelte';
export const meta = {
    title: 'Search',
    component: Search,
};
</script>

<Template let:args>
  <Search {...args} />
</Template>

<Story name="Default" />
