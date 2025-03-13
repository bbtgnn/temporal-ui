<script context="module">const emptyEndpoint = {
    spec: {
        name: '',
        descriptionString: '',
        target: {
            worker: {
                namespace: '',
                taskQueue: '',
            },
        },
        allowedCallerNamespaces: [],
    },
};
export const endpointForm = writable(emptyEndpoint);
</script>

<script>var _a, _b, _c, _d, _e, _f, _g, _h, _j;
import { writable } from 'svelte/store';
import { onDestroy } from 'svelte';
import IsOssGuard from '../components/is-oss-guard.svelte';
import Alert from '../holocene/alert.svelte';
import Combobox from '../holocene/combobox/combobox.svelte';
import Input from '../holocene/input/input.svelte';
import Editor from '../holocene/monaco/editor.svelte';
import Markdown from '../holocene/monaco/markdown.svelte';
import ToggleButton from '../holocene/toggle-button/toggle-button.svelte';
import ToggleButtons from '../holocene/toggle-button/toggle-buttons.svelte';
import { translate } from '../i18n/translate';
export let endpoint = undefined;
export let targetNamespaceList = [];
export let callerNamespaceList = [];
export let error = undefined;
export let nameDisabled = false;
export let isCloud = true;
export let nameHintText;
export let nameRegexPattern;
let name = ((_a = endpoint === null || endpoint === void 0 ? void 0 : endpoint.spec) === null || _a === void 0 ? void 0 : _a.name) || '';
let description = ((_b = endpoint === null || endpoint === void 0 ? void 0 : endpoint.spec) === null || _b === void 0 ? void 0 : _b.descriptionString) || '';
let target = ((_e = (_d = (_c = endpoint === null || endpoint === void 0 ? void 0 : endpoint.spec) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.worker) === null || _e === void 0 ? void 0 : _e.namespace) || '';
let taskQueue = ((_h = (_g = (_f = endpoint === null || endpoint === void 0 ? void 0 : endpoint.spec) === null || _f === void 0 ? void 0 : _f.target) === null || _g === void 0 ? void 0 : _g.worker) === null || _h === void 0 ? void 0 : _h.taskQueue) || '';
let allowedCallerNamespaces = ((_j = endpoint === null || endpoint === void 0 ? void 0 : endpoint.spec) === null || _j === void 0 ? void 0 : _j.allowedCallerNamespaces) || [];
let showPreview = false;
const setFormStore = (name, descriptionString, target, taskQueue, allowedCallerNamespaces) => {
    $endpointForm = {
        spec: {
            name,
            descriptionString,
            target: {
                worker: {
                    namespace: target,
                    taskQueue,
                },
            },
            allowedCallerNamespaces,
        },
    };
};
$: setFormStore(name, description, target, taskQueue, allowedCallerNamespaces);
$: callerNamespaces = callerNamespaceList.map((n) => ({
    value: n.namespace,
    label: n.namespace,
}));
onDestroy(() => {
    $endpointForm = emptyEndpoint;
});
$: validName = (name) => nameRegexPattern.test(name);
</script>

<div class="flex w-full flex-col gap-4 xl:w-1/2">
  <Input
    bind:value={name}
    required
    disabled={nameDisabled}
    error={!name || !validName(name)}
    hintText={nameHintText}
    label={translate('nexus.endpoint-name')}
    id="name"
    maxLength={255}
    placeholder={translate('nexus.endpoint-name-placeholder')}
  />
  <div class="flex flex-col gap-0">
    <p class="text-base text-primary">{translate('nexus.target')}</p>
    <p class="text-xs text-secondary">
      {translate('nexus.target-description')}
    </p>
  </div>
  <Combobox
    label={translate('nexus.target-namespace')}
    noResultsText={translate('common.no-results')}
    valid={!!target}
    error="Please select a target Namespace."
    bind:value={target}
    required
    id="target-namespace"
    placeholder={translate('nexus.select-namespace')}
    leadingIcon="namespace-switcher"
    options={targetNamespaceList}
    optionValueKey="namespace"
    minSize={32}
  />
  <Input
    bind:value={taskQueue}
    required
    error={!taskQueue}
    label={translate('common.task-queue')}
    id="task-queue"
    placeholder={translate('nexus.task-queue-placeholder')}
  />
  <IsOssGuard {isCloud}>
    <div class="flex flex-col gap-0">
      <p class="text-base text-primary">{translate('nexus.access-policy')}</p>
      <p class="text-xs text-secondary">
        {translate('nexus.allowed-caller-namespaces-description')}
      </p>
    </div>
    <Combobox
      id="caller-namespace-filter-menu"
      multiselect
      displayChips={false}
      bind:value={allowedCallerNamespaces}
      options={callerNamespaces}
      label={translate('nexus.allowed-caller-namespaces')}
      leadingIcon="search"
      noResultsText={translate('common.no-results')}
      valid={!!allowedCallerNamespaces.length}
      error="Please select at least one Namespace."
      placeholder={translate('nexus.select-namespaces')}
      optionValueKey="value"
      optionLabelKey="label"
    />
  </IsOssGuard>

  <ToggleButtons>
    <ToggleButton
      active={showPreview === false}
      data-testid="description-editor"
      on:click={() => (showPreview = false)}
      >{translate('common.description')}</ToggleButton
    >
    <ToggleButton
      active={showPreview === true}
      data-testid="description-preview"
      on:click={() => (showPreview = true)}
      >{translate('common.preview')}</ToggleButton
    >
  </ToggleButtons>
  <div>
    {#if showPreview}
      <Markdown content={description} />
    {:else}
      <Editor
        content={description}
        on:change={(event) => (description = event.detail.value)}
      />
    {/if}
    <p class="my-2 text-xs text-secondary">Do not include sensitive data.</p>
  </div>
  <slot name="footer" />
</div>
<Alert title={error?.statusText} intent="error" hidden={!error}>
  {error?.message}
</Alert>
