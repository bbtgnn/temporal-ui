<script>import { cva } from 'class-variance-authority';
import Icon from '../../holocene/icon/icon.svelte';
export let status;
export let version;
export let label;
const icon = {
    Current: 'heartbeat',
    Ramping: 'trending-up',
    Draining: 'trending-down',
    Drained: 'drained',
    Inactive: 'inactive',
};
const deploymentStatus = cva([
    'flex items-center gap-1 rounded-sm border border-subtle px-1 transition-colors',
], {
    variants: {
        status: {
            Ramping: 'text-cyan-600 dark:text-cyan-400',
            Current: 'text-blue-600 dark:text-blue-400',
            Draining: 'text-yellow-600 dark:text-yellow-200',
            Drained: 'text-secondary',
            Inactive: 'text-secondary',
        },
    },
});
</script>

<p class="flex items-center gap-2">
  <span class="rounded-sm border border-subtle px-1">
    {version}
  </span>
  <span class={deploymentStatus({ status })}>
    <Icon name={icon[status]} />{label}</span
  >
</p>
