import { translate } from '../i18n/translate';
import { Action } from '../models/workflow-actions';
function unhandledAction(action) {
    console.error('Unhandled action:', action);
}
export const getPlacholder = (action, email) => {
    let translatedAction;
    switch (action) {
        case Action.Cancel:
            translatedAction = translate('workflows.canceled');
            break;
        case Action.Reset:
            translatedAction = translate('workflows.reset');
            break;
        case Action.Terminate:
            translatedAction = translate('workflows.terminated');
            break;
        default:
            unhandledAction(action);
    }
    return email
        ? translate('workflows.workflow-action-reason-placeholder-with-email', {
            action: translatedAction,
            email,
        })
        : translate('workflows.workflow-action-reason-placeholder', {
            action: translatedAction,
        });
};
export const formatReason = ({ action, reason, email, }) => {
    const placeholder = getPlacholder(action, email);
    return reason ? [reason.trim(), placeholder].join(' ') : placeholder;
};
