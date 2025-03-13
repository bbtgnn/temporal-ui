<script context="module">export const meta = {
    title: 'File Input',
    component: FileInput,
    args: {
        id: 'file-input',
        accept: '.json',
    },
    argTypes: {
        id: { control: 'text' },
        accept: { control: 'text' },
    },
};
</script>

<script>import { Story, Template } from '@storybook/addon-svelte-csf';
import FileInput from './file-input.svelte';
</script>

<Template let:args>
  <FileInput {...args} />
</Template>

<Story name="Default" />
