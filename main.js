const { CLIENT_ID, CLIENT_SECRET } = require("./secret.js")
const { v2, auth, tools } = require('osu-api-extended')


const main = async () => {
    // Auth via client
    await auth.login(CLIENT_ID, CLIENT_SECRET);

    const beatmapFromReplay = await v2.beatmap.lookup.diff(/*get the map from the replay using an opendialog, check like the mt5 hash??? */);s
};