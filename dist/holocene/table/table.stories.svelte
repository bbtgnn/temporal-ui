<script context="module">import TableHeaderRow from './table-header-row.svelte';
import TableRow from './table-row.svelte';
import Table from './table.svelte';
export const meta = {
    title: 'Table',
    component: Table,
    args: {
        variant: 'simple',
        columns: 3,
        rows: 3,
    },
    argTypes: {
        variant: { control: 'radio', options: ['fancy', 'simple'] },
        columns: { control: 'number' },
        rows: { control: 'number' },
    },
};
</script>

<script>import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args let:context>
  <Table
    class="w-full"
    variant={args.variant}
    updating={args.updating}
    data-testid={context.id}
  >
    <TableHeaderRow slot="headers">
      {#each Array(args.columns) as _, index}
        <th>Heading {index + 1}</th>
      {/each}
    </TableHeaderRow>
    {#each Array(args.rows) as _}
      <TableRow>
        {#each Array(args.columns) as _, colIdx}
          <td>Cell {colIdx + 1}</td>
        {/each}
      </TableRow>
    {/each}
  </Table>
</Template>

<Story name="Simple" />

<Story name="Fancy" args={{ variant: 'fancy' }} />

<Story name="Simple, Updating" args={{ updating: true }} />

<Story name="Fancy, Updating" args={{ updating: true, variant: 'fancy' }} />
