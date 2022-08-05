const { v2, auth, tools } = require('osu-api-extended');
const {CLIENT_ID, CLIENT_SECRET} = require('./secret');
const dialog = require('node-file-dialog');

function fileNameFromDir(dir){
    return dir.slice(dir.lastIndexOf("/") + 1);
};

const main = async () => {
    // Auth via client
    await auth.login(CLIENT_ID, CLIENT_SECRET);

    var fileNames = [];
    var beatmaps = [];
    await dialog({type: 'open-files'})
        .then((dir) => {
            let soB;
            let eoB;
            for (let i = 0; i < dir.length; i++){
                fileNames[i] = fileNameFromDir(dir[i]);
                soB = fileNames[i].indexOf("-") + 2;
                eoB = fileNames[i].lastIndexOf("]") + 1;
                beatmaps[i] = {replay: fileNames[i], diffName: fileNames[i].slice(soB, eoB)};
            }
        })
        .catch(err => console.log(err));
    console.log(fileNames);
    console.log(beatmaps[0]);

    const data = await v2.beatmap.search(beatmaps[0].diffName);
        console.log(data);
        
};

main();
