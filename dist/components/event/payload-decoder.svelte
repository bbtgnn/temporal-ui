<script>var _a;
import { page } from '$app/stores';
import { authUser } from '../../stores/auth-user';
import { cloneAllPotentialPayloadsWithCodec, decodePayloadAttributes, } from '../../utilities/decode-payload';
import { getCodecEndpoint, getCodecIncludeCredentials, getCodecPassAccessToken, } from '../../utilities/get-codec';
import { stringifyWithBigInt } from '../../utilities/parse-with-big-int';
export let value;
export let key = '';
export let onDecode = undefined;
let keyedValue = key && (value === null || value === void 0 ? void 0 : value[key]) ? value[key] : value;
let decodedValue = stringifyWithBigInt(keyedValue);
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
const decodePayloads = async (_value) => {
    try {
        const convertedAttributes = await cloneAllPotentialPayloadsWithCodec(_value, $page.params.namespace, settings, $authUser.accessToken);
        const decodedAttributes = decodePayloadAttributes(convertedAttributes);
        const keyExists = key && (decodedAttributes === null || decodedAttributes === void 0 ? void 0 : decodedAttributes[key]);
        if (keyExists) {
            decodedValue = stringifyWithBigInt(keyExists);
        }
        else {
            decodedValue = stringifyWithBigInt(decodedAttributes);
        }
        if (onDecode) {
            onDecode(decodedValue);
        }
    }
    catch (e) {
        console.error('Could not decode payloads');
    }
};
$: decodePayloads(value);
</script>

<slot {decodedValue} />
