<script>import NavigationButton from './navigation/navigation-button.svelte';
import { translate } from '../i18n/translate';
import { authUser } from '../stores/auth-user';
export let logout;
</script>

{#if $authUser.accessToken}
  <div class="border-b border-subtle" />
  <NavigationButton
    tooltip={$authUser.email}
    label={$authUser.email}
    icon="astronaut"
    data-testid="email"
    disabled
  />
  <NavigationButton
    onClick={logout}
    tooltip={translate('common.log-out')}
    label={translate('common.log-out')}
    icon="logout"
    data-testid="log-out"
  />
{/if}
