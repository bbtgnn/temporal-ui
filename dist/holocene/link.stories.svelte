<script context="module">import { iconNames } from './icon';
import Link from './link.svelte';
export const meta = {
    title: 'Link',
    component: Link,
    args: {
        href: 'https://temporal.io',
        icon: undefined,
        active: false,
        newTab: false,
        light: false,
    },
    argTypes: {
        href: { control: 'text' },
        icon: { control: 'select', options: iconNames },
    },
};
</script>

<script>import { Story, Template } from '@storybook/addon-svelte-csf';
import { twMerge } from 'tailwind-merge';
</script>

<Template let:args>
  <div class={twMerge(args.light && 'bg-space-black')}>
    <Link {...args}>This is a link.</Link>
  </div>
</Template>

<Story name="Default" />

<Story name="With Icon" args={{ icon: 'close' }} />

<Story name="Active" args={{ active: true }} />

<Story name="Light" args={{ light: true }} />
