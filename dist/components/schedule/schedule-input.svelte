<script>import Panel from '../panel.svelte';
import { translate } from '../../i18n/translate';
import { stringifyWithBigInt } from '../../utilities/parse-with-big-int';
import InputAndResults from '../workflow/input-and-results.svelte';
export let input;
</script>

<Panel>
  <InputAndResults
    title={translate('schedules.schedule-input')}
    content={stringifyWithBigInt(input)}
  />
</Panel>
