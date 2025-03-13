import { stringifyWithBigInt } from './parse-with-big-int';
export const exportWorkflows = (workflows) => {
    const content = stringifyWithBigInt({ workflows }, null, 2);
    download(content, `workflows-${workflows === null || workflows === void 0 ? void 0 : workflows.length}-${Date.now()}.json`, 'text/plain');
    function download(content, fileName, contentType) {
        const a = document.createElement('a');
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
};
