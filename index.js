//EDIT BOT DE KRIZ 
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); 
const { Toxic } = require('./lib/Toxic.js')
const hx = require("hxz-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const yts = require("yt-search");
const ms = require("parse-ms");
const os = require('os');
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { herodetails } = require('./lib/herodetail.js')
const { herolist } = require('./lib/herolist.js')
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage');
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
//IMAGENES //
const iye = fs.readFileSync('./stik/thumb.jpeg')
const asw1 = 'https://i.ibb.co/R6jkZmH/fg1.jpg'
const sip = fs.readFileSync('./stik/oksip.jpeg')
const bgg = fs.readFileSync('./stik/fake.jpeg')
//// IMAGEN ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "";
    }
 // BATAS \\
menusimpel = false
banChats = false;
offline = false;
antidel = false;
welcom = false;
antical = true
readGc = true; 
readPc = false;
autovn = false;
multi = true
harga = 0
matauang = 'USD'
nopref = false
numbernye = '0'
autoketik = false;
prefixStatus = true;
targetpc = "994408103470"; 
owner = "994408103470"; 
fakeyoi = "Kriz Edits"; 
HunterApi = "Ikyy69", 
xchillds = 'XChillDs' 
hardi = 'hardianto', 
valkey = "rivalgans", 
zeksapi = "vallganz5",
dapapi = "anakasu",
lolh = "HIRO",
ApiZeks = "https://api.zeks.xyz",
zeksApikey = "Alphabott",
nomorowner1 = "@994408103470"; 
fake = `𝗖𝗿𝗲𝗮𝗱𝗼𝗿 : ${fakeyoi}\n︎𝗣𝗿𝗲𝗳𝗶𝘅 :「 ${prefixStatus ? "#" : "No Prefix"} 」`;
thumb = fs.readFileSync("./stik/thumb.jpeg"); 
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
autojoin = false;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundo") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = cnf = async (cnf, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = cnf.user.jid;
    
    const botNumberss = cnf.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// 𝗟𝗲𝗰𝘁𝘂𝗿𝗮 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮 𝗲𝗻 𝙂𝗿𝘂𝗽𝗼𝘀
var ampun = await cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await cnf.chatRead(jid)
})
// 𝗟𝗲𝗰𝘁𝘂𝗿𝗮 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮 𝗲𝗻 𝗣𝘃
var chatss = await cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await cnf.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝗩𝗡
if (autovn) {
	if (autovn === false) return
await cnf.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await cnf.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = mek.key.fromMe
      ? cnf.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? cnf.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await cnf.chats.all();
    const ownerNumber = [`994408103470@s.whatsapp.net`]
	const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(cnf, mek);
    const groupMetadata = isGroup ? await cnf.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? cnf.user.jid
      : cnf.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? cnf.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
const daftar1 = `Hola ${pushname}\n\nAntes de usar el bot, *verifiquese primero*`
       const daftar2 = '```Si no ves el botón escribe #verify```'
       const daftar3 = [
          {
            buttonId: `verify`,
            buttonText: {
              displayText: `𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗥𝗠𝗘 👤`,
            },
            type: 1,
          },]
var hayuk0 = '[NO VERIFICADO]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFICADO]'
			}
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑚𝑖𝑛𝑢𝑡𝑜 𝑝𝑜𝑟 𝑓𝑎𝑣𝑜𝑟 𝑦 𝑠𝑖 𝑑𝑒𝑚𝑜𝑟𝑜 𝑙𝑎𝑟𝑔𝑒𝑠𝑒 🙂🔥︎",
      success: "Listo...🍃",
      wrongFormat: "𝐹𝑜𝑟𝑚𝑎𝑡𝑜 𝑖𝑛𝑐𝑜𝑟𝑟𝑒𝑐𝑡𝑜, 𝑖𝑛𝑡𝑒𝑛𝑡𝑎𝑙𝑜 𝑑𝑒 𝑛𝑢𝑒𝑣𝑜 𝑒𝑛 𝑒𝑙 𝑚𝑒𝑛𝑢",
      error: {
        stick: "𝐸𝑠𝑡𝑜 𝑛𝑜 𝑒𝑠 𝑢𝑛 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑐𝑡𝑚𝑟 😂",
        apiz: "𝐸𝑟𝑟𝑜𝑟, 𝑡𝑎𝑙𝑣𝑒𝑧 𝑙𝑎 𝑎𝑝𝑖𝑘𝑒𝑦 𝑎𝑦𝑎 𝑐𝑎𝑑𝑢𝑐𝑎𝑑𝑜",
        Iv: "𝐿𝑖𝑛𝑘 𝑖𝑛𝑣𝑎𝑙𝑖𝑑𝑜 𝑐𝑜𝑚𝑜 𝑡𝑢 ℎ𝑢𝑒𝑣𝑎𝑑𝑎",
      },
      only: {
        group: "𝐸𝑠𝑡𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑒𝑠 𝑠𝑜𝑙𝑜 𝑝𝑎𝑟𝑎 𝑔𝑟𝑢𝑝𝑜𝑠",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {
      cnf.sendMessage(from, teks, text, { quoted: mek });
    };*/
    const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./kr.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			cnf.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/994408103470?text=ola%20UwU`}}})
		}*/
    const sendMess = (hehe, teks) => {
      cnf.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? cnf.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : cnf.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
// Fake Reply:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "Bot",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./kr.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`,
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, 
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`,
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake,
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `994408103470@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "Pendiente"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `994408103470@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      cnf.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      cnf.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      cnf.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
cnf.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		cnf.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("done");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            cnf.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verificacion completada\n\nPorfavor Escribe *#menu* para ver mi menu`
		    cnf.sendMessage(from, teks, text, {quoted: fkontak })
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`),
            },
            title: "Bot",
            description: "Bot24/7",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "By Kriz ",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye 
					},
					"title": `${ucapanWaktu} ${pushname}`,
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        cnf.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
///Boton de Texto

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
cnf.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Boton con Imagen
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton con Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await cnf.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton de Localización
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        cnf.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      cnf.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = cnf.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6', "groupName": `Bot Inc.`, "footerText": "*24/7*", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            cnf.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"CONSULTA","surface":"CATALOG","message":`Kriz `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
// Catalogo
const reply = (teks) => {
             res = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "*Kriz *", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:ftrol})
             cnf.relayWAMessage(res)
        }
const fakewa = (teks) => {        
cnf.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Bot`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/994408103470?text=hola%20Kriz`}}})
		}
const replyfakelink = (teks) => {
cnf.sendMessage(from, teks, text,{contextInfo :{text: 'Hola',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Bot\n•Instagram (@Kriz_edits)`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/R6jkZmH/fg1.jpg",
                "thumbnail": fake,
                "sourceUrl": 'https://www.facebook.com/Kriz.Bl.787'
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
cnf.sendMessage(from, teks, text,{contextInfo :{text: 'Hola',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `WhatsApp`,
                "body": `wa.me/994408103470`,
                "mediaType": "10",
                "mediaUrl": `wa.me/994408103470`,
                "thumbnailUrl": "https://i.ibb.co/R6jkZmH/fg1.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/994408103470`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
cnf.sendMessage(from, teks, text,{contextInfo :{text: 'Hola',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hola ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/R6jkZmH/fg1.jpg",
"mediaUrl": "https://youtube.com/channel/UCv_ST3RV4JD8j1c34VMAn0Q",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await cnf.relayWAMessage(
        cnf.prepareMessageFromContent(
          target,
          cnf.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      cnf.sendMessage(target, teks, "conversation");
    };

    //FUNCION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        cnf.sendMessage(
          mek.key.remoteJid,
          `@${owner} Actualmente estoy fuera de línea!\n\n*Razón :* ${alasan}\n*Desde:* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nIntentelo mas tarde`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  cnf.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Esta Offline!\n\n *Razon :* ${alasan}\n *Desde :* ${heheh.hours} Hora, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nVuelva a intentar mas tarde`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return cnf.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      cnf.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return
        
        cnf.groupRemove(from, [sender]);
      }
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 500000) {
        if (isGroupAdmins) return
        
        cnf.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("Listo", "white")
        );
        cnf.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    // Runtime🔥\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await cnf.setStatus(`Bot activado desde ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case 'verify':              
if (isRegistered) return fakegroup('Tu cuenta está verificada')
const serialUser = createSerial(18)
	         try {
								ppimg = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i.ibb.co/TDfCwpw/Undefined.png'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = ` 「 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 𝗗𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 」

*☂︎ Nombre :* ${pushname}
*☂︎ API :* +${sender.split('@')[0]}
*☂︎ Serial:* ${serialUser}
*☂ ︎Total:* ${_registered.length} User

          *「 𝙽𝙴𝚆 •ც૦੮ 」*`
         haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `menu`,buttonText:{displayText: `𝗠𝗘𝗡𝗨 ☘️`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod, })).imageMessage
              buttonsMessage = {footerText:'Kriz', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
              cnf.relayWAMessage(prep)
	         console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'en', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			cnf.updatePresence(from, Presence.composing)
			
		}, 2000)
        break
      
case 'allmenu':
case 'menu':
groups = cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await cnf.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       txtt =`                             𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔 𝗠𝗜 𝗠𝗘𝗡𝗨`

               buttons = [{buttonId:`owner`, 
               buttonText:{displayText: 'CREADOR'},type:1},
               {buttonId:`hidetag`,buttonText:{displayText:'MENCION'},type:1},
               {buttonId:`infogrupo`,buttonText:{displayText:'INFO GP'},type:1}]


               imageMsg = (await cnf.prepareMessageMedia(fs.readFileSync(`./stik/oksip.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/oksip.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: `
❒︎ 𝐆𝐫𝐮𝐩𝐨 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 
︎❒ 𝐏𝐫𝐢𝐯𝐚𝐝𝐨 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
❒ 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
❒︎ 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝 : ${latensie.toFixed(4)} _Second_
❒︎ 𝐀𝐜𝐭𝐢𝐯𝐨 : ${runtime(process.uptime())}
︎❒ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦𝐚 : ${os.platform()}
${readmore}
 
┏━━❏ *OWNER*
┣❏ ${prefix}off
┣❏ ${prefix}on
┣❏ ${prefix}banear
┣❏ ${prefix}desbanear
┣❏ ${prefix}listbc
┣❏ ${prefix}setcmd
┣❏ ${prefix}delcmd
┣❏ ${prefix}listcmd
┣❏ ${prefix}restart
┣❏ ${prefix}antidelete on/off
┣❏ ${prefix}autotype on/off
┣❏ ${prefix}autoread
┣❏ ${prefix}autovn on/off
┣❏ ${prefix}anticall on/off
┣❏ ${prefix}getcaption
┣❏ ${prefix}bugcatalog
┣❏ ${prefix}buggc id grupo
┣❏ ${prefix}okvirtex
┣❏ ${prefix}isbaileys
┣❏ ${prefix}status
┣❏ ${prefix}setthumb
┣❏ ${prefix}settarget
┣❏ ${prefix}setfakeimg
┣❏ ${prefix}setreply
┣❏ ${prefix}setprefix
┣❏ ${prefix}modo
┣❏ ${prefix}term <code>
┣❏ ${prefix}eval <code>

┏━━❏ *GRUPO*
┣❏ ${prefix}grupo
┣❏ ${prefix}nsfw 1/0
┣❏ ${prefix}kick @54
┣❏ ${prefix}add 54××××
┣❏ ${prefix}getbio
┣❏ ${prefix}getname 
┣❏ ${prefix}alarma
┣❏ ${prefix}listonline
┣❏ ${prefix}antilink on/off
┣❏ ${prefix}tod
┣❏ ${prefix}autojoin on/off

┏━━❏ *CREADOR*
┣❏ ${prefix}sticker
┣❏ ${prefix}robar name | name
┣❏ ${prefix}emoji
┣❏ ${prefix}golden text
┣❏ ${prefix}flower text
┣❏ ${prefix}wooden text
┣❏ ${prefix}burn text
┣❏ ${prefix}glow text
┣❏ ${prefix}summer text
┣❏ ${prefix}neon text
┣❏ ${prefix}coffeecup text
┣❏ ${prefix}coffeecup2 text
┣❏ ${prefix}battlefield text|text
┣❏ ${prefix}googletxt2 text|text
┣❏ ${prefix}transformer text|text
┣❏ ${prefix}write text
┣❏ ${prefix}waifu
┣❏ ${prefix}phlogo *text|text
┣❏ ${prefix}tfire text
┣❏ ${prefix}phcomment text|text
┣❏ ${prefix}wolf text
┣❏ ${prefix}serbot
┣❏ ${prefix}stop
┣❏ ${prefix}ytgol text
┣❏ ${prefix}ytsilver text
┣❏ ${prefix}t3d text
┣❏ ${prefix}logoa text|text
┣❏ ${prefix}marvel text|text
┣❏ ${prefix}leavest text
┣❏ ${prefix}neon2 text
┣❏ ${prefix}wall text
┣❏ ${prefix}cuaderno text
┣❏ ${prefix}loli
┣❏ ${prefix}loli2
┣❏ ${prefix}avatardota
┣❏ ${prefix}arena
┣❏ ${prefix}bloodfrost
┣❏ ${prefix}blood
┣❏ ${prefix}love2
┣❏ ${prefix}ocean
┣❏ ${prefix}love
┣❏ ${prefix}wolfmetal
┣❏ ${prefix}glitch
┣❏ ${prefix}nightsky
┣❏ ${prefix}shadowsky
┣❏ ${prefix}pokemon

┏━━❏ *CONVERTIDOR*
┣❏ ${prefix}tomp3
┣❏ ${prefix}tomp4
┣❏ ${prefix}toimg
┣❏ ${prefix}slow
┣❏ ${prefix}fast
┣❏ ${prefix}reverse
┣❏ ${prefix}tourl
┣❏ ${prefix}padoru

┏━━❏ *DESCARGAS*
┣❏ ${prefix}play texto (beta)
┣❏ ${prefix}video texto(beta)
┣❏ ${prefix}instagram link
┣❏ ${prefix}twitter

┏━━❏ *MENCIÓN*
┣❏ ${prefix}hidetag
┣❏ ${prefix}contag
┣❏ ${prefix}sticktag
┣❏ ${prefix}totag

┏━━❏ *NSFW*
┣❏ ${prefix}yuri
┣❏ ${prefix}hentai
┣❏ ${prefix}hentai2
┣❏ ${prefix}mach
┣❏ ${prefix}kimono
┣❏ ${prefix}blowjob
┣❏ ${prefix}kona
┣❏ ${prefix}wallpaper
┣❏ ${prefix}neko2
┣❏ ${prefix}stickneko
┣❏ ${prefix}stickpussy
┣❏ ${prefix}stickfeetg
┣❏ ${prefix}stickbj
┣❏ ${prefix}stickhentai
┣❏ ${prefix}stickcum
┣❏ ${prefix}awoo
┣❏ ${prefix}blowjob
┣❏ ${prefix}megumin
┣❏ ${prefix}neko
┣❏ ${prefix}trapnime
*MENU MUSICA* 
┣❏ ${prefix}sad
┣❏ ${prefix}tele
┣❏ ${prefix}clasica
┣❏ ${prefix}space
┣❏ ${prefix}blinding
┣❏ ${prefix}vacations
┣❏ ${prefix}fkj
┣❏ ${prefix}cuco
┣❏ ${prefix}jugaste
┣❏ ${prefix}daft
:v Kriz Estuvo Aca 
Bot : Kriz`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               cnf.relayWAMessage(prep)
             
               break
case 'padoru':
data = await fetchJson(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`, {
method: 'get'
})
n = JSON.parse(JSON.stringify(data.Entries));
nimek = n[Math.floor(Math.random() * n.length)];
owo = (`${nimek.Image}`)
ccf = ('https://raw.githubusercontent.com/shadow578/Project-Padoru/master/')
pok = await getBuffer(`${ccf}${owo}`)
cnf.sendMessage(from, pok, image, {
quoted: mek, caption: `Nombre : ${nimek.Name}`
})

break
case 'sad':
ejemplo = fs.readFileSync("./audios/sad1.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tele':
ejemplo = fs.readFileSync("./audios/sad2.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'clasica':
ejemplo = fs.readFileSync("./audios/sad3.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'space':
ejemplo = fs.readFileSync("./audios/sad4.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'blinding':
ejemplo = fs.readFileSync("./audios/sad5.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'vacations':
ejemplo = fs.readFileSync("./audios/sad6.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'fkj':
ejemplo = fs.readFileSync("./audios/sad7.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'cuco':
ejemplo = fs.readFileSync("./audios/sad8.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'jugaste':
ejemplo = fs.readFileSync("./audios/sad9.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'daft':
ejemplo = fs.readFileSync("./audios/sad10.mp3")
await cnf.sendMessage(from, ejemplo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
        case 'mbhenu':
        case 'hbelp':
        case 'alltgmenu':
groups = cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await cnf.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "994408103470@s.whatsapp.net"
        dtod = '994408103470'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `
  𝗛𝗼𝗹𝗮 @${sender.split("@")[0]}

❒︎ 𝐆𝐫𝐮𝐩𝐨 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 
︎❒ 𝐏𝐫𝐢𝐯𝐚𝐝𝐨 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
❒ 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
❒︎ 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝 : ${latensie.toFixed(4)} _Second_
❒︎ 𝐀𝐜𝐭𝐢𝐯𝐨 : ${runtime(process.uptime())}
︎❒ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦𝐚 : ${os.platform()}
${readmore}
`
sendButLocation(from, `${y}`,`Creador : Kriz Edits`, {jpegThumbnail:iye}, [{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1},{buttonId:`banchat`,buttonText:{displayText:'MUTE GP'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'crefjsjsjsjos':
   dtod = '994408103470'
   var yez = `
   [ 𝐶𝑟𝑒𝑑𝑖𝑡𝑜𝑠 ] :
   
 🔥 : wa.me/${dtod.split('@')[0]}
 `
     credit = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1000, "message": `${yez}`, "footerText": "By Kriz", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
            cnf.relayWAMessage(credit)
        break

case 'restart':
             if (!isOwner) return fakegroup('Solo mi creador puede utilizar este comando')
             
             exec(`node main`)
             fakegroup('_Bot reiniciado con éxito_')
break       

case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
fakegroup(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
try {
fakegroup(`${mek.quoted.title}`)
} catch {
fakegroup(`${mek.quoted.caption}`)
}
break
case 'iggw':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
  fakegroup('𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠\nhttps://www.instagram.com/kriz_JB\n*FACEBOOK*\nhttps://www.facebook.com/Kriz.Bl.787')
break
   
case 'owner':
           case 'creator':
           case 'creador':
           case 'jupiter':             
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
               sendKontak(from, `${owner}`, `${fakeyoi}`, '!Sexo!')
               await sleep(1000)
               haibg =`Papu Sigueme En Fb *FACEBOOK*`
               buttons = [{buttonId: `iggw`,buttonText:{displayText: 'FACEBOOK'},type:1},{buttonId:`iggw`,buttonText:{displayText:'INSTAGRAM'},type:1}]
               buttonsMessage = { contentText: `${haibg}`, footerText: `Redes abajo ctmr sigueme 🍁`, buttons: buttons, headerType: 1 }
               prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{})
               cnf.relayWAMessage(prep)
               break     
            
case 'lock':
 ikymemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnhjkce-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
cnf.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": iye}, MessageType.location, {quoted: ikymemek})
           break
case 'mengyoi':
if (!mek.key.fromMe) return;
sendBug(from)
break
case 'buggc':
if (!mek.key.fromMe) return;
if (!q) return fakegroup('Falta la ID de el grupo')
sendBug(args[0])
break
case 'okvirtex':
if (!isOwner && !mek.key.fromMe) return fakegroup('Solo el propietario puede usar esta función')
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex90(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
                if (!isOwner && !mek.key.fromMe) return fakegroup('Solo el propietario puede usar esta función')
                 cnf.toggleDisappearingMessages(from, 0)
               cnf.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '𝐁𝐎𝐒𝐒 𝐎𝐅𝐂',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/R6jkZmH/fg1.jpg",
                "thumbnail": fs.readFileSync(`./kr.jpg`),
                "sourceUrl": "https://www.facebook.com/Kriz.Bl.787"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return fakegroup('Solo el propietario puede usar esta función')
        cnf.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Kriz '},type:1}])
        cnf.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return fakegroup('Solo el propietario puede usar esta función')
cnf.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieDick",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
cnf.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
cnf.toggleDisappearingMessages(from, 0)
break
/*case 'plafgvnfy2':   
				  if (args.length < 1) return fakegroup('*Que música buscas?*')
                
				play6 = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play6}&apikey=${zeksapi}`)
				if (anu.error) return fakegroup(anu.error)
				infomp3 = `❒═════❬ *𝐏𝐋𝐀𝐘* ❭═════╾❒
├‣ *Nombre* : 
┴
${anu.result.title}
┬
├‣ *Fuente* :
┴
${anu.result.source}
┬
├‣ *Link* :
┴
${anu.result.url_video}
┬
❒═════════════════╾❒`
				buffer1 = await getBuffer(anu.result.url_video)
				cnf.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Here bro'})
					break*/  
					
      /*case "play_gfyd":
        if (args.length === 0)
          return fakegroup(
            `Escribe *${prefix}play* _El título de la canción que se buscará_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          yta(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 9999999)
                  return sendMediaURL(
                    from,
                    thumb,                    
                   `❏━━━━❪𝗠𝗨𝗦𝗜𝗖𝗔❫━━━━❏
┃
┃❏ *Nombre* : ${title}
┃
┃❏ *Extensión* : MP3
┃
┃❏ *Tamaño* : ${filesizeF}
┃
┃❏ *Link* : ${a.data}
┃
❏━━━━❪𝗡𝗘𝗪𝗕𝗢𝗧❫━━━━❏`);
                const captions = `❏━━━━❪𝗠𝗨𝗦𝗜𝗖𝗔❫━━━━❏
┃
┃❏ *Nombre* : ${title}
┃
┃❏ *Extensión* : MP3
┃
┃❏ *Tamaño* : ${filesizeF}
┃
┃❏ *Link* : ${a.data}
┃
❏━━━━❪𝗡𝗘𝗪𝗕𝗢𝗧❫━━━━❏`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => fakegroup("error"));
              });
          });
        } catch (err) {
          fakegroup(mess.error.api);
        }
        break;*/

			case 'play':		  
  if (args.length < 1) return fakegroup('Escribe el nombre')
  fakegroup(mess.wait)
  playi = body.slice(6)
  
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${playi}&apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c`)
  if (anu.error) return fakegroup(anu.error)
  infomp3 = `𝗠𝗨𝗦𝗜𝗖𝗔 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗔

⏯️ *Nombre* : ${anu.result.title}
🗳️ *Extensión* : ${anu.result.source}
📚 *Tamaño* : ${anu.result.size}
ℹ️ *Link* : ${anu.result.url_audio}
*Kriz*
`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  cnf.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3 })
  cnf.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
          break

				case 'video':  		  
				  if (args.length < 1) return fakegroup('*Ingrese el título*')
                cnf.sendMessage(from, mess.wait, text,{quoted : mek})
				playi = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${playi}&apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c`)
				if (anu.error) return fakegroup(anu.error)
				infomp3 = `𝗩𝗜𝗗𝗘𝗢 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗢

🎦 *Nombre* : ${anu.result.title}
🗳️  *Fuente* : ${anu.result.source}
📚 *Tamaño* : ${anu.result.size}
*Kriz*
`			
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				cnf.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				cnf.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted: mek, caption: '𝐴𝑞𝑢𝑖 𝑒𝑠𝑡𝑎 𝑡𝑢 𝑣𝑖𝑑𝑒𝑜 😁'})				
          break

case 'bugcatablog':
if (!isOwner && !mek.key.fromMe) return fakegroup('Solo el propietario puede usar esta función')
cnf.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' 
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`,
    sellerJid: '0@s.whatsapp.net' 
   }
  }
 }
})
             cnf.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
       
              case 'dado':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			cnf.sendMessage(from, damdu, sticker, {quoted: mek})
			break
case 'listamenu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 listMsg = {
 buttonText: '𝕷𝖎𝖘𝖙𝖆 𝖉𝖊 𝖒𝖊𝖓𝖚𝖘...🔓',
 footerText: '𝑇𝑜𝑐𝑎 𝑒𝑙 𝑏𝑜𝑡𝑜𝑛 𝑑𝑒 𝑎𝑏𝑎𝑗𝑜 👇🏻',
 description: `Hola @${sender.split('@')[0]}`,
 sections: [
                     {
                      "title": `Menus de Bot`,
 rows: [
                           {
                              "title": "Velocidad",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "rowId": ""
                           },
                           {
                              "title": "Creador",
                              "rowId": ""
                           },
                           {
                              "title": "Serbot",
                              "rowId": ""
                           },
                           {
                              "title": "Runtime",
                              "rowId": ""
                           },
                           {
                              "title": "Menucreador",
                              "rowId": ""
                           },
                           {
                              "title": "Menulogos",
                              "rowId": ""
                           },
                           {
                              "title": "Menugrupo",
                              "rowId": ""
                           },
                           {
                              "title": "Menusongs",
                              "rowId": ""
                           },
                           {
                              "title": "Menuconvertidor",
                              "rowId": "d"
                           },
                        ]
                     }],
 listType: 1
}
cnf.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
break
case 'menucreador':
menu = `┏━━❏ *DUEÑO* 👼🏻
┣❏ ${prefix}off
┣❏ ${prefix}on
┣❏ ${prefix}banchat
┣❏ ${prefix}desban
┣❏ ${prefix}restart
┣❏ ${prefix}status
┣❏ ${prefix}modo
`
sendButMessage(from, menu, `𝐵𝑜𝑠𝑠 𝑜𝑓𝑐`, [
          {
            buttonId: `menugrupo`,
            buttonText: {
              displayText: `VER OTRA LISTA ︎`,
            },
            type: 1,
          },]);
break
case 'menugrupo':
menu = `┏━━❏ *GRUPO* 👥
┣❏ ${prefix}grupo
┣❏ ${prefix}nsfw 1/0
┣❏ ${prefix}kick @54
┣❏ ${prefix}add 54××××
┣❏ ${prefix}getbio
┣❏ ${prefix}getname 
┣❏ ${prefix}alarma
┣❏ ${prefix}activosgp
┣❏ ${prefix}antilink on/off
┣❏ ${prefix}signo
┣❏ ${prefix}serbot 
`
sendButMessage(from, menu, ` 𝐵𝑜𝑠𝑠 𝑜𝑓𝑐`, [
          {
            buttonId: `menudescargas`,
            buttonText: {
              displayText: `VER OTRA LISTA `,
            },
            type: 1,
          },]);
break
case 'menudescargas':
menu = `┏━━❏ *DESCARGAS* ☘️
┣❏ ${prefix}play texto (beta)
┣❏ ${prefix}video texto(beta)
`
sendButMessage(from, menu, `𝐵𝑜𝑠𝑠 𝑜𝑓𝑐`, [
          {
            buttonId: `menulogos`,
            buttonText: {
              displayText: `VER OTRA LISTA `,
            },
            type: 1,
          },]);
break
case 'menulogos':
menu = `┏━━❏ *LOGOS/CREADOR* 💎
┣❏ ${prefix}emoji
┣❏ ${prefix}golden text
┣❏ ${prefix}flower text
┣❏ ${prefix}wooden text
┣❏ ${prefix}burn text
┣❏ ${prefix}glow text
┣❏ ${prefix}summer text
┣❏ ${prefix}neon text
┣❏ ${prefix}coffeecup text
┣❏ ${prefix}coffeecup2 text
┣❏ ${prefix}battlefield text|text
┣❏ ${prefix}googletxt2 text|text
┣❏ ${prefix}transformer text|text
┣❏ ${prefix}write text
┣❏ ${prefix}waifu
┣❏ ${prefix}phlogo *text|text
┣❏ ${prefix}tfire text
┣❏ ${prefix}phcomment text|text
┣❏ ${prefix}wolf text
┣❏ ${prefix}ytgol text
┣❏ ${prefix}ytsilver text
┣❏ ${prefix}t3d text
┣❏ ${prefix}logoa text|text
┣❏ ${prefix}marvel text|text
┣❏ ${prefix}leavest text
┣❏ ${prefix}neon2 text
┣❏ ${prefix}wall text
┣❏ ${prefix}cuaderno text
`
sendButMessage(from, menu, ` 𝐵𝑜𝑠𝑠 𝑜𝑓𝑐`, [
          {
            buttonId: `menuconvertidor`,
            buttonText: {
              displayText: `VER OTRA LISTA `,
            },
            type: 1,
          },]);
break
case 'menuconvertidor':
menu = `┏━━❏ *CONVERTIDOR* 🦖
┣❏ ${prefix}toimg
┣❏ ${prefix}tourl
`
sendButMessage(from, menu, ` 𝐵𝑜𝑠𝑠 𝑜𝑓𝑐`, [
          {
            buttonId: `menu`,
            buttonText: {
              displayText: `LISTA COMPLETA `,
            },
            type: 1,
          },]);
break

      //------------------< Sticker Cmd >-------------------
      case "addbcmd":
      case "sektcmd":
        if (isQuotedSticker) {
          if (!q)
            return fakegroup(`Use : ${command}comando`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Listo!");
        } else {
          fakegroup("Etiqueta un sticker");
        }
        break;

      case "delcgfdmd":
        if (!isQuotedSticker)
          return fakegroup(`Usar : ${command} etiqueta un sticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Listo!");
        break;
      case "listcbkmd":
        teksnyee = `\`\`\`「 LISTA De CMD STICKER 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        // banchat
case 'banear':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*Esta función es especialmente para el propietario. @${ownerN}!*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return fakegroup(mess.only.Badmin)
if (isBanchat) return fakegroup(`Grupo baneado`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
fakegroup(`El Grupo fue baneado raios`)
break

case 'desbanear':
if (!itsMe && !isOwner)return fakegroup('Solo el propietario puede usar esta función')
if (!isBanchat) return fakegroup(`Ya habia sido desbaneado`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
fakegroup(`El Grupo fue desbaneado exitosamente`)
break

case 'listbanchat': case 'listbc':
 teks = `*Lista de Chats baneados!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await cnf.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nombre : ' + met.subject + '\n\n'
}
fakegroup(teks)
break

					case 'tagall':
					if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					if (!isGroup) return fakegroup('esta función es solo para grupos')
					if (!isGroupAdmins) return fakegroup('solo el administrador puede usar esta función')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `ঔৣ͜͡✦ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					//by Kriz
					          case 'phcomment':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz|xd*`)
                   var F = body.slice(10)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   
                   anu = await getBuffer(`${ApiZeks}/api/phub?apikey=${zeksApikey}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                  cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo`, quoted: mek})
                   break
                           case 'wolf':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(6)
                   
                   anu = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo`, quoted: mek})
                   break
case 'pokemon': 
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/pokemon?q=${makell}&apikey=MIMINGANZ`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
                   case 'shadowsky': 
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/shadow-sky?q=${makell}&apikey=MIMINGANZ`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
case 'nightsky': 
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/night-sky?q=${makell}&apikey=MIMINGANZ`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
case 'glitch': 
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz|Xd`)
					makell = args.join(" ")
							const t1 = makell.split('|')[0]
							const t2 = makell.split('|')[1]
					reply(mess.wait)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/glitch?q1=${t1}&q2=${t2}&apikey=MIMINGANZ`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
case 'wolfmetal': 
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/wolf-metal?q=${makell}&apikey=MIMINGANZ`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
case 'love': 
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://nezuko-api.herokuapp.com/api/banners?banner=Lovemessage&text1=${makell}`)
					buffer1 = await getBuffer(anu.result.image)
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
case 'ocean': 
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://nezuko-api.herokuapp.com/api/banners?banner=Ocean&text1=${makell}`)
					buffer1 = await getBuffer(anu.result.image)
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
case 'love2':
                bpp7 = `${body.slice(6)}`
 if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/love?apikey=${lolh}&text=${bpp7}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek})
          break  
case 'blood':
                bpp1 = `${body.slice(7)}`
 if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${lolh}&text=${bpp1}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek})
          break 
case 'bloodfrosted':
case 'bloodfrost':
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					reply(mess.wait)
					buffer1 = await getBuffer(`https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${lolh}&text=${makell}`)					
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
case 'arena':
case 'sand':
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					reply(mess.wait)
					buffer1 = await getBuffer(`https://api.lolhuman.xyz/api/textprome/sandengraved?apikey=${lolh}&text=${makell}`)					
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
         case 'tfire':  
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(7)
                   
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break             
       case 'ytgol':  
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(8)
                   
                   anu = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'ytsilver':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(10)
                   
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 't3d':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(5)
                   
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'logoa':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz|xd*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'phlogo':  
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz|xd*`)
                   var F = body.slice(9)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   case 'dota':
case 'avatardota':
                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					reply(mess.wait)
					buffer1 = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=${lolh}&text=${makell}`)					
					cnf.sendMessage(from, buffer1, image, {quoted: mek})
					break
                   anu = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'marvel':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz|xd*`)
                   var F = body.slice(8)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   
                   anu = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'leavest':  
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(9)
                   
                   anu = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break                   
       case 'cuaderno':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(7)
                   
                   anu = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'neon2':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(7)
                   
                   anu = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break  
                                    
       case 'wall':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(6)
                   
                   anu = await getBuffer(`${ApiZeks}/api/breakwall?apikey=${zeksApikey}&text=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo`, quoted: mek})
                   break
      case "antilink":
        if (!isGroup) return fakegroup("Solo puede ser utilizado en Grupos");
        if (!isGroupAdmins && !mek.key.fromMe) return fakegroup("Solo puede ser utilizado por un administrador");
        if (args[0] == "on") {
          if (isAntilink) return fakegroup("Activado!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          fakegroup("¡Activar con éxito el antienlace!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          fakegroup("¡Desactive con éxito el antienlace!");
        } else if (!q) {
          sendButMessage(from, `MODO ANTILINK`, `Por favor elige uno`, [
            {
              buttonId: `antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'autotype':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return fakegroup('on/off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
fakegroup(`Activar autotype con éxito`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
fakegroup(`Exitó al apagar el autotype`)
} else {
fakegroup(`on/off`)
}
break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return fakegroup('on/off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
fakegroup(`autovn ah sido activado con exito`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
fakegroup(`autovn ah sido desactivado con exitó`)
} else {
fakegroup(`on/off`)
}
break
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return fakegroup('on/off')
if (args[0] === "on") {
if(antical)return fakegroup('Ha sido activado antes!')
antical = true
fakegroup(`Anti llamadas activado con éxito`)
} else if (args[0] === "off") {
if(!antical)return fakegroup('Ha sido desactivado antes!')
antical = false
fakegroup(`Apagado con éxito la función anti llamadas`)
} else {
fakegroup(`on/off`)
}
break

      case "autojoin":
        if (!isGroup) return fakegroup("Solo puede ser utilizado en grupos");
        if (!mek.key.fromMe) return fakegroup("Esta función es solo para el propietario.");
        if (args[0] == "on") {
          if (autojoin == true) return fakegroup("Activada!!");
          autojoin = true;
          fakegroup("Unión automática activada con éxito!");
        } else if (args[0] == "off") {
          autojoin = false;
          fakegroup("Se desactivó la unión automática con éxito!");
        } else if (!q) {
          sendButMessage(from, `MODO DE ENTRADA A GRUPOS AUTOMÁTICA`, `Por favor elige uno`, [
            {
              buttonId: `autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case 'onlinegp':
      case 'activosgp': 
if (!isGroup) return fakegroup(`*Solo puede ser utilizado en grupos*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(cnf.chats.get(ido).presences), cnf.user.jid]
             cnf.sendMessage(from, '*Lista de activos:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             fakegroup(`${e}`)
}
             break
      case "ndndmmdj":
        if (!m.quoted) return fakegroup("Etiqueta un mensaje!");
        let qse = cnf.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return fakegroup("el mensaje que respondió no contiene una respuesta!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (!isGroup) return fakegroup('esta función es solo para grupos');
        if (!isGroupAdmins && !mek.key.fromMe) return fakegroup('Solo puede ser utilizado por un administrador');
        if (!isBotGroupAdmins) return fakegroup("No soy administrador");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return fakegroup("Etiqueta el objetivo que quieres eliminar!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          cnf.groupRemove(from, mentioned);
          fakegroup(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          cnf.groupRemove(from, [anu]);
          fakegroup(mess.success);
        } else {
          cnf.groupRemove(from, mentioned);
          fakegroup(mess.success);
        }
        break;
      case "add":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			if (!isGroup) return fakegroup('esta función es solo para grupos')
			if (!isGroupAdmins) return fakegroup('Solo un administrador de el grupo puede usarlo')
			if (!isBotGroupAdmins) return fakegroup('No soy admin')
			if (args.length < 1) return fakegroup('Falta el número')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						cnf.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						fakegroup('No se pudo agregar, tal vez porque es privado🤔')
					}
					break;
case 'igstory': 
            if(!q) return fakegroup('Donde esta el nombre de usuario??')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    cnf.sendMessage(from,link,video,{quoted: mek,caption: `Tipo : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    cnf.sendMessage(from,link,image,{quoted: mek,caption: `Tipo : ${i.type}`})                  
                }
            }
            });
            break
case 'linkwa':
            if(!q) return fakegroup('¿Qué grupo estás buscando?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nombre*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            fakegroup(res)
            });
            break
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await cnf.getStatus(`${yy}`, MessageType.text);
        fakegroup(p.status);
        if (p.status == 401) {
          fakegroup("Perfil de estado no encontrado");
        }
        break;
        //get grup desc
        case 'getdeskgc':
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
				if (!isGroup) return fakegroup('esta función es solo para grupos')
					anu = from
			   metadete = await cnf.groupMetadata(anu)
				cnf.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          cnf.contacts[ambl] != undefined
            ? cnf.contacts[ambl].sname || cnf.contacts[ambl].notify
            : undefined;
        fakegroup(sname);
        break;

      // Info
      case "infogrupo":
      case "infogp":
        if (!isGroup) return;
        ppUrl = await cnf.getProfilePicture(from); 
        buffergbl = await getBuffer(ppUrl);
        cnf.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 INFO DEL GP 」\`\`\`\n*•> Nombre* : ${groupName}\n*•> Miembros* : ${groupMembers.length}\n*•> Admins* : ${groupAdmins.length}\n*•> Descripción* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demhjote":
        if (!mek.key.fromMe && !isGroupAdmins) return fakegroup("Solo administrador de el grupo puede usarlo");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return fakegroup("No soy administrador");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return fakegroup("Etiqueta a un admin");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        cnf.groupDemoteAdmin(from, [mentionede]);
        teks = `@${mentionede.split("@")[0]} ya no es administrador`;
        cnf.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      
      case "probhhmote":
        if (!isGroupAdmins) return fakegroup("Solo administrador de el grupo puede usarlo");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return fakegroup("No soy administrador");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return fakegroup("Etiqueta");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        cnf.groupMakeAdmin(from, [mentionede]);
        teks = `@${mentionede.split("@")[0]} Ahora es administrador `;
        cnf.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "closegc":
        if (!isGroupAdmins) return fakegroup("Solo puede ser utilizado por un administrador");
        if (!isBotGroupAdmins) return fakegroup("No soy administrador");
        if (!isGroup) return;
        fakegroup(`*GRUPO CERRADO*`);
        cnf.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case "anular":
        if (!isGroupAdmins) return fakegroup("Solo puede ser utilizado por un administrador");
        if (!isBotGroupAdmins) return fakegroup("No soy admin");
        if (!isGroup) return;
        cnf.revokeInvite(from);
        fakegroup("```El link de el grupo ah sido renovado```");
        break;
      case "opengc":
        if (!isGroupAdmins) return fakegroup("Solo puede ser utilizado por un administrador");
        if (!isBotGroupAdmins) return fakegroup("Bot no es administrador");
        if (!isGroup) return;
        fakegroup(`*GRUPO ABIERTO*`);
        cnf.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "alarma":
        if (!q)
          return fakegroup(
            `Use :\n${prefix}reminder text/2s\n\nNOTA: \n*s* - segundos\n*m* - minutos\n*h* - horas\n*d* - dias`
          );
        teks = body.slice(8);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Texto";
        if (isQuotedImage) typeRemind = "Imagen";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Texto";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await cnf.sendMessage(
            from,
            `── 「 RECORDATORIO 」 ──
    
Recordatorio activado con éxito!
➸ Mensaje: ${messRemind}
➸ Tipo: Texto
➸ Duracion: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${
              parsedTime.seconds
            } Segundos
➸ De: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              cnf.sendMessage(
                from,
                `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Mensaje: ${messRemind}
➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await cnf.downloadAndSaveMediaMessage(encmedia);
          await cnf.sendMessage(
            from,
            `── 「 RECORDATORIO 」 ──
    
¡Recordatorio activado con éxito!
➸ Mensaje: ${messRemind}
➸ Tipo: Sticker
➸ Duracion: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${
              parsedTime.seconds
            } Segundos
➸ De: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              cnf.sendMessage(
                from,
                `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Mensaje: ${messRemind}
➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              cnf.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await cnf.downloadAndSaveMediaMessage(encmedia);
          await cnf.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
¡Recordatorio activado con éxito!
➸ Mensaje: ${messRemind}
➸ Tipo: Imagen
➸ Duracion: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${
              parsedTime.seconds
            } Segundos
➸ De: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Mensaje: ${messRemind}
➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`;
              cnf.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await cnf.downloadAndSaveMediaMessage(encmedia);
          await cnf.sendMessage(
            from,
            `── 「 RECORDATORIO 」 ──
    
¡Recordatorio activado con éxito!
➸ Mensaje: ${messRemind}
➸ Tipo: Audio
➸ Duración: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${
              parsedTime.seconds
            } Segundos
➸ De: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              cnf.sendMessage(
                from,
                `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Mensaje: ${messRemind}
➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              cnf.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
case 'size':
if (args.length < 1) return fakegroup('Ingrese los números')
filsize = args[0]
costick = await cnf.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:fgif})
cnf.relayWAMessage(costick)
break

case 'sizeimg':
if (args.length < 1) return fakegroup('Ingrese los números')
filsizei = args[0]
costick3 = await cnf.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:ftroli})
cnf.relayWAMessage(costick3)
break
      case "serbot":
        if (mek.key.fromMe) return fakegroup("No puede ser un bot dentro de un bot");
        jadibot(reply, cnf, from);
        break;
      case "stop":
        if (!mek.key.fromMe)
          return fakegroup("ok");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LISTA DE BOTS* 」\n";
        for (let i of listjadibot) {
          tekss += `*Numero* : ${i.jid.split("@")[0]}
*Nombre* : ${i.name}
*Dispositivo* : ${i.phone.device_manufacturer}
*Modelo* : ${i.phone.device_model}\n\n`;
        }
        fakegroup(tekss);
        break;

      //------------------< Funciones que usan botones >-------------------
      
	case 'chat':
			if (args.length < 1) return fakegroup(`Usar ${prefix}chat 598#### | text`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            cnf.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            fakegroup(`Enviar chat con éxito:\n${org},@${nomor}`)
            break
case 'viewonce':
res = await cnf.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": iye,
"viewOnce": true
}
}
}
}, {}) 
cnf.relayWAMessage(res)
break
case 'hbd': 
case 'zodiak': 
case 'zodiac': 
case 'signo':
let textus = args.join(" ")
if (!q) return fakegroup(`Ejemplo : ${prefix + command} 2004, 6, 23 Fecha de nacimiento`)
const zodiak = [
    ["Capricornio",   new Date(1970, 0, 1)],
    ["Acuario",    new Date(1970, 0, 20)],
    ["Piscis",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Tauro",      new Date(1970, 3, 21)],
    ["Géminis",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagitario", new Date(1970, 10, 22)],
    ["Capricornio",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Datos inválidos') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Feliz cumpleaños🥳🎉` : age

const teksh = `
Nacimiento : ${birth.join('-')}
Próximo cumpleaños: ${birthday.join('-')}
Edad : ${cekusia}
Signo : ${zodiac}
`.trim()
fakegroup(monospace(teksh))
break
// debug
case 'debug':
   res = await cnf.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hola ${pushname} 👋,\n\n${jam} - ${week} ${weton} - ${date}`,
    "hydratedFooterText": `${fakeyoi}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${fakeyoi}`,
          "url": "Escríbeme"
        },
        "index": 0
      }
    ]
  }
}
}, {})
cnf.relayWAMessage(res)
break
			
              
                 break
			      case "modo":
        if (!owner) return;
        sendButMessage(from, `𝗠𝗢𝗗𝗢 𝗣𝗥𝗜𝗩𝗔𝗗𝗢 𝗢 𝗣𝗟𝗨𝗕𝗟𝗜𝗖𝗢`, `Por favor elige uno`, [
          {
            buttonId: `self`,
            buttonText: {
              displayText: `𝗠𝗢𝗗𝗢-𝗣𝗥𝗜𝗩𝗔𝗗𝗢`,
            },
            type: 1,
          },
          {
            buttonId: `public`,
            buttonText: {
              displayText: `𝗠𝗢𝗗𝗢-𝗣𝗨𝗕𝗟𝗜𝗖𝗢`,
            },
            type: 1,
          },
        ]);
        break;

      case "grupo":
        if (!isGroupAdmins) return fakegroup('solo el administrador puede usar esta función')
        sendButMessage(from, `𝗔𝗝𝗨𝗦𝗧𝗘 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢`, `Por favor elige uno`, [
          {
            buttonId: `opengc`,
            buttonText: {
              displayText: `Abrir Grupo`,
            },
            type: 1,
          },
          {
            buttonId: `closegc`,
            buttonText: {
              displayText: `Cerrar Grupo`,
            },
            type: 1,
          },
          {
            buttonId: `revoke`,
            buttonText: {
              displayText: `Anular Link`,
            },
            type: 1,
          },
        ]);
        break;
      //Fin
      //------------------< Descargas >-------------------
      case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return fakegroup(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nombre de usuario*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Comentarios*: ${a.stats.commentCount}\n🔁 *Compartir*: ${a.stats.shareCount}\n🎞️ *Vistas*: ${a.stats.playCount}`,
          `Elija el formato que desea descargar`,
          tamnel,
          [
            {
              buttonId: `tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;

           
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return fakegroup(mess.Iv);
        if (!q) return fakegroup("Donde esta el link?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "Listo");
        break;
      case "facebook":
        if (!q) return fakegroup("Donde está el link?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return fakegroup(mess.Iv);
        
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return fakegroup(mess.Iv);
        if (!q) return fakegroup("Donde esta el link?");
        
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              cnf.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Tipo : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              cnf.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Tipo : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return fakegroup('Solo el propietario puede usar esta función')
       if (args.length < 1) return fakegroup(`Opciones :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    fakegroup(`Prefix cambiado exitosamente a ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    fakegroup(`Prefix cambiado exitosamente a ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    fakegroup(`Prefix cambiado exitosamente a ${c}`)
                }
                break
      
      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return fakegroup("Sin sesión de votación");
        delVote(from);
        fakegroup("Eliminación exitosa de la sesión de votación en este grupo");
        break;
      case "voting":
       if (!isGroupAdmins) return fakegroup('solo el administrador puede usar esta función')
        if (!isGroup) return fakegroup('esta función es solo para grupos');
        if (isVote) return fakegroup("Sesión de votación en curso en este grupo");
        if (!q)
          return fakegroup(
            "*Votacion*\n\n" +
              prefix +
              "Votando @tag | razón | 1 (1 = 1 minuto)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return fakegroup(
              "ingrese el número en la fila 3 \nEjemplo: 1-9999 \n1 = 1 Min"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " On Start" +
              "\n\n" +
              `Voto = ✅\nNo votar = ❌\n\nRazon: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return fakegroup("que grupo estas buscando??");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nombre*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          fakegroup(res);
        });
        break;
   
  case 'writebook':            
            
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://xeon.herokuapp.com/api/maker/nulis?apikey=${valkey}&text=${teks}`)  
cnf.sendMessage(from, ini_buf, image, { quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
            break
		case 'write':
              
                if (args.length < 1) return fakegroup(`Donde esta el texto?`)
                dpuhy = args.join(' ')
               tiyo = `Por favor elige uno`
sendButMessage(from, tiyo, `𝐵𝑜𝑠𝑠 𝑜𝑓𝑐`, [
            {              
              buttonId: `writedown ${dpuhy}`,
              buttonText: {
                displayText: `ABAJO`,
              },
              type: 1,
               },
          {
            buttonId: `writeleft ${dpuhy}`,
            buttonText: {
              displayText: `IZQUIERDA`,
            },
            type: 1,          
          },
        ]);               
        break;                 
   case 'bngc':
      case 'broatsst':       
             if (!isOwner) return  fakegroup(mess.only.owner)
             if (args.length < 1) return fakegroup('Donde esta el texto?')
             anu = await cnf.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await cnf.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             cnf.sendMessage(_.jid, bc, image, {quoted:fkontak,caption: `*「 DIFUSIÓN 」*\n\n${body.slice(4)}`})
}
             fakegroup('Listo')
             } else {
             for (let _ of anu) {
cnf.sendMessage(_.jid, 
			{"contentText": `*「 DIFUSIÓN 」*\n\n${body.slice(4)}`,
			"footerText": '𝙽𝙴𝚆 •ც૦੮',
			"buttons": [
			{"buttonId": `${prefix}allmenu`,
			"buttonText": {"displayText": "CLICK PARA VER EL MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             fakegroup('Difusion completada')
}
             break

case 'yuri':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=${hardi}`)
buttons = [{buttonId: `yuri`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
break


case 'eroneko':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=${hardi}`)
buttons = [{buttonId: `eroneko`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
break
case  'blowjob':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`La funci�n Nsfw no est� activa en este grupo\nEscribe: ${prefix}nsfw 1\nPara activar`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek})
break
case 'ecchi':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

yoiz = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${lolh}`)
buttons = [{buttonId: `ecchi`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
break
case 'ahegao':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

yoiz = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${lolh}`)
buttons = [{buttonId: `ahegao`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
break

case 'stickcum':
case 'scum':
if (!isNsfw) return reply('La Funcion De Nsfw No Est� Activa')
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})	
          break

case 'kitsune':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=${hardi}`)
buttons = [{buttonId: `kitsune`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              cnf.relayWAMessage(prep)
break

case 'wallpaper':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${hardi}`)
buttons = [{buttonId: `wallpaper`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              cnf.relayWAMessage(prep)
break
case 'neko2':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=${hardi}`)
buttons = [{buttonId: `neko2`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              cnf.relayWAMessage(prep)
break
case 'baka':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=${hardi}`)
buttons = [{buttonId: `baka`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              cnf.relayWAMessage(prep)
              case 'kemono':
case 'kimono':
if (!isGroup) return reply('esta funci�n es solo para grupos')
if (!isNsfw) return reply(`La funci�n nsfw a�n no est� activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
anu = await fetchJson(`https://x-restapi.herokuapp.com/api/random-kemono?apikey=BETA`)
yoiz = await getBuffer(anu.link)
buttons = [{buttonId: `kemono`,buttonText:{displayText: `Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'*BOT*', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
break
break
case 'loli2':
if (!isGroup) return reply('esta funci�n es solo para grupos')
if (!isNsfw) return reply(`La funci�n nsfw a�n no est� activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
yoiz = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolh}`)
buttons = [{buttonId: `loli2`,buttonText:{displayText: `Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'*BOT*', imageMessage: imageMsg,
              contentText:`No Spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
break
case 'stickhentai':		  
if (!isNsfw) return reply('La Funcion De Nsfw No Est� Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await getBuffer(`https://api.lolhuman.xyz/api/random2/classic?apikey=${lolh}`)			
            resi = await upload(anu)            
			exec(`wget ${resi} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)			
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
          break
case 'stickfeetg':
case 'sfeetg':
case 'stickfeet':
case 'feetg':
if (!isNsfw) return reply('La Funcion De Nsfw No Est� Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
	       } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break
case 'stickbj':
case 'stickblowbjob':
case 'sbj':
if (!isNsfw) return reply('La Funcion De Nsfw No Est� Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break
case 'stickpussy':
case 'spussy':
case 'pussysticker':
case 'stickerpussy':
if (!isNsfw) return reply('La Funcion De Nsfw No Est� Activa')
reply(mess.wait)
try {
       ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }			
			break
case  'mach':
case 'match':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`La funci�n Nsfw no est� activa en este grupo\nEscribe: ${prefix}nsfw 1\nPara activar`)
reply(mess.wait)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=MIMINGANZ`)
bufferf = await getBuffer(anu.result.female)
buffer = await getBuffer(anu.result.male)
cnf.sendMessage(from, buffer, image, { quoted: mek})
cnf.sendMessage(from, bufferf, image, { quoted: mek})
break
case 'stickneko':
case 'sneko':
case 'nekostick':
if (!isNsfw) return reply('La Funcion De Nsfw No Est� Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }

			break
case 'konachan':
case 'kona':
if (!isGroup) return reply('esta funci�n es solo para grupos')
if (!isNsfw) return reply(`La funci�n nsfw a�n no est� activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
anu = await fetchJson(`https://x-restapi.herokuapp.com/api/konachan-search?q=azur_lane&apikey=BETA`)
yoiz = await getBuffer(anu.image)
buttons = [{buttonId: `kona`,buttonText:{displayText: `Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'*BOT*', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
break
case 'loli':
case 'lolis':
if (!isGroup) return reply('esta funci�n es solo para grupos')
reply(mess.wait)
anu = await fetchJson(`https://x-restapi.herokuapp.com/api/random-loli?apikey=BETA`)
yoiz = await getBuffer(anu.link)
buttons = [{buttonId: `loli`,buttonText:{displayText: `Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'*BOT*', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
break
case 'slap':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=${hardi}`)
buttons = [{buttonId: `slap`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              cnf.relayWAMessage(prep)
break
case 'poke':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=${hardi}`)
buttons = [{buttonId: `poke`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              cnf.relayWAMessage(prep)
break
case 'keta':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=${hardi}`)
buttons = [{buttonId: `keta`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              cnf.relayWAMessage(prep)
break
case  'awoo':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
break
case  'blowjob':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
break
case  'hentai': 
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
break
case  'megumin':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
break
case  'neko':
if (!isGroup) return fakegroup('esta función es solo para grupos')
if (!isNsfw) return fakegroup(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)

anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
break
case  'trapnime':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`La funci�n Nsfw no est� activa en este grupo\nEscribe: ${prefix}nsfw 1\nPara activar`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek})
break
case 'hentai2':
case 'hentai4everyone':
if (!isGroup) return reply('esta funci�n es solo para grupos')
if (!isNsfw) return reply(`La funci�n nsfw a�n no est� activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
yoiz = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=${lolh}`)
buttons = [{buttonId: `hentai2`,buttonText:{displayText: `Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'*BOT*', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
break
//Listo
case 'writeleft':
if (!c) return fakegroup('Donde esta el texto??')

kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=${hardi}`)
cnf.sendMessage(from, kon, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
break
case 'writedown':
if (!c) return fakegroup('Donde esta el texto?')

kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=${hardi}`)
cnf.sendMessage(from, kon, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})     
break
case 'folioright':
if (!c) return fakegroup('Donde esta el texto??')

kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=${hardi}`)
cnf.sendMessage(from, kon, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
break
case 'xs':
if (!c) return fakegroup('¿Buscando qué?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${c}&apikey=${HunterApi}`)

pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Titulo : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}───────────────\n\n┌ ◪ *DESCARGA*
└ ${prefix}xvideo [link xvid]`
cnf.sendMessage(from, anu, text, {quoted: mek})
break
case 'xvideo':
case 'xv': 
if (!c) return fakegroup('the link?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)

vid = await getBuffer(x.result.files.low)
cnf.sendMessage(from, vid, video, {quoted: mek})
break
case 'writelist':
  fakegroup(`Ejemplos :
  🔥 ${prefix}write Bot activo 24/7
  🔥 ${prefix}folioright Bot
  🔥 ${prefix}folioleft Bot by Kriz
  🔥 ${prefix}writedown 
  🔥 ${prefix}writeleft Kriz`)
  break
case 'folioleft':
if (!c) return fakegroup('Donde esta el texto??')

kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=${hardi}`)
cnf.sendMessage(from, kon, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
break
case 'nsfw':
	        if (!isGroup) return fakegroup('esta función es solo para grupos')
			if (!isGroupAdmins) return fakegroup('solo el administrador puede usar esta función')
					if (args.length < 1) return fakegroup(`to activate type : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return fakegroup('Ya activado')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						fakegroup('Activado con éxito la función nsfw')
						cnf.sendMessage(from, `Ya pueden pedir su hentai 🔥`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return fakegroup('Está apagado')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						fakegroup('Desactive con éxito la función nsfw')
					} else {
						fakegroup('1/0')
					}
					break

			case 'maker3d': 
					makell = body.slice(8)
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'maker3d2': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'maker3d3':        
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'maker3d4': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'transformer':          
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'googletxt2':
                    if (args.length < 1) return fakegroup(`*Ejemplo :*\n${prefix}${command} Kriz|Te|Ano`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'battlefield': 
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'coffeecup': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'coffeecup2': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'neon': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
              case 'glow': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'summer': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'flower': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'burn': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'quote': 
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'wooden':                     
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
			case 'golden': 
                    if (args.length < 1) return fakegroup(`*Ejemplo :*\n${prefix}${command} Kriz`)
					makell = args.join(" ")
					
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./kr.jpg')})
					break
case 'vnsecond':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await cnf.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
						fs.unlinkSync(mediam)
				break
				case 'vidsecond':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await cnf.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						cnf.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
						fs.unlinkSync(median)
				break
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await cnf.downloadAndSaveMediaMessage(ger);
          cnf.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          fakegroup("Listo");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await cnf.downloadAndSaveMediaMessage(ger);
          cnf.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          fakegroup("Listo");
          fs.unlinkSync(owgi);
        } else {
          fakegroup("Responde a una foto / video");
        }
        break;

      case "lyrics":
        if (!q) return fakegroup("Que cancion es?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case 'pinterest':
        if (!q) return fakegroup("Que buscas?");
        
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
buttons = [{buttonId: `pinterest ${q}`,buttonText:{displayText: `𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🍁`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'𝐵𝑜𝑠𝑠 𝑜𝑓𝑐', imageMessage: imageMsg,
              contentText:`Nota : no agan spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
        break;
      case "playstore":
        if (!q) return fakegroup("qué estás buscando?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nombre* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        fakegroup(store);
        break;
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ONLINE``` ");
        break;
      case "status":
        fakestatus(
          `*Estado*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> MODO-PRIVADO" : "> MODO-PUBLICO"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```OFFLINE``` ");
        break;
      case "get":
        if (!q) return fakegroup("Donde esta el link?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "contag":
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return fakegroup("Numero de teléfono inválido");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        cnf.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          fakegroup(`*Etiqueta un sticker*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          fakegroup(
            `Etiqueta : sticker/audio/video/imagen con ${prefix}totag`
          );
        }
        break;
      case "slander":
        if (args.length < 1)
          return fakegroup(
            `Usar :\n${prefix}slander [@tag | mensaje1 | mensaje2]\n\nEjemplo : \n${prefix}slander @tag|hola|Hola como estás`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        cnf.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return fakegroup(`${prefix}settarget 598xxxxx`);
        targetpc = args[0];
        fakegroup(`Éxito Cambiando el objetivo de slanderpc : ${targetpc}`);
        break;
      case "slanderpc":
        if (!q) return fakegroup(`${prefix}slanderpc texto|texto`);
        jids = `${targetpc}@s.whatsapp.net`; 
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await cnf.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await cnf.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Etiqueta un video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Error: ${err}`);
          buffer453 = fs.readFileSync(ran);
          cnf.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Etiqueta un video");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Error : ${err}`);
            buffer453 = fs.readFileSync(ran);
            cnf.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Etiqueta un video");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Error: ${err}`);
            buffer453 = fs.readFileSync(ran);
            cnf.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Etiqueta un video!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Error: ${err}`);
          buffer453 = fs.readFileSync(ran);
          cnf.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
        
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                cnf.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "𝐵𝑜𝑠𝑠 𝑜𝑓𝑐 🍃",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;

  	case 'artinama':	
  	  
  rival = await fetchJson(`https://bx-hunter.herokuapp.com/api/artinama?nama=${args[0]}&apikey=${HunterApi}`, {method:'get'})
  slur = rival.result
   fakegroup(slur)
   break
case 'waifu':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `waifu`,buttonText:{displayText: `siguiente`},type:1}]
              imageMsg = ( await cnf.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Kriz Edits', imageMessage: imageMsg,
              contentText:`*Hermosa waifu?*`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
   case'songlyrics':
     
  apa3 = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${args[0]}&apikey=${HunterApi}`,{method:'get'})
  apa2 = apa3.result
  fakegroup(apa2)
  break
case "attp":
              if (args.length == 0) return 
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              cnf.sendMessage(from, buffer, sticker, { quoted: freply })
              break 
      case "contact":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return fakegroup("Número de teléfono inválido");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        cnf.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
case 'antilete':
if (!isOwner && !itsMe) return
if (args.length < 1) return fakegroup('on/off')
if (args[0] === "on") {
if(antidel)return fakegroup('Ha sido activado antes!')
antidel = true
fakegroup(`Anti-eliminación activado con éxito`)
} else if (args[0] === "off") {
if(!antidel)return fakegroup('Ha sido desactivado antes!')
antidel = false
fakegroup(`Desactivado con éxito antidelete`)
} else {
fakegroup(`on/off`)
}
break
      case 'welcome':
if (!isOwner && !itsMe) return
if (args.length < 1) return fakegroup('on/off')
if (args[0] === "on") {
if(welcom)return 
welcom = true

} else if (args[0] === "off") {
if(!welcom)return 
welcom = false

} else {

}
break          
      case "robar":
      case "take":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedSticker) return fakegroup("Y el sticker?");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `Kriz`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `Bot`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, cnf, mek, from);
        break;


      case "public":
        if (!isOwner) return fakegroup("Esta función es solo para el propietario..");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakeyt(`「 *MODO-PUBLICO* 」`);
        break;
      case "self":
        if (!isOwner) return fakegroup("Esta función es solo para el propietario.");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakeyt(`「 *MODO-PRIVADO* 」`);
        break
;
      case "hidetag":
        if (!isGroup) return 
        var value = args.join(" ");
        var group = await cnf.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        cnf.sendMessage(from, optionshidetag, text);
        break;
    
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
      case "stickergif":
      case "sgif":
      case "stickgif":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await cnf.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Iniciando : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              fakegroup("error");
            })
            .on("end", function () {
              console.log("Listo");
              cnf.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await cnf.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Iniciando : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              fakegroup(`Falló, en el momento de la conversión ${tipe} a stiker`);
            })
            .on("end", function () {
              console.log("Listo");
              cnf.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          fakegroup(
            `Envia una imagen oh video con la etiqueta ${prefix}sticker\nDuración de el vídeo máximo 1-9 Segundos`
          );
        }
        break;
      case "toimg":
        if (!isQuotedSticker) return fakegroup("etiqueta un sticker !");
        
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup("Bueno, falló, inténtalo de nuevo 🦖");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Listo ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
        if (args.length < 1) return fakegroup("Que deseas buscar?");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await cnf.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *RESULTADOS* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Titulo: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Duracion: " + video.timestamp + "\n";
          ytresult +=
            "❏ Subido: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "*Bot*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`El éxito cambia la conversación falsa : ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await cnf.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          fakegroup("Listo");
        } else {
          fakegroup(`Envia una imagen con la etiqueta ${prefix}setfakeimg`);
        }
        break;
      case "setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await cnf.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          fakegroup("Listo");
        } else {
          fakegroup(`Envia una imagen con la etiqueta ${prefix}sethumb`);
        }
        break;
       case "emoji":
        if (!q) return fakegroup("y el emoji?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "image":
      case "imagen":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return fakegroup("¿Qué quieres buscar??");
        
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return fakegroup(
              "_[ ! ] Error, no encontrado"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "igstanyrclk":
        if (!q) return fakegroup("Cual es el nombre de usuario?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Nombre de usuario* : ${args.join(
            ""
          )}\n*Nombre completo* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Seguidores* : ${Y.followers}\n*Siguiendo* : ${
            Y.following
          }\n*Privado* : ${Y.is_private}\n*Verificado* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (!q) return fakegroup("Donde esta el link?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return fakegroup(mess.Iv);
        
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
        
      case "term":
      if (!mek.key.fromMe) return;
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`Solo mi creador puede:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return fakegroup(mess.Iv);
          hen = args[0];
          if (!q) return fakegroup("Donde esta el link");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("asegúrese de que el enlace sea correcto!");
          var response = await cnf.acceptInvite(codeInvite);
          grupinv("LISTO");
        } catch {
          fakegroup("LINK INVÁLIDO!");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "Velocidad":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Velocidad: ${latensi.toFixed(4)} Segundos*`;
          fakegroup(pingnya);
        });
        break;
    
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          fakegroup(
            `Envia una imagen/sticker/audio/video con la etiqueta ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await cnf.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Listo");
          });
        } else {
          fakegroup("Envia un sticker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await cnf.downloadMediaMessage(boij);
          res = await upload(owgi);
          fakegroup(res);
        } else {
          fakegroup("Envia Foto/Video");
        }
        break;
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return fakegroup(mess.Iv);
          if (!q) return fakegroup("Falta el link de un grupo");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return fakegroup("asegúrese de que sea un enlace https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await cnf.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Creador* : @${owner.split("@")[0]}` : "*Creador* : -"}
*Nombre de el grupo* : ${subject}
*Fecha de creación de el grupo : ${formatDate(creation * 1000)}
*Número de miembros* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc *: no hay"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc modificado por* : @${descOwner.split("@")[0]}`
    : "*Descripción modificada by* : -"
}\n*Datos* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Saved contacts*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Yes" : "No"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          cnf.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          fakegroup("Link inválido");
        }
        break;
      case "eval":
        if (!mek.key.fromMe) return;
        cnf.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return
if (!q)return 
var itsme = `${sender}`
var split = `*Bot*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return cnf.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
cnf.sendMessage(from, stdout, text, term)
}
})
}

      default:

     if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return cnf.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            fakegroup(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("Kriz Bot", "red"),
        "Kriz Bot",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e); 
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
