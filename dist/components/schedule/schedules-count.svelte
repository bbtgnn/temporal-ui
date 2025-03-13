<script>import { page } from '$app/stores';
import { translate } from '../../i18n/translate';
import { fetchScheduleCount } from '../../services/workflow-counts';
import { schedulesCount } from '../../stores/schedules';
$: namespace = $page.params.namespace;
const fetchCounts = async () => {
    try {
        $schedulesCount = await fetchScheduleCount({
            namespace,
        });
    }
    catch (e) {
        console.error('Fetching schedules count failed: ', e === null || e === void 0 ? void 0 : e.message);
    }
};
$: namespace, fetchCounts();
</script>

<div class="flex flex-wrap items-center gap-2">
  {translate('common.schedules-plural', { count: Number($schedulesCount) })}
</div>
