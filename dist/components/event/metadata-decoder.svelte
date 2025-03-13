<script>var _a;
import { page } from '$app/stores';
import { decodeSingleReadablePayloadWithCodec } from '../../utilities/decode-payload';
import { getCodecEndpoint, getCodecIncludeCredentials, getCodecPassAccessToken, } from '../../utilities/get-codec';
export let value = undefined;
export let fallback = '';
export let prefix = '';
export let onDecode = undefined;
const maxLength = 120;
let decodedValue = '';
$: endpoint = getCodecEndpoint($page.data.settings);
$: passAccessToken = getCodecPassAccessToken($page.data.settings);
$: includeCredentials = getCodecIncludeCredentials($page.data.settings);
$: settings = {
    ...$page.data.settings,
    codec: {
        ...(_a = $page.data.settings) === null || _a === void 0 ? void 0 : _a.codec,
        endpoint,
        passAccessToken,
        includeCredentials,
    },
};
const setPrefix = (metadata) => {
    if (prefix) {
        metadata = `${prefix} • ${metadata}`;
        if (metadata.length < maxLength)
            return metadata;
        return metadata.slice(0, maxLength) + '...';
    }
    return metadata;
};
$: decodePayload = async (_value) => {
    if (!_value)
        return fallback;
    if (decodedValue)
        return decodedValue;
    const metadata = await decodeSingleReadablePayloadWithCodec(_value, settings);
    if (typeof metadata === 'string') {
        decodedValue = setPrefix(metadata);
        if (onDecode) {
            onDecode(decodedValue);
        }
        return decodedValue;
    }
    decodedValue = fallback;
    return fallback;
};
</script>

{#await decodePayload(value) then metadata}
  <slot decodedValue={metadata} />
{:catch}
  <slot decodedValue={fallback} />
{/await}
