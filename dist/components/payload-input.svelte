<script>import { onDestroy } from 'svelte';
import { v4 as uuid } from 'uuid';
import CodeBlock from '../holocene/code-block.svelte';
import FileInput from '../holocene/file-input.svelte';
import Label from '../holocene/label.svelte';
import Tooltip from '../holocene/tooltip.svelte';
import { translate } from '../i18n/translate';
export let id = uuid();
export let error = false;
export let input;
export let label = translate('workflows.signal-payload-input-label');
export let loading = false;
export let hintText = translate('workflows.signal-payload-input-label-hint');
export let editing = true;
$: error = !isValidInput(input);
const isValidInput = (value) => {
    if (!input)
        return true;
    try {
        JSON.parse(value);
        return true;
    }
    catch (e) {
        return false;
    }
};
const handleInputChange = (event) => {
    input = event.detail;
};
const clearValues = () => {
    input = '';
    loading = false;
};
const onUpload = (uploadInput) => {
    input = uploadInput;
};
onDestroy(clearValues);
</script>

<div class="flex flex-col gap-2">
  <Label for={id} {label} />
  <div class="flex gap-2">
    {#key [loading, editing]}
      <CodeBlock
        {id}
        maxHeight={320}
        content={input}
        on:change={handleInputChange}
        editable={editing}
        copyable={false}
      />
    {/key}
    {#if editing}
      <Tooltip text={translate('common.upload-json')} topRight>
        <FileInput id="{id}-input-file-upload" {onUpload} />
      </Tooltip>
    {/if}
  </div>
  <span
    class="text-xs {error ? 'text-danger' : 'text-primary'} inline-block"
    class:hidden={!hintText && !error}
    role={error ? 'alert' : null}
  >
    {error ? translate('common.input-valid-json') : hintText}
  </span>
</div>
