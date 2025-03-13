<script>var _a, _b, _c;
import { twMerge as merge } from 'tailwind-merge';
import { page } from '$app/stores';
import Icon from '../icon/icon.svelte';
import Logo from '../logo.svelte';
import { translate } from '../../i18n/translate';
import { navOpen } from '../../stores/nav-open';
export let isCloud = false;
const toggle = () => ($navOpen = !$navOpen);
$: version = (_c = (_b = (_a = $page.data) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.version) !== null && _c !== void 0 ? _c : '';
</script>

<nav
  class={merge(
    'group grid h-screen min-h-[600px] w-16 grid-cols-[2rem] grid-rows-[fit-content(1.5rem)_minmax(3rem,4rem)_1fr_8rem] gap-2 border-r border-subtle px-4 py-5 transition-width data-[nav=open]:w-[180px] data-[nav=open]:grid-cols-[100%]',
    'focus-visible:[&_[role=button]]:outline-none focus-visible:[&_[role=button]]:ring-2 focus-visible:[&_[role=button]]:ring-primary/70 focus-visible:[&_a]:outline-none focus-visible:[&_a]:ring-2 focus-visible:[&_a]:ring-primary/70',
    isCloud
      ? 'bg-gradient-to-b from-indigo-600 to-indigo-950 text-off-white focus-visible:[&_[role=button]]:ring-success focus-visible:[&_a]:ring-success'
      : 'surface-black',
  )}
  data-nav={$navOpen ? 'open' : 'closed'}
  data-testid="navigation-header"
  {...$$restProps}
>
  <a href="/" class="w-fit">
    <Logo height={24} width={24} class="m-1" />
  </a>
  <button
    title={$navOpen ? 'Collapse Navigation' : 'Expand Navigation'}
    class="mx-[8px] self-start justify-self-end opacity-0 transition-[opacity,transform] focus-visible:outline-none focus-visible:ring-2 group-hover:opacity-100 group-focus:opacity-100 group-data-[nav=open]:rotate-180 {isCloud
      ? 'focus-visible:ring-primary/70 focus-visible:dark:ring-success'
      : 'focus-visible:ring-primary/70'}"
    on:click={toggle}
  >
    <Icon name="chevron-right" />
  </button>
  <div role="list">
    <slot />
  </div>
  <div class="self-end">
    <slot name="bottom" />
    <div
      class="self-center justify-self-center py-3 text-center text-[0.6rem] text-slate-300"
    >
      <span class="sr-only">{translate('common.version')}</span>
      {version}
    </div>
  </div>
</nav>
