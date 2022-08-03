const CLIENT_ID = 16965;
const CLIENT_SECRET = "62M0ATIFPIgmyZzyLdGxfAWJZXW4w4vjOnjVo7ob"
const { v2, auth, tools } = require('osu-api-extended')


const main = async () => {
    // Auth via client
    await auth.login(CLIENT_ID, CLIENT_SECRET);

    fetch("https://osu.ppy.sh/api/v2/beatmaps/lookup", {
    headers: {
      Authorization: `Bearer ${CLIENT_SECRET}`
    }
});
}