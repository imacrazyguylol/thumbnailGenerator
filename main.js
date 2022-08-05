const { v2, auth, tools } = require('osu-api-extended');
const {CLIENT_ID, CLIENT_SECRET} = require('./secret.js');
const prompt = require('prompt');

function fileNameFromDir(dir){
    return dir.slice(dir.lastIndexOf("/") + 1);
};

const main = async () => {
    // Auth via client
    await auth.login(CLIENT_ID, CLIENT_SECRET);
    
    var schema = {
      properties: {
        URL: {
          description: 'Enter the URL of the score. replay files are not supported yet. See github page for more info.',
          type: 'string',
          required: true
        }
      }
    };
    const {url} = await prompt.get(schema);
    console.log(url);
};

main();
