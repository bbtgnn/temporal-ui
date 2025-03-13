<script>var _a, _b, _c;
import Alert from '../../holocene/alert.svelte';
import Badge from '../../holocene/badge.svelte';
import CodeBlock from '../../holocene/code-block.svelte';
import { translate } from '../../i18n/translate';
import { timeFormat } from '../../stores/time-format';
import { formatDate } from '../../utilities/format-date';
import { routeForNamespace } from '../../utilities/route-for';
import EventLink from '../event/event-link.svelte';
export let callback;
export let link = undefined;
$: completedTime = formatDate(callback.lastAttemptCompleteTime, $timeFormat);
$: nextTime = formatDate(callback.nextAttemptScheduleTime, $timeFormat);
$: failure = (_a = callback === null || callback === void 0 ? void 0 : callback.lastAttemptFailure) === null || _a === void 0 ? void 0 : _a.message;
$: blockedReason = callback === null || callback === void 0 ? void 0 : callback.blockedReason;
$: callbackUrl = (_c = (_b = callback === null || callback === void 0 ? void 0 : callback.callback) === null || _b === void 0 ? void 0 : _b.nexus) === null || _c === void 0 ? void 0 : _c.url;
const titles = {
    Standby: translate('nexus.callback.standby'),
    Scheduled: translate('nexus.callback.scheduled'),
    'Backing Off': translate('nexus.callback.backing-off'),
    Failed: translate('nexus.callback.failed'),
    Succeeded: translate('nexus.callback.succeeded'),
};
const failedState = 'Failed';
$: failed = callback.state === failedState;
$: title = titles[callback.state] || translate('nexus.nexus-callback');
</script>

<Alert icon="nexus" intent={failed ? 'error' : 'info'} {title}>
  <div class="flex flex-col gap-2 pt-2">
    {#if link}
      <EventLink {link} />
      <EventLink
        {link}
        label={translate('nexus.link-namespace')}
        value={link.workflowEvent.namespace}
        href={routeForNamespace({ namespace: link.workflowEvent.namespace })}
      />
    {/if}
    <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
      <p class="flex items-center gap-2">
        {translate('common.state')}<Badge type="subtle">{callback.state}</Badge>
      </p>
      {#if callback.attempt}
        <p class="flex items-center gap-2">
          {translate('common.attempt')}
          <Badge type="subtle">{callback.attempt}</Badge>
        </p>
      {/if}
      {#if callback.lastAttemptCompleteTime}
        <p class="flex items-center gap-2">
          {translate('nexus.last-attempt-completed-time')}
          <Badge type="subtle">{completedTime}</Badge>
        </p>
      {/if}
      {#if callback.nextAttemptScheduleTime}
        <p class="flex items-center gap-2">
          {translate('nexus.next-attempt-scheduled-time')}
          <Badge type="subtle">{nextTime}</Badge>
        </p>
      {/if}
    </div>
    {#if !link}
      <p class="flex items-center gap-2">
        {translate('nexus.callback-url')}
        <Badge type="subtle">{callbackUrl}</Badge>
      </p>
    {/if}
    {#if blockedReason}
      <p class="flex items-center gap-2">
        {translate('nexus.blocked-reason')}
        <Badge type="subtle">{blockedReason}</Badge>
      </p>
    {/if}
    {#if failure}
      <div class="flex flex-col gap-2">
        <p>{translate('nexus.last-attempt-failure')}</p>
        <CodeBlock
          content={failure}
          language="text"
          copyIconTitle={translate('common.copy-icon-title')}
          copySuccessIconTitle={translate('common.copy-success-icon-title')}
        />
      </div>
    {/if}
  </div>
  <slot />
</Alert>
