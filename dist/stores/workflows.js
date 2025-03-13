import { derived, get, readable, writable } from 'svelte/store';
import { page } from '$app/stores';
import { translate } from '../i18n/translate';
import { fetchWorkflowCount } from '../services/workflow-counts';
import { fetchAllWorkflows } from '../services/workflow-service';
import { withLoading } from '../utilities/stores/with-loading';
import { minimumVersionRequired } from '../utilities/version-check';
import { isCloud, supportsAdvancedVisibility } from './advanced-visibility';
import { groupByCountEnabled } from './capability-enablement';
import { hideChildWorkflows } from './filters';
import { temporalVersion } from './versions';
export const refresh = writable(0);
export const hideWorkflowQueryErrors = derived([page], ([$page]) => { var _a, _b; return (_b = (_a = $page.data) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.hideWorkflowQueryErrors; });
export const disableWorkflowCountsRefresh = derived([page], ([$page]) => { var _a, _b; return (_b = (_a = $page.data) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.refreshWorkflowCountsDisabled; });
export const canFetchChildWorkflows = derived([isCloud, temporalVersion], ([$isCloud, $temporalVersion]) => {
    return $isCloud || minimumVersionRequired('1.23.0', $temporalVersion);
});
const query = derived([page], ([$page]) => $page.url.searchParams.get('query'));
export const queryWithParentWorkflowId = derived([query, canFetchChildWorkflows, hideChildWorkflows], ([$query, $canFetchChildWorkflows, $hideChildWorkflows]) => {
    if ($canFetchChildWorkflows && $hideChildWorkflows && !$query) {
        return 'ParentWorkflowId is NULL';
    }
    return $query;
});
const namespace = derived([page], ([$page]) => $page.params.namespace);
const parameters = derived([
    namespace,
    queryWithParentWorkflowId,
    refresh,
    supportsAdvancedVisibility,
    hideWorkflowQueryErrors,
], ([$namespace, $queryWithParentWorkflowId, $refresh, $supportsAdvancedVisibility, $hideWorkflowQueryErrors,]) => {
    return {
        namespace: $namespace,
        query: $queryWithParentWorkflowId,
        refresh: $refresh,
        supportsAdvancedVisibility: $supportsAdvancedVisibility,
        hideWorkflowQueryErrors: $hideWorkflowQueryErrors,
    };
});
const setCounts = (_workflowCount) => {
    workflowCount.set({ ..._workflowCount, newCount: 0 });
};
const updateWorkflows = (set) => {
    return parameters.subscribe(({ namespace, query, supportsAdvancedVisibility, hideWorkflowQueryErrors, }) => {
        withLoading(loading, updating, async () => {
            const { workflows, error } = await fetchAllWorkflows(namespace, {
                query,
            });
            set(workflows);
            if (supportsAdvancedVisibility && !get(groupByCountEnabled)) {
                const workflowCount = await fetchWorkflowCount(namespace, query);
                setCounts(workflowCount);
            }
            if (error) {
                if (hideWorkflowQueryErrors) {
                    workflowError.set(translate('workflows.workflows-error-querying'));
                }
                else {
                    workflowError.set(error);
                }
            }
            else {
                workflowError.set('');
            }
        });
    });
};
export const workflowsSearchParams = writable('');
export const updating = writable(true);
export const loading = writable(true);
export const workflowCount = writable({
    count: 0,
    newCount: 0,
});
export const workflowError = writable('');
export const workflows = readable([], updateWorkflows);
export const workflowsQuery = writable('');
