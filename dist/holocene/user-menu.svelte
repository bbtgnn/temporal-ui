<script>import { Menu, MenuButton, MenuContainer, MenuItem, } from './menu';
import { translate } from '../i18n/translate';
import { authUser } from '../stores/auth-user';
import Icon from './icon/icon.svelte';
export let logout;
let showProfilePic = true;
function fixImage() {
    showProfilePic = false;
}
</script>

{#if $authUser.accessToken}
  <MenuContainer>
    <MenuButton variant="ghost" hasIndicator controls="user-menu">
      <img
        src={$authUser?.picture}
        alt={$authUser?.profile ?? translate('common.user-profile')}
        class="h-[24px] w-[24px] cursor-pointer"
        on:error={fixImage}
        class:hidden={!showProfilePic}
      />
      <div
        class="aspect-square h-full w-[24px] bg-blue-200 p-0.5"
        class:hidden={showProfilePic}
      >
        {#if $authUser?.name}
          <div class="text-center text-sm text-black">
            {$authUser?.name.trim().charAt(0)}
          </div>
        {/if}
      </div>
    </MenuButton>
    <Menu id="user-menu" position="right">
      <MenuItem hoverable={false}>
        <div class="flex items-center justify-start gap-4">
          <Icon name="astronaut" />
          <p>{$authUser?.email}</p>
        </div>
      </MenuItem>
      <MenuItem on:click={logout}>
        <div class="flex items-center justify-start gap-4">
          <Icon name="logout" />
          {translate('common.log-out')}
        </div>
      </MenuItem>
    </Menu>
  </MenuContainer>
{/if}
