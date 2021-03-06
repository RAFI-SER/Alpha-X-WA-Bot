const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './alphaX.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'V.1 Global Stable',
    PROXY: process.env.PROXY === undefined ? 'false' : process.env.PROXY,
    CHANNEL: 'https://chat.whatsapp.com/Ku8MincABBWAEOaG44PqZE',
    SESSION: process.env.ASENA_SESSION === undefined ? '' : process.env.ASENA_SESSION,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    AUTOBİO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? '' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;/#]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    GIFWEL: process.env.GIF_WEL === undefined ? '' : process.env.GIF_WEL,
    GIFBYE: process.env.GIF_BYE === undefined ? '' : process.env.GIF_BYE,
    CAPTION: process.env.CAPTION === undefined ? '༺🚀 Mᴀᴅᴇ Bʏ Ａｌｐｈａ-Ｘ 🔮࿐' : process.env.CAPTION,
    BOTNAME: process.env.BOT_NAME === undefined ? '≪━─━─━─━─😎─━─━─━─━≫\n          *🚀 Ａｌｐｈａ-Ｘ 🚀*\n        ╚╩══• •✠•❀•✠ • •══╩╝' : process.env.BOT_NAME,
    BIONAME: process.env.BIO_NAME === undefined ? '🛸 Ａｌｐｈａ X 🚀' : process.env.BIO_NAME,
    CL_KEY: process.env.COMMAND_LIST_KEY === undefined ? 'alphaWA ?(.*)' : process.env.COMMAND_LIST_KEY,
    AM_KEY: process.env.ALIVE_MSG_KEY === undefined ? 'alive ?(.*)' : process.env.ALIVE_MSG_KEY,
    D_SONG: process.env.DOWNLOAD_SONG === undefined ? '*🄳ᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ...* 📥' : process.env.DOWNLOAD_SONG,
    U_SONG: process.env.UPLOAD_SONG === undefined ? '*🅄ᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ...* 📤' : process.env.UPLOAD_SONG,
    D_VIDEO: process.env.DOWNLOAD_VIDEO === undefined ? '*🄳ᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ...* 📥' : process.env.DOWNLOAD_VIDEO,
    U_VIDEO: process.env.UPLOAD_VIDEO === undefined ? '*🅄ᴘʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ...* 📤' : process.env.UPLOAD_VIDEO,
    U_NAME: process.env.USER_NAME === undefined ? '<😉>' : process.env.USER_NAME,
    C_EMOJI: process.env.COMMAND_EMOJI === undefined ? '⚜️' : process.env.COMMAND_EMOJI,
    D_EMOJI: process.env.DESC_EMOJI === undefined ? '🎐' : process.env.DESC_EMOJI,
    W_EMOJI: process.env.WARN_EMOJI === undefined ? '⚠️️' : process.env.WARN_EMOJI,
    A_PIC: process.env.ALIVE_PIC === undefined ? 'https://telegra.ph/file/99ed3cd4706f2c7937813.jpg' : process.env.ALIVE_PIC,
    CL_PIC: process.env.COMMAND_LIST_PIC === undefined ? 'https://telegra.ph/file/dbcd7959b5669c310532e.jpg' : process.env.COMMAND_LIST_PIC,
    D_SONG_PIC: process.env.DOWNLOAD_SONG_PIC === undefined ? 'https://telegra.ph/file/1c99228e953ccbfb9801c.jpg' : process.env.DOWNLOAD_SONG_PIC,
    
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './alphaX.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? 'grRerqHXstRifHRuHcWkLL7V' : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG", 
    SUPPORT: "905511384572-1617736751",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
