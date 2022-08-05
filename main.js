const { v2, auth } = require('osu-api-extended');
const { CLIENT_ID, CLIENT_SECRET } = require('./secret.js');
const prompt = require('prompt');

function fileNameFromDir(dir){
    return dir.slice(dir.lastIndexOf("/") + 1);
};

const main = async () => {
    // Auth via client
    await auth.login(CLIENT_ID, CLIENT_SECRET);
    
    var schema = {
      properties: {
        url: {
          name: 'url',
          pattern: /https:\/\/osu\.ppy\.sh\/scores\/[a-zA-Z]+\/[0-9]+/i,
          message: 'Must be a score URL i.e. https://osu.ppy.sh/scores/osu/4209503586',
          description: 'Enter the URL of the score. replay files are not supported yet. See github page for more info.',
          type: 'string',
          required: true
        }
      }
    };
    prompt.start();

    //temp input method for use outside of PS
    const scoreURL = (await prompt.get(schema)).url;
    
    function convertURL(url){
      let idIndex = url.indexOf("/", 29);
      let modeIndex = url.indexOf("/", 25);
      let id = url.slice(idIndex + 1);
      let mode = url.slice(modeIndex + 1, idIndex);
      return [id, mode]
    }

    const [scoreID, scoreMode] = convertURL(scoreURL);

    const score = await v2.scores.details(scoreID, scoreMode);
    const {beatmap, beatmapset, user} = score;
};

main();
