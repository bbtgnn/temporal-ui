<script>import { copyToClipboard } from '../../utilities/copy-to-clipboard';
import CopyButton from './button.svelte';
export let content;
export let visible = false;
export let clickAllToCopy = false;
export let copyIconTitle;
export let copySuccessIconTitle;
const { copy, copied } = copyToClipboard();
function handleOnClick(e) {
    copy(e, content);
}
</script>

{#if clickAllToCopy}
  <button
    class="group flex items-center gap-1 break-all {$$props['container-class']}"
    on:click={handleOnClick}
  >
    <slot>
      <span class={$$props.class} class:select-all={!$$slots.default}
        >{content}</span
      >
    </slot>
    <CopyButton
      {copyIconTitle}
      {copySuccessIconTitle}
      class={visible ? 'visible' : 'invisible group-hover:visible'}
      on:click={handleOnClick}
      copied={$copied}
    />
  </button>
{:else}
  <div class="group flex items-center gap-1 {$$props['container-class']}">
    <slot>
      <span class={$$props.class} class:select-all={!$$slots.default}
        >{content}</span
      >
    </slot>
    <CopyButton
      {copyIconTitle}
      {copySuccessIconTitle}
      class={visible ? 'visible' : 'invisible group-hover:visible'}
      on:click={handleOnClick}
      copied={$copied}
    />
  </div>
{/if}
