import { secretKeys } from './secrets';
const packageJson = require('../../package.json');
export const environment = {
  production: true,
  apiKey: secretKeys.apiKey,
  version:packageJson.version
};
