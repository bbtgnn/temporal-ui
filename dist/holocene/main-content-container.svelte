<script context="module">
  import { writable } from 'svelte/store';

  export const scrollTop = writable(0);
</script>

<script>import { clearActives, endIndex, indexPageSize, startIndex, } from '../stores/active-events';
import { filteredEventHistory } from '../stores/events';
import ScrollToContainer from './scroll-to-container.svelte';
let scrollToTopHidden = true;
let scrollToBottomHidden = false;
let showScrollToTopOn = 150; // pixels
function getScrollContainer() {
    return document.getElementById('content-wrapper');
}
function onScrollToTopClick() {
    var _a;
    $startIndex = 0;
    $endIndex = indexPageSize;
    (_a = getScrollContainer()) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
}
function onScrollToBottomClick() {
    var _a, _b;
    const historyLength = $filteredEventHistory === null || $filteredEventHistory === void 0 ? void 0 : $filteredEventHistory.length;
    if (historyLength) {
        clearActives();
        $endIndex = historyLength;
        $startIndex = $endIndex - indexPageSize;
    }
    (_a = getScrollContainer()) === null || _a === void 0 ? void 0 : _a.scrollTo(0, (_b = getScrollContainer()) === null || _b === void 0 ? void 0 : _b.scrollHeight);
}
function handleOnScroll(event) {
    const scrollEvent = event.target;
    $scrollTop = scrollEvent.scrollTop;
    scrollToTopHidden = Boolean($scrollTop < showScrollToTopOn);
}
</script>

<div
  id="content-wrapper"
  class="relative h-screen w-max flex-auto overflow-auto"
  on:scroll={handleOnScroll}
>
  <slot />
  <main id="content" class="pb-16 md:pb-0">
    <slot name="main" />
  </main>
  <slot name="footer" />
  <ScrollToContainer
    {scrollToTopHidden}
    {scrollToBottomHidden}
    {onScrollToTopClick}
    {onScrollToBottomClick}
    scrollToTopAriaLabel="Scroll to top"
    scrollToBottomAriaLabel="Scroll to bottom"
  />
</div>
