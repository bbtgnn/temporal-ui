<script>import { translate } from '../../../i18n/translate';
import { routeForRelationships } from '../../../utilities/route-for';
import ContinueAsNewNode from './continue-as-new-node.svelte';
export let namespace;
export let workflowId;
export let first;
export let previous;
export let current;
export let next;
</script>

<div
  class="flex w-full items-center justify-between overflow-auto bg-primary px-8 py-16 lg:py-36 xl:px-32"
>
  {#if first}
    <ContinueAsNewNode
      label={translate('workflows.first-execution')}
      value={first}
      href={routeForRelationships({
        namespace,
        workflow: workflowId,
        run: first,
      })}
    />
    <div
      class="border-top border-1 w-full border border-dashed border-subtle"
    ></div>
  {/if}
  {#if previous}
    <ContinueAsNewNode
      label={translate('workflows.previous-execution')}
      value={previous}
      href={routeForRelationships({
        namespace,
        workflow: workflowId,
        run: previous,
      })}
    />
    <div class="border-top border-1 w-full border border-subtle"></div>
  {/if}
  <ContinueAsNewNode
    label={translate('workflows.current-execution')}
    value={current}
    href={routeForRelationships({
      namespace,
      workflow: workflowId,
      run: current,
    })}
    current
  />
  {#if next}
    <div class="border-top border-1 w-full border border-subtle"></div>
    <ContinueAsNewNode
      label={translate('workflows.next-execution')}
      value={next}
      href={routeForRelationships({
        namespace,
        workflow: workflowId,
        run: next,
      })}
    />
  {/if}
</div>
