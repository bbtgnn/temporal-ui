<script>import { page } from '$app/stores';
import { updateQueryParameters } from '../../utilities/update-query-parameters';
import Option from './simple-option.svelte';
import Select from './simple-select.svelte';
export let label;
export let value;
export let options = [];
export let parameter = null;
export let position = undefined;
const id = `${parameter || label}-${position ? `${position}-filter` : 'filter'}`;
const parameterValue = parameter && $page.url.searchParams.get(parameter);
let _value = parameterValue || (value && value.toString());
const onChange = () => {
    updateQueryParameters({
        parameter,
        value: _value,
        url: $page.url,
    }).then((v) => (value = v));
};
</script>

<Select on:change={onChange} {id} bind:value={_value} {label} {...$$props}>
  <slot>
    {#each options.map((o) => o.toString()) as option}
      <Option value={option} />
    {/each}
  </slot>
</Select>
