<script>import Button from '../../holocene/button.svelte';
import { translate } from '../../i18n/translate';
import { atob } from '../../utilities/atob';
import { getSinglePayload } from '../../utilities/encode-payload';
import PayloadDecoder from '../event/payload-decoder.svelte';
import PayloadInputWithEncoding, { isPayloadInputEncodingType, } from '../payload-input-with-encoding.svelte';
export let input;
export let editInput;
export let encoding;
export let messageType;
export let payloads;
export let showEditActions = false;
let initialInput = '';
let initialEncoding = 'json/plain';
let initialMessageType = '';
let loading = true;
const setInitialInput = (decodedValue) => {
    var _a, _b, _c, _d, _e, _f, _g;
    initialInput = getSinglePayload(decodedValue);
    input = initialInput;
    const currentEncoding = atob(String((_c = (_b = (_a = payloads === null || payloads === void 0 ? void 0 : payloads.payloads[0]) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.encoding) !== null && _c !== void 0 ? _c : 'json/plain'));
    const currentMessageType = ((_e = (_d = payloads === null || payloads === void 0 ? void 0 : payloads.payloads[0]) === null || _d === void 0 ? void 0 : _d.metadata) === null || _e === void 0 ? void 0 : _e.messageType)
        ? atob(String((_g = (_f = payloads === null || payloads === void 0 ? void 0 : payloads.payloads[0]) === null || _f === void 0 ? void 0 : _f.metadata) === null || _g === void 0 ? void 0 : _g.messageType))
        : '';
    if (isPayloadInputEncodingType(currentEncoding)) {
        $encoding = currentEncoding;
        initialEncoding = $encoding;
        if (currentEncoding === 'json/protobuf' && currentMessageType) {
            messageType = currentMessageType;
            initialMessageType = currentMessageType;
        }
    }
    loading = false;
};
const handleEdit = () => {
    if (editInput) {
        editInput = false;
        input = initialInput;
        $encoding = initialEncoding;
        messageType = initialMessageType;
    }
    else {
        editInput = true;
        input;
    }
};
</script>

<div class="flex flex-col gap-1">
  <PayloadDecoder value={payloads} key="payloads" onDecode={setInitialInput}>
    <PayloadInputWithEncoding
      bind:input
      bind:encoding
      bind:messageType
      bind:loading
      editing={editInput}
      id="schedule-payload-input"
    >
      <div slot="action" class:hidden={!showEditActions}>
        <Button variant="secondary" on:click={handleEdit}>
          {editInput ? translate('common.cancel') : translate('common.edit')}
        </Button>
      </div>
    </PayloadInputWithEncoding>
  </PayloadDecoder>
</div>
