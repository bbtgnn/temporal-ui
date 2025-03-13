<script>import Link from '../holocene/link.svelte';
import { translate } from '../i18n/translate';
</script>

<Link
  id="skip-nav"
  href="#content"
  class="absolute left-1/2 z-100 -translate-y-full p-1 focus:translate-y-0"
>
  {translate('common.skip-nav')}
</Link>
