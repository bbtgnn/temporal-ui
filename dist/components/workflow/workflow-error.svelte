<script>import { page } from '$app/stores';
import Link from '../../holocene/link.svelte';
import { translate } from '../../i18n/translate';
import { workflowsSearchParams } from '../../stores/workflows';
import { routeForWorkflows } from '../../utilities/route-for';
export let error;
$: ({ namespace } = $page.params);
$: title =
    error.statusCode === 404
        ? translate('workflows.workflow-404-title')
        : translate('workflows.workflow-error-title');
</script>

<header class="mb-4 flex flex-col gap-1">
  <div class="mb-4 block">
    <Link
      href={`${routeForWorkflows({
        namespace,
      })}?${$workflowsSearchParams}`}
      data-testid="back-to-workflows"
      icon="chevron-left"
    >
      {translate('workflows.back-to-workflows')}
    </Link>
  </div>
</header>
<div class="text-center align-middle">
  <h1 class="leading-0 text-[12rem] font-semibold">
    {error?.statusCode ?? '500'}
  </h1>
  <p class="-mt-12 text-lg">{title}</p>
  <p class="text-2xl font-bold text-red-700">
    {error?.statusText ?? ''}
  </p>
</div>
