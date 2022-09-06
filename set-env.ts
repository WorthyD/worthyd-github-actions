var fs = require('fs');
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/secrets.ts';

// const envConfigFile = `export const secretKeys = {
//   apiKey: '${process.env['API_KEY']}',
// };
// `;

const envConfigFile = `export const secretKeys = {
  apiKey: '',
};
`;



fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
      throw console.error(err);
  } else {
      console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
  }
});
