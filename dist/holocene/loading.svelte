<script>import { onMount } from 'svelte';
import Logo from './logo.svelte';
import { translate } from '../i18n/translate';
import mp4Logo from '../vendor/Temporal_Logo_Animation.mp4';
import webmLogo from '../vendor/Temporal_Logo_Animation.webm';
export let title = translate('common.loading');
let isAutoplayAllowed = true;
let videoElement;
onMount(async () => {
    const autoplay = videoElement === null || videoElement === void 0 ? void 0 : videoElement.play();
    if (autoplay !== undefined) {
        try {
            await autoplay;
        }
        catch (e) {
            if (videoElement) {
                isAutoplayAllowed = false;
            }
        }
    }
    else {
        isAutoplayAllowed = false;
    }
});
</script>

<div
  class="my-12 flex flex-col items-center justify-start gap-4 {$$props.class}"
>
  {#if isAutoplayAllowed}
    <video
      autoplay
      loop
      muted
      playsinline
      preload="auto"
      height="160"
      width="160"
      class="dark:invert"
      bind:this={videoElement}
    >
      <source src={mp4Logo} type="video/mp4;codecs=hvc1" />
      <source src={webmLogo} type="video/webm" />
    </video>
  {:else}
    <Logo height={160} width={160} />
  {/if}
  <h2>
    {title}
  </h2>
</div>
