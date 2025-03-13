<script>import { page } from '$app/stores';
import Accordion from '../../holocene/accordion/accordion.svelte';
import Badge from '../../holocene/badge.svelte';
import CodeBlock from '../../holocene/code-block.svelte';
import Icon from '../../holocene/icon/icon.svelte';
import Link from '../../holocene/link.svelte';
import Tooltip from '../../holocene/tooltip.svelte';
import { translate } from '../../i18n/translate';
import { relativeTime, timeFormat } from '../../stores/time-format';
import { workflowRun } from '../../stores/workflow-run';
import { formatDate } from '../../utilities/format-date';
import { formatAttemptsLeft, formatRetryExpiration, } from '../../utilities/format-event-attributes';
import { formatDuration, getDuration } from '../../utilities/format-time';
import { stringifyWithBigInt } from '../../utilities/parse-with-big-int';
import { routeForPendingActivities } from '../../utilities/route-for';
import { toTimeDifference } from '../../utilities/to-time-difference';
$: ({ workflow } = $workflowRun);
$: pendingActivities = workflow === null || workflow === void 0 ? void 0 : workflow.pendingActivities;
$: href = routeForPendingActivities({
    namespace: $page.params.namespace,
    workflow: $page.params.workflow,
    run: $page.params.run,
});
$: canceled = ['Terminated', 'TimedOut', 'Canceled'].includes(workflow === null || workflow === void 0 ? void 0 : workflow.status);
</script>

{#if pendingActivities.length}
  <section>
    <Accordion
      title={translate('workflows.pending-activities')}
      data-testid="pending-activities"
    >
      <div slot="summary" class="flex items-center gap-2">
        <Badge type="count">{pendingActivities.length}</Badge>
        {#if canceled}
          <Tooltip
            bottom
            text={translate('workflows.pending-activities-canceled')}
          >
            <Badge type="warning" class="py-0"><Icon name="canceled" /></Badge>
          </Tooltip>
        {/if}
      </div>
      <div>
        {#each pendingActivities as { id, ...pendingActivity } (id)}
          {@const failed = pendingActivity.attempt > 1}
          <div class="pending-activity-row-container">
            <h3 class="w-full self-start text-sm text-secondary">
              {pendingActivity.activityId}
            </h3>
            <div class="pending-activity-row">
              <div class="pending-activity-summary">
                <div class="pending-activity-inner-row">
                  <div class="pending-activity-detail">
                    <h4 class="pending-activity-detail-header">
                      {translate('workflows.activity-type')}
                    </h4>
                    <Badge type={failed ? 'danger' : undefined}>
                      {pendingActivity.activityType}
                    </Badge>
                  </div>
                  <div class="pending-activity-detail">
                    <h4 class="pending-activity-detail-header">
                      {translate('workflows.last-heartbeat')}
                    </h4>
                    {formatDate(
                      pendingActivity.lastHeartbeatTime,
                      $timeFormat,
                      {
                        relative: $relativeTime,
                      },
                    )}
                  </div>
                  <div class="pending-activity-detail">
                    <h4 class="pending-activity-detail-header">
                      {translate('workflows.attempt')}
                    </h4>
                    <Badge type={failed ? 'danger' : undefined}>
                      {#if failed}
                        <Icon name="retry" />
                      {/if}
                      {pendingActivity.attempt}
                    </Badge>
                  </div>
                  <div class="pending-activity-detail">
                    <h4 class="pending-activity-detail-header">
                      {translate('workflows.attempts-left')}
                    </h4>
                    <Badge type={failed ? 'danger' : undefined}>
                      {formatAttemptsLeft(
                        pendingActivity.maximumAttempts,
                        pendingActivity.attempt,
                      )}
                    </Badge>
                  </div>
                  {#if failed && pendingActivity.scheduledTime}
                    <div class="pending-activity-detail">
                      <h4 class="pending-activity-detail-header">
                        {translate('workflows.next-retry')}
                      </h4>
                      <Badge type={failed ? 'danger' : undefined}>
                        {toTimeDifference({
                          date: pendingActivity.scheduledTime,
                          negativeDefault: 'None',
                        })}
                      </Badge>
                    </div>
                  {/if}
                  <div class="pending-activity-detail">
                    <h4 class="pending-activity-detail-header">
                      {translate('workflows.expiration')}
                    </h4>
                    {formatRetryExpiration(
                      pendingActivity.maximumAttempts,
                      formatDuration(
                        getDuration({
                          start: Date.now(),
                          end: pendingActivity.expirationTime,
                        }),
                      ),
                    )}
                  </div>
                </div>
                <div class="pending-activity-failure-details">
                  {#if pendingActivity?.heartbeatDetails}
                    <div class="w-1/2 grow">
                      <h4 class="pending-activity-detail-header">
                        {translate('workflows.heartbeat-details')}
                      </h4>
                      <CodeBlock
                        maxHeight={128}
                        content={stringifyWithBigInt(
                          pendingActivity.heartbeatDetails,
                        )}
                        copyIconTitle={translate('common.copy-icon-title')}
                        copySuccessIconTitle={translate(
                          'common.copy-success-icon-title',
                        )}
                      />
                    </div>
                  {/if}
                  {#if pendingActivity?.lastFailure}
                    <div class="w-1/2 grow">
                      <h4 class="pending-activity-detail-header">
                        {translate('workflows.last-failure')}
                      </h4>
                      <CodeBlock
                        maxHeight={128}
                        content={stringifyWithBigInt(
                          pendingActivity.lastFailure,
                        )}
                        copyIconTitle={translate('common.copy-icon-title')}
                        copySuccessIconTitle={translate(
                          'common.copy-success-icon-title',
                        )}
                      />
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="mt-2 text-right">
        <Link {href}>{translate('workflows.pending-activities-link')}</Link>
      </div>
    </Accordion>
  </section>
{/if}

<style>
  .pending-activity-row-container {

    margin-top: 1rem
}

  .pending-activity-row {

    display: flex;

    width: 100%;

    flex-direction: row;

    align-items: center;

    gap: 0.5rem
}

  .pending-activity-summary {

    width: 100%;

    overflow-x: scroll;

    border-bottom-width: 1px;

    border-color: rgb(var(--color-border-subtle));

    padding-top: 0.25rem;

    padding-bottom: 0.25rem;

    font-size: 0.875rem;

    line-height: 1.25rem
}

  .pending-activity-row:last-child .pending-activity-summary {

    border-bottom-width: 0px
}

  .pending-activity-inner-row {

    display: flex;

    width: 100%;

    flex-direction: row;

    align-content: space-between;

    gap: 1.5rem
}

  .pending-activity-detail {

    width: 100%;

    white-space: nowrap
}

  @media (min-width: 1280px) {

    .pending-activity-detail {

        display: flex;

        flex-direction: row;

        align-items: center;

        gap: 0.5rem
    }
}

  .pending-activity-detail-header {

    font-weight: 500
}

  .pending-activity-failure-details {

    display: flex;

    width: 100%;

    flex-direction: row;

    gap: 1rem
}</style>
