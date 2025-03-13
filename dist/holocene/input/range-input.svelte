<script>import Label from '../label.svelte';
import { omit } from '../../utilities/omit';
export let label;
export let labelHidden = false;
export let min = undefined;
export let max = undefined;
export let step = undefined;
export let id = undefined;
export let value = Math.round((min + max) / 2);
let valid = true;
let outputElement;
$: outputXPos = getOutputXPos({ value, min, max });
$: outputXPosOffset = getOutputXPosOffset({ outputElement, outputXPos });
$: {
    if (value) {
        outputXPos = getOutputXPos({ value, min, max });
        outputXPosOffset = getOutputXPosOffset({ outputElement, outputXPos });
    }
    else {
        outputXPos = 0;
        outputXPosOffset = 0;
    }
}
const handleInput = (event) => {
    if (Number.isNaN(event.currentTarget.valueAsNumber)) {
        value = min;
        return;
    }
    valid =
        event.currentTarget.valueAsNumber >= min &&
            event.currentTarget.valueAsNumber <= max;
};
const getOutputXPos = ({ value, min, max }) => {
    // calculates the value as a percentage to position the output text
    return ((value - min) * 100) / (max - min);
};
const getOutputXPosOffset = ({ outputElement, outputXPos }) => {
    var _a;
    // as the output text moves to the right with the slider thumb, it needs to shift left slightly
    // such that it doesn't overflow the width of the slider track.
    const offset = (_a = outputElement === null || outputElement === void 0 ? void 0 : outputElement.clientWidth) !== null && _a !== void 0 ? _a : 15;
    return Math.floor((outputXPos * offset) / 100);
};
const handleWindowResize = () => {
    outputXPos = getOutputXPos({ value, min, max });
    outputXPosOffset = getOutputXPosOffset({ outputElement, outputXPos });
};
</script>

<svelte:window on:resize={handleWindowResize} />
<div class="w-full px-1 py-4 {$$props.class}">
  <div class="range-input-container">
    <div class="relative w-auto grow">
      <span class="absolute -bottom-6 left-0 text-xs font-normal">
        {min}
      </span>
      <div class="relative flex items-center">
        <output
          bind:this={outputElement}
          class:hidden={!valid}
          class="absolute -top-6 text-center text-xs font-normal"
          style="left: calc({outputXPos}% - ({outputXPosOffset}px));"
          for="range">{value ?? ''}</output
        >
        <input
          id="{id}-range"
          name="range"
          type="range"
          class="h-0 w-full cursor-pointer appearance-none rounded border-y border-primary"
          bind:value
          on:input={handleInput}
          {min}
          {max}
          {step}
          {...omit($$restProps, 'class')}
        />
        <Label hidden {label} for="{id}-range" />
      </div>
      <span class="absolute -bottom-6 right-0 text-xs font-normal">
        {max}
      </span>
    </div>
    <div class="flex shrink">
      <input
        {id}
        class="numeric-input"
        class:invalid={!valid}
        type="number"
        inputmode="numeric"
        bind:value
        on:input={handleInput}
        {min}
        {max}
        step={$$props.step}
      />
    </div>
    <Label hidden={labelHidden} class="shrink" {label} for={id} />
  </div>
</div>

<style>
  .range-input-container {

    display: inline-flex;

    width: 100%;

    flex-direction: row;

    align-items: center;

    gap: 1rem;

    white-space: nowrap;

    color: rgb(var(--color-text-primary));
}

  .numeric-input {

    height: 2.5rem;

    width: 2.5rem;

    border-width: 1px;

    border-color: rgb(var(--color-border-subtle));

    background-color: rgb(var(--color-surface-information));

    text-align: center;

    font-size: 0.875rem;

    line-height: 1.25rem;
}

  .numeric-input:focus-within {

    outline: 2px solid transparent;

    outline-offset: 2px;

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7);
}

  .numeric-input {

    -webkit-appearance: textfield;

       -moz-appearance: textfield;

            appearance: textfield;
  }

  .numeric-input::-webkit-outer-spin-button,
  .numeric-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
            appearance: none;
    margin: 0;
  }

  .numeric-input.invalid {

    border-color: rgb(var(--color-border-danger));

    --tw-bg-opacity: 1;

    background-color: rgb(255 228 212 / var(--tw-bg-opacity));

    color: rgb(var(--color-text-danger));
}

  .numeric-input:focus {

    outline-style: solid;

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7);
}

  .floating-value {

    position: absolute;

    top: -0.5rem;
}

  input[type='range']::-webkit-slider-thumb {

    height: 1rem;

    width: 2rem;

    -webkit-appearance: none;

            appearance: none;

    border-radius: 9999px;

    border-width: 1px;

    border-style: solid;

    border-color: rgb(var(--color-border-primary));

    background-color: rgb(var(--color-surface-information));
}

  input[type='range']::-moz-range-thumb {

    height: 1rem;

    width: 2rem;

    border-radius: 9999px;

    border-width: 1px;

    border-style: solid;

    border-color: rgb(var(--color-border-primary));

    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));

    --tw-gradient-from: #DBE8FE var(--tw-gradient-from-position);

    --tw-gradient-to: rgb(219 232 254 / 0) var(--tw-gradient-to-position);

    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);

    --tw-gradient-to: #EFE9FE var(--tw-gradient-to-position);

    --tw-shadow: 0 0 #0000;

    --tw-shadow-colored: 0 0 #0000;

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

  input[type='range']:focus {

    outline: 2px solid transparent;

    outline-offset: 2px;
}

  input[type='range']:focus::-webkit-slider-thumb {

    border-width: 1px;

    border-color: rgb(var(--color-border-primary));

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7);
}

  input[type='range']:focus::-moz-range-thumb {

    border-width: 1px;

    border-color: rgb(var(--color-border-primary));

    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);

    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);

    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

    --tw-ring-color: rgb(var(--color-border-focus-info) / 0.7);
}</style>
