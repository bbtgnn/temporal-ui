<script>import Panel from '../panel.svelte';
import EmptyState from '../../holocene/empty-state.svelte';
import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
export let futureRuns = [];
</script>

<Panel class="w-full">
  <h2 class="mb-4">{translate('schedules.upcoming-runs')}</h2>
  {#each futureRuns.slice(0, 5) as run}
    <div class="row">
      <p>
        {formatDate(run, $timeFormat, {
          relative: $relativeTime,
          relativeLabel: translate('common.from-now'),
        })}
      </p>
    </div>
  {:else}
    <EmptyState
      title={translate('schedules.upcoming-runs-empty-state-title')}
    />
  {/each}
</Panel>

<style>
  .row {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    display: inline-flex;
    height: 2.5rem;
    width: 100%;
    justify-content: flex-start;
    border-bottom-width: 1px;
    border-color: rgb(var(--color-border-subtle));
    padding-top: 0.25rem;
    padding-bottom: 0.25rem
}</style>
