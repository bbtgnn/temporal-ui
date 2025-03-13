<script>var _a, _b;
import { page } from '$app/stores';
import Icon from '../holocene/icon/icon.svelte';
const href = ((_b = (_a = $page.data) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.feedbackURL) ||
    'https://github.com/temporalio/ui/issues/new/choose';
</script>

<a {href} target="_blank" data-testid="give-feedback" rel="noreferrer">
  <div class="feedback-button">
    <Icon class="mr-2 text-purple-200" name="feedback" height={12} width={12} />
    Give Feedback
  </div>
</a>

<style>
  .feedback-button {

    display: flex;

    cursor: pointer;

    align-items: center;

    justify-content: space-between;

    padding-left: 1rem;

    padding-right: 1rem;

    padding-top: 0.5rem;

    padding-bottom: 0.5rem;

    font-size: 0.875rem;

    line-height: 1.25rem;

    --tw-text-opacity: 1;

    color: rgb(226 214 254 / var(--tw-text-opacity));

    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

  .feedback-button:hover {

    --tw-bg-opacity: 1;

    background-color: rgb(70 90 120 / var(--tw-bg-opacity))
}</style>
