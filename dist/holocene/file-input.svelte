<script>import Icon from './icon/icon.svelte';
import { translate } from '../i18n/translate';
import { toaster } from '../stores/toaster';
export let id;
export let accept = '.json';
export let onUpload;
const onFileSelect = (e) => {
    var _a;
    const target = e.target;
    const file = (_a = target === null || target === void 0 ? void 0 : target.files) === null || _a === void 0 ? void 0 : _a[0];
    const reader = new FileReader();
    if (file) {
        reader.readAsText(file);
        reader.onload = () => {
            var _a, _b;
            try {
                const result = (_b = (_a = reader === null || reader === void 0 ? void 0 : reader.result) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
                onUpload(result);
            }
            catch (e) {
                toaster.push({
                    variant: 'error',
                    message: translate('common.upload-error'),
                });
            }
        };
    }
};
</script>

<label for={id} class="file-upload-label">
  <Icon name="upload" />
</label>
<input {id} class="hidden" type="file" {accept} on:change={onFileSelect} />

<style>
  .file-upload-label {
    background-color: rgb(var(--color-surface-primary));
    position: relative;
    display: flex;
    height: 2.5rem;
    width: -moz-fit-content;
    width: fit-content;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: rgb(var(--color-border-subtle));
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgb(var(--color-text-primary));
}
.file-upload-label:hover {
    background-color: rgb(var(--color-interactive-secondary-surface));
    color: rgb(var(--color-text-primary));
}
.file-upload-label:hover:focus-visible {
    background-color: rgb(var(--color-interactive-secondary-hover));
}
.file-upload-label:hover:hover {
    background-color: rgb(var(--color-interactive-secondary-hover));
}
.file-upload-label:hover:active {
    background-color: rgb(var(--color-interactive-secondary-active));
}
.file-upload-label:focus-visible {
    background-color: rgb(var(--color-interactive-secondary-surface));
    color: rgb(var(--color-text-primary));
}
.file-upload-label:focus-visible:focus-visible {
    background-color: rgb(var(--color-interactive-secondary-hover));
}
.file-upload-label:focus-visible:hover {
    background-color: rgb(var(--color-interactive-secondary-hover));
}
.file-upload-label:focus-visible:active {
    background-color: rgb(var(--color-interactive-secondary-active));
}
.file-upload-label:focus-visible {
    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7);
}</style>
