<script>import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
export let operation;
</script>

<div class="flex flex-col gap-2">
  <p>{translate('batch.details')}</p>
  <div class="batch-operation-detail">
    <p class="batch-operation-key">
      {translate('batch.operation-type')}
    </p>
    <p class="batch-operation-value">{operation.operationType}</p>
  </div>
  <div class="batch-operation-detail">
    <p class="batch-operation-key">
      {translate('batch.identity')}
    </p>
    <p class="batch-operation-value">{operation.identity}</p>
  </div>
  <div class="batch-operation-detail">
    <p class="batch-operation-key">{translate('common.reason')}</p>
    <p class="batch-operation-value">{operation.reason}</p>
  </div>
  <div class="batch-operation-detail">
    <p class="batch-operation-key">{translate('common.start-time')}</p>
    <p class="batch-operation-value">
      {formatDate(operation.startTime, $timeFormat, {
        relative: $relativeTime,
      })}
    </p>
  </div>
  <div class="batch-operation-detail">
    <p class="batch-operation-key">{translate('common.close-time')}</p>
    <p class="batch-operation-value">
      {formatDate(operation.closeTime, $timeFormat, {
        relative: $relativeTime,
      })}
    </p>
  </div>
  <div class="batch-operation-detail">
    <p class="batch-operation-key">
      {translate('batch.total-operations')}
    </p>
    <p class="batch-operation-value">
      {Intl.NumberFormat('en-US').format(operation.totalOperationCount)}
    </p>
  </div>
</div>

<style>
  .batch-operation-detail {

    border-bottom-width: 1px;

    font-size: 0.875rem;

    line-height: 1.25rem
}

.batch-operation-detail:last-of-type {

    border-bottom-width: 0px
}

@media not all and (min-width: 640px) {

    .batch-operation-detail {

        display: flex;

        flex-direction: column
    }
}

@media (min-width: 640px) {

    .batch-operation-detail {

        display: grid;

        grid-template-columns: repeat(10, minmax(0, 1fr))
    }
}

  .batch-operation-key {

    grid-column: span 2 / span 2;

    margin-right: 0.5rem;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 600
}

  .batch-operation-value {

    grid-column: span 8 / span 8
}</style>
