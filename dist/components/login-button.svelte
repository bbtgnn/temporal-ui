<script>import { goto } from '$app/navigation';
import { routeForLoginPage } from '../utilities/route-for';
</script>

<button
  class="login-button min-w-min"
  on:click={() => goto(routeForLoginPage())}
>
  Login
</button>

<style>
  .login-button {

    display: flex;

    align-items: center;

    justify-content: center;

    padding-left: 1rem;

    padding-right: 1rem;

    padding-top: 0.5rem;

    padding-bottom: 0.5rem;

    font-size: 0.875rem;

    line-height: 1.25rem;

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity))
}

  .login-button:hover {

    border-radius: 0.375rem;

    --tw-bg-opacity: 1;

    background-color: rgb(239 233 254 / var(--tw-bg-opacity));

    color: rgb(var(--color-text-primary))
}</style>
