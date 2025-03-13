<script>var _a, _b;
import Link from '../../holocene/link.svelte';
import { translate } from '../../i18n/translate';
import { routeForEventHistory } from '../../utilities/route-for';
export let link;
export let value = link.workflowEvent.workflowId;
export let label = translate('nexus.link');
export let href = routeForEventHistory({
    namespace: link.workflowEvent.namespace,
    workflow: link.workflowEvent.workflowId,
    run: link.workflowEvent.runId,
    eventId: (_b = (_a = link.workflowEvent) === null || _a === void 0 ? void 0 : _a.eventRef) === null || _b === void 0 ? void 0 : _b.eventId,
});
</script>

<div
  class="flex flex-row items-center gap-2 overflow-hidden first:pt-0 last:border-b-0 {$$props.class}"
>
  <p class="max-w-fit whitespace-nowrap text-right text-sm">
    {label}
  </p>
  <div class="overflow-hidden {$$props.linkClass}">
    <Link {href}>
      {value}
    </Link>
  </div>
</div>
