<script>import Accordion from '../../holocene/accordion/accordion.svelte';
import { translate } from '../../i18n/translate';
import ScheduleNotes from './schedule-notes.svelte';
export let spec;
export let state;
export let policies;
export let notes = '';
</script>

<ScheduleNotes {notes} />
<Accordion title={translate('schedules.advanced-settings')}>
  <ul class="settings-list">
    <li>
      {translate('schedules.start-time')}
      <span> {spec?.startTime ?? translate('common.none')}</span>
    </li>
    <li>
      {translate('schedules.end-time')}
      <span>{spec?.endTime ?? translate('common.none')} </span>
    </li>
    <li>
      {translate('schedules.jitter')}
      <span>{spec?.jitter ?? translate('common.none')} </span>
    </li>

    <li>
      {translate('schedules.exclusion-calendar')}
      <span> {spec?.excludeCalendar?.[0] ?? translate('common.none')}</span>
    </li>
    {#if state?.limitedActions}
      <li>
        {translate('schedules.remaining-actions')}
        <span>{state?.remainingActions ?? translate('common.none')} </span>
      </li>
    {/if}
    <li>
      {translate('schedules.overlap-policy')}
      <span>{policies?.overlapPolicy ?? translate('common.none')} </span>
    </li>
  </ul>
</Accordion>

<style>
  .settings-list {

    width: 100%
}

    .settings-list li {

    display: flex;

    flex-wrap: wrap;

    align-items: center;

    gap: 0.5rem;

    border-bottom-width: 1px;

    padding-top: 0.5rem;

    padding-bottom: 0.5rem
}

    .settings-list li:last-of-type {

    border-bottom-width: 0px
}

    .settings-list li span {

    background-color: rgb(var(--color-surface-subtle));

    color: rgb(var(--color-text-primary));

    -webkit-user-select: all;

       -moz-user-select: all;

            user-select: all;

    border-radius: 0.125rem;

    padding: 0.25rem;

    line-height: 1rem
}</style>
