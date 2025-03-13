<script>import ScrollToBottom from './scroll-to-bottom.svelte';
import ScrollToTop from './scroll-to-top.svelte';
import { fullEventHistory } from '../stores/events';
export let scrollToTopHidden = true;
export let scrollToBottomHidden = false;
export let onScrollToTopClick;
export let onScrollToBottomClick;
export let scrollToTopAriaLabel;
export let scrollToBottomAriaLabel;
</script>

<div id="scroll-container" class={$$props.class}>
  <ScrollToTop
    hidden={scrollToTopHidden}
    {onScrollToTopClick}
    aria-label={scrollToTopAriaLabel}
  />
  {#if $fullEventHistory.length}
    <ScrollToBottom
      hidden={scrollToBottomHidden}
      {onScrollToBottomClick}
      aria-label={scrollToBottomAriaLabel}
    />
  {/if}
</div>

<style>
  #scroll-container {
    position: fixed;
    bottom: 1.25rem;
    right: 2rem;
    z-index: 50;
    display: none;
    width: auto;
    gap: 0.5rem
}
@media (min-width: 768px) {
    #scroll-container {
        display: flex
    }
}</style>
