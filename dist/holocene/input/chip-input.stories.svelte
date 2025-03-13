<script context="module">import { userEvent, within } from '@storybook/test';
import ChipInput from './chip-input.svelte';
import { isEmail } from '../../utilities/is-email';
export const meta = {
    title: 'Chip Input',
    component: ChipInput,
    args: {
        label: 'Chip Input',
        placeholder: 'Placeholder...',
        disabled: false,
        required: false,
        external: false,
        hintText: 'This is the hint text...',
        removeChipButtonLabel: 'Remove',
        labelHidden: false,
        validator: isEmail,
        chips: ['tobias@temporal.io'],
    },
    argTypes: {
        label: { name: 'Label', control: 'text' },
        placeholder: { name: 'Placeholder', control: 'text' },
        hintText: { name: 'Hint Text', control: 'text' },
        disabled: { name: 'Disabled', control: 'boolean' },
        required: { name: 'Required', control: 'boolean' },
        external: { name: 'External Chips', control: 'boolean' },
        labelHidden: { name: 'Label Hidden', control: 'boolean' },
        chips: { name: 'Chips', table: { disable: true } },
        validator: { table: { disable: true } },
        removeChipButtonLabel: {
            name: 'Aria label for remove button',
            control: 'text',
            table: { category: 'Accessibility' },
        },
    },
};
</script>

<script>import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args let:context>
  <ChipInput {...args} id={context.id} />
</Template>

<Story name="Default" />

<Story name="External Chips" args={{ external: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Required" args={{ required: true }} />

<Story name="Label Hidden" args={{ labelHidden: true }} />

<Story name="Empty" args={{ chips: [] }} />

<Story
  name="Partial Input"
  args={{ chips: [] }}
  play={async ({ canvasElement, id }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(id);
    await userEvent.type(input, 'bonbon');
  }}
/>

<Story
  name="Partial Input with Chips"
  args={{ chips: ['finn@temporal.io'] }}
  play={async ({ canvasElement, id }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(id);
    await userEvent.type(input, 'bonbon');
  }}
/>

<Story
  name="Invalid"
  play={async ({ canvasElement, id }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(id);
    await userEvent.type(input, 'bonbon');
    await userEvent.keyboard('{enter}');
  }}
/>
