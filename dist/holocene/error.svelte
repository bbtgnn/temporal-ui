<script>import { BROWSER } from 'esm-env';
import { createEventDispatcher } from 'svelte';
import { afterNavigate } from '$app/navigation';
import Link from './link.svelte';
import { has } from '../utilities/has';
export let error = null;
export let status = 500;
let message = (error === null || error === void 0 ? void 0 : error.message) || '';
if (has(error, 'statusCode')) {
    status = error.statusCode;
}
const dispatch = createEventDispatcher();
afterNavigate(() => {
    dispatch('clearError', {});
});
</script>

<section
  aria-roledescription="error"
  class="mt-32 text-center align-middle"
  role="alert"
>
  <h1 class="text-[12rem] font-semibold">{status}</h1>
  <p class="-mt-6 mb-5 text-lg">Uh oh. There's an error.</p>
  <p class="my-4 w-auto text-2xl font-extrabold text-red-700">
    {message}
  </p>

  <p class="text-lg">
    <button
      class="underline hover:text-blue-700"
      tabindex={0}
      on:click={() => {
        if (BROWSER) {
          window.location.reload();
        }
      }}>Try a refresh</button
    >
    or
    <Link newTab href="https://temporal.io/slack"
      >jump on our Slack Channel</Link
    >.
  </p>
</section>
