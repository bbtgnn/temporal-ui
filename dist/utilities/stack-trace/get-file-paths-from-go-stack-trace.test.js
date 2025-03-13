import { describe, expect, it } from 'vitest';
import { getFilePathsFromGoStackTrace } from './get-file-paths-from-go-stack-trace';
import UnixGoStacktraceQueryJson from '../../../fixtures/stacktrace-query.go-sdk.json';
import WindowsGoStacktraceQueryJson from '../../../fixtures/stacktrace-query.go-sdk.windows.json';
import JavaStacktraceQueryJson from '../../../fixtures/stacktrace-query.java-sdk.json';
import TypeScriptStacktraceQueryJson from '../../../fixtures/stacktrace-query.ts-sdk.windows.json';
describe('getFilePathsFromGoStackTrace', () => {
    it('should return properly parsed paths as JSON objects for a stacktrace generated by Go SDK in a UNIX system', () => {
        const stackTraceText = UnixGoStacktraceQueryJson.queryResult.payloads[0].data;
        const result = getFilePathsFromGoStackTrace(stackTraceText);
        expect(result.length).toEqual(8);
        expect(result[0].filePath).toEqual('/Users/user/go/pkg/mod/go.temporal.io/sdk@v1.15.0/internal/internal_workflow.go');
        expect(result[0].codeLine).toEqual(1353);
        expect(result[0].character).toBe(null);
        expect(result[1].filePath).toEqual('/Users/user/Desktop/go-sdk/samples-go/helloworld/helloworld.go');
        expect(result[1].codeLine).toEqual(25);
        expect(result[1].character).toBe(null);
    });
    it('should return properly parsed paths as JSON objects for a stacktrace generated by Go SDK in a Windows system', () => {
        const stackTraceText = WindowsGoStacktraceQueryJson.queryResult.payloads[0].data;
        const result = getFilePathsFromGoStackTrace(stackTraceText);
        expect(result.length).toEqual(8);
        expect(result[0].filePath).toEqual('C:\\Users\\user\\go\\pkg\\mod\\go.temporal.io\\sdk@v1.15.0\\internal\\internal_workflow.go');
        expect(result[0].codeLine).toEqual(1353);
        expect(result[0].character).toBe(null);
        expect(result[1].filePath).toEqual('C:\\Users\\user\\SomeFolder\\samples-go\\helloworld\\helloworld.go');
        expect(result[1].codeLine).toEqual(25);
        expect(result[1].character).toBe(null);
    });
    it('should return UNDEFINED for a stacktrace generated by TypeScript SDK', () => {
        const stackTraceText = TypeScriptStacktraceQueryJson.queryResult.payloads[0].data;
        const result = getFilePathsFromGoStackTrace(stackTraceText);
        expect(result).toBe(undefined);
    });
    it('should return UNDEFINED for a stacktrace generated by Java SDK', () => {
        const stackTraceText = JavaStacktraceQueryJson.queryResult.payloads[0].data;
        const result = getFilePathsFromGoStackTrace(stackTraceText);
        expect(result).toBe(undefined);
    });
});
