<script>import CodeBlock from '../../holocene/code-block.svelte';
import { translate } from '../../i18n/translate';
import { stringifyWithBigInt } from '../../utilities/parse-with-big-int';
export let calendar = undefined;
export let interval = undefined;
export let timezoneName = 'UTC';
export let inline = false;
</script>

{#key [calendar, interval]}
  <div class="flex flex-col {$$props.class}">
    <p>{@html translate('common.timezone', { timezone: timezoneName })}</p>
    <CodeBlock
      copyable
      {inline}
      testId="schedule-calendar"
      language="json"
      content={stringifyWithBigInt(calendar || interval)}
    />
  </div>
{/key}
