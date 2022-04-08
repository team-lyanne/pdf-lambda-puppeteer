
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'bearinmind',
  applicationName: 'pdf-lambda-puppeteer',
  appUid: 'pDr4nc8JgLsMh3YhyX',
  orgUid: '594aa6b6-4ab6-40bb-9e84-b0d42f0709ce',
  deploymentUid: '17a14b49-fa76-4a33-bd55-8c72f7444ee3',
  serviceName: 'pdf-lambda-puppeteer',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.2.1',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'pdf-lambda-puppeteer-dev-buildReportPDF', timeout: 6 };

try {
  const userHandler = require('./handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.buildReport, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}