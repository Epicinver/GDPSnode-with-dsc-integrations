const { commonSecret } = require('../middleware/secrets');
const db = require('../database');
const utils = require('../utils');
const soundlib = require('../soundlib')

module.exports = {
    method: 'post',
    path: '/getGJSongInfo.php',
    middleware: [commonSecret],
    handler: (req, res) => {
        const songID = utils.number(req.body?.songID);

        // check song library update schedule
        const updateAt = db.prepare('SELECT scheduled FROM lib_update_scheduling WHERE id = 0').get()["scheduled"];
        if (updateAt <= new Date().getTime()) soundlib.ensureMusicLib(0);

        // sanity checks
        if (!songID) return res.send('-1');

        // db checks
        const pre = db.prepare('SELECT * FROM songs WHERE ID = ?');
        const song = pre.get(songID);

        if (!song) return res.send('-1');
        if (song.allowedForUse !== 1) return res.send('-2');

        return res.send(`1~|~${songID}~|~2~|~${song.name}~|~3~|~${song.artistID}~|~4~|~${song.artistName}~|~5~|~${song.size}~|~6~|~${song.videoID}~|~7~|~${song.youtubeURL}~|~9~|~${song.songPriority}~|~10~|~${song.link}~|~11~|~${song.platform}~|~12~|~${song.extraArtistIDs}~|~13~|~${song.isNew}~|~14~|~${song.newType}~|~15~|~${song.extraArtistNames}~|~16~|~${song.downloadSoundtrackOverride}`);
    }
};
