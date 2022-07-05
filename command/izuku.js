require('../settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const maker = require('mumaker')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')

//𝐋𝐈𝐁
const { ytv, yta } = require('../lib/y2mate')
const { pinterest, wallpaper, wikimedia, quotesAnime, styletext, aiovideodl, mediafire } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom} = require('../lib/myfunc')

//𝐅𝐔𝐒𝐎 𝐇𝐎𝐑𝐀𝐑𝐈𝐎
const date = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")

//𝐁𝐀𝐍𝐂𝐎 𝐃𝐄 𝐃𝐀𝐃𝐎𝐒
global.db = JSON.parse(fs.readFileSync('./storage/db.json'))
  if (global.db) global.db = {
  sticker: {},
  database: {},
  ...(global.db || {})
  }

//𝐌𝐎𝐃𝐔𝐋𝐎𝐒 𝐄𝐗𝐏𝐎𝐑𝐓𝐀𝐃𝐎𝐒
module.exports = izuku = async(izuku, m, chatUpdate, store) => {
  try {
  var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' // 𝐒𝐂𝐑𝐈𝐏𝐓 𝐏𝐎𝐑 𝐋𝐔𝐀𝐍 𝐏𝐄𝐑𝐄𝐈𝐑𝐀
  var budy = (typeof m.text == 'string' ? m.text : '')
  var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
  const isCmd = body.startsWith(prefix)
  const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const pushname = m.pushName || "No Name"
  const botNumber = await izuku.decodeJid(izuku.user.id)
  const isOwner = [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
  const itsMe = m.sender == botNumber ? true : false
  const text = q = args.join(" ")
  const quoted = m.quoted ? m.quoted : m
  const mime = (quoted.msg || quoted).mimetype || ''
  const isMedia = /image|video|sticker|audio/.test(mime)
  const { type, quotedMsg, mentioned, now, fromMe } = m
  const more = String.fromCharCode(8206)
  const readmore = more.repeat(4001)

  const isGroup = m.key.remoteJid.endsWith('@g.us')
  const groupMetadata = m.isGroup ? await izuku.groupMetadata(m.chat).catch(e => {}) : ''
  const groupName = m.isGroup ? groupMetadata.subject : ''
  const participants = m.isGroup ? await groupMetadata.participants : ''
  const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
  const groupOwner = m.isGroup ? groupMetadata.owner : ''
  const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
  const isAdmins = m.isGroup ? groupOwner.includes(m.sender) || groupAdmins.includes(m.sender) : false
  const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  const isNumber = x => typeof x === 'number' && !isNaN(x)
  const isUser = isOwner || global.userB.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
  
  const ftroli = {key : {participant : `0@s.whatsapp.net`}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: global.packname, orderTitle: global.ownerName, thumbnail: global.thumb2, sellerJid: `0@s.whatsapp.net`}}}
  
  const fkatalog = (teks) => {
  ftrol = izuku.prepareMessageFromContent(m.chat, {"orderMessage": {"itemCount": 2022, "message": teks, "footerText": global.ownerName, "thumbnail": global.thumb2, "surface": 'CATALOG' }}, {quoted: ftoli})
  izuku.relayWAMessage(ftrol)
  }
  
//Get Case
  const rfx = `break`

//𝐀𝐍𝐓𝐈-𝐃𝐄𝐋𝐄𝐓𝐄 𝐀𝐔𝐓𝐎𝐌𝐀𝐓𝐈𝐂𝐎
  if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
  let key = m.message.protocolMessage.key
  let msg = await izuku.serializeM(await store.loadMessage(key.remoteJid, key.id))
  let teks = `╭「 *Anti Delete* 」\n├ Usuário : @${msg.sender.split("@")[0]}\n├ Data : ${moment(msg.messageTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB\n└ Modelo : ${msg.mtype}`
  izuku.sendText(m.chat, teks, msg, { mentions: [msg.sender] })
  await izuku.relayMessage(m.chat, msg.message, { messageId: msg.id })
  }

//𝐀𝐍𝐓𝐈-𝐕𝐈𝐒𝐔𝐀𝐋𝐈𝐙𝐀𝐂𝐀𝐎 𝐔𝐍𝐈𝐂𝐀 
  if (m.isGroup && m.mtype == 'viewOnceMessage') {
  let teks = `╭「 *𝐀𝐧𝐭𝐢-𝐕𝐢𝐬𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐚𝐨 𝐔𝐧𝐢𝐜𝐚* 」\n├ *𝐍𝐨𝐦𝐞* : ${pushname}\n├ *𝐔𝐬𝐮𝐚𝐫𝐢𝐨* : @${m.sender.split("@")[0]}\n├ *𝐇𝐨𝐫𝐚* : ${wib} WIB\n└ *𝐌𝐞𝐧𝐬𝐬𝐚𝐠𝐞𝐦* : ${m.mtype}`
  izuku.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
  await sleep(500)
  m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply('𝐓𝐚𝐥𝐯𝐞𝐳 𝐭𝐞𝐧𝐡𝐚 𝐬𝐢𝐝𝐨 𝐚𝐛𝐞𝐫𝐭𝐨 𝐚𝐧𝐭𝐞𝐬'))
  }

//𝐏𝐔𝐁𝐋𝐈𝐂𝐎 𝐄 𝐏𝐑𝐈𝐕𝐀𝐃𝐎
  if (!izuku.public) {
  if (!m.key.fromMe && !isOwner) return
  }

//𝐌𝐄𝐍𝐒𝐒𝐀𝐆𝐄𝐌 𝐍𝐎 𝐓𝐄𝐑𝐌𝐈𝐍𝐀𝐋
  if (m.message) {
  izuku.sendReadReceipt(m.chat, m.sender, [m.key.id])
  console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> De'), chalk.green(m.isGroup ? pushname : 'Privado', m.chat))
  }

  if (command) {
  await izuku.sendPresenceUpdate('recording', m.chat)
  }

//𝐔𝐒𝐔𝐀𝐑𝐈𝐎
  if (!isUser) {
  userB.push(m.sender.split("@")[0])
  }

//𝐒𝐀𝐋𝐕𝐀𝐍𝐃𝐎 𝐁𝐀𝐍𝐂𝐎 𝐃𝐄 𝐃𝐀𝐃𝐎𝐒
  if (global.db) setInterval(async () => {
  fs.writeFileSync('./storage/db.json', JSON.stringify(global.db, null, 2))
  console.log('Updating Database...')
  }, 60 * 1000)

//𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀 𝐂𝐌𝐃
  if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
  let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
  let { text, mentionedJid } = hash
  let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {userJid: izuku.user.id, quoted: m.quoted && m.quoted.fakeObj})
  messages.key.fromMe = areJidsSameUser(m.sender, izuku.user.id)
  messages.key.id = m.key.id
  messages.pushName = m.pushName
  if (m.isGroup) messages.participant = m.sender
  let msg = {
  ...chatUpdate,
  messages: [proto.WebMessageInfo.fromObject(messages)],
  type: 'append'
  }
  izuku.ev.emit('messages.upsert', msg)
  }

switch(command) {

case 'menu': case 'help': {
  let menunya = `╭「 *𝐈𝐙𝐔𝐊𝐔 𝐌𝐃* 」
├ 𝐍𝐎𝐌𝐄 : Izuku Bot❤️
├ 𝐀𝐔𝐓𝐎𝐑 : Luan-Pereira
├ 𝐁𝐈𝐁𝐋𝐈𝐎𝐓𝐄𝐂𝐀 : Bailyes-MD
├ 𝐋𝐈𝐍𝐆𝐔𝐀𝐆𝐄𝐌 : JavaScript
├ 𝐃𝐈𝐒𝐏𝐎𝐒𝐈𝐓𝐈𝐕𝐎 : Android
├ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 : ${userB.length}
├ 𝐃𝐀𝐓𝐀 : ${date}
└ 𝐒𝐄𝐉𝐀 𝐅𝐄𝐋𝐈𝐙 𝐏𝐎𝐈𝐒 𝐄𝐔 𝐕𝐈𝐕𝐎 𝐌𝐔𝐈𝐓𝐎 𝐎𝐂𝐔𝐏𝐀𝐃𝐎 😪 
${readmore}
╭「 *𝐎𝐔𝐓𝐑𝐎𝐒* 」
├ ${prefix}apagar
├ ${prefix}owner
├ ${prefix}ping
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}request
└ ${prefix}report

╭「 *+18 𝐀𝐃𝐔𝐋𝐓𝐎* 」
├ ${prefix}hentai
├ ${prefix}hentai2
├ ${prefix}hentai3
├ ${prefix}hentai4
└ ${prefix}hentai5
${readmore}
╭「 *𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎* 」
├ ${prefix}jodohku
├ ${prefix}jadian
├ ${prefix}bebangc
├ ${prefix}yatim
├ ${prefix}bonito
├ ${prefix}cantik
├ ${prefix}couple
├ ${prefix}pinterest
├ ${prefix}wallpaper
├ ${prefix}quotesanime
├ ${prefix}wikimedia
├ ${prefix}kucing
├ ${prefix}boneka
├ ${prefix}doraemon
├ ${prefix}meme
├ ${prefix}darkjokes
├ ${prefix}cewek
├ ${prefix}cowok
└ ${prefix}asupan

╭「 *𝐌𝐔𝐒𝐈𝐂𝐀 𝐄𝐓𝐂* 」
├ ${prefix}play
├ ${prefix}yts
├ ${prefix}ytmp3
├ ${prefix}ytmp4
├ ${prefix}twdl
├ ${prefix}fbdl
└ ${prefix}mediafire
${readmore}
╭「 *𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐂𝐎𝐄𝐒* 」
├ ${prefix}get
├ ${prefix}translate
├ ${prefix}volumereq
├ ${prefix}bassreq
└ ${prefix}temporeq

╭「 *𝐁𝐀𝐍𝐂𝐎 𝐃𝐄 𝐃𝐀𝐃𝐎𝐒* 」
├ ${prefix}setcmd
├ ${prefix}listcmd
├ ${prefix}delcmd
├ ${prefix}lockcmd
├ ${prefix}addmsg
├ ${prefix}listmsg
├ ${prefix}delmsg
└ ${prefix}getmsg
${readmore}
╭「 *𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒* 」
├ ${prefix}sticker
├ ${prefix}stickerwm
├ ${prefix}smeme
├ ${prefix}emojimix
├ ${prefix}emojimix2
├ ${prefix}attp
├ ${prefix}styletext
├ ${prefix}toimg
├ ${prefix}tovideo
├ ${prefix}toaudio
├ ${prefix}tomp3
├ ${prefix}tovn
├ ${prefix}togif
├ ${prefix}tourl
├ ${prefix}bass
├ ${prefix}blown
├ ${prefix}deep
├ ${prefix}earrape
├ ${prefix}fast
├ ${prefix}fat
├ ${prefix}nightcore
├ ${prefix}reverse
├ ${prefix}robot
├ ${prefix}slow
├ ${prefix}smooth
├ ${prefix}tupai
├ ${prefix}removebg
└ ${prefix}estetik

╭「 *𝐀𝐍𝐈𝐌𝐄* 」
├ ${prefix}waifu
├ ${prefix}cry
├ ${prefix}kill
├ ${prefix}hug
├ ${prefix}pat
├ ${prefix}lick
├ ${prefix}kiss
├ ${prefix}bite
├ ${prefix}yeet
├ ${prefix}neko
├ ${prefix}bully
├ ${prefix}bonk
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}nom
├ ${prefix}slap
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}awoo
├ ${prefix}blush
├ ${prefix}smug
├ ${prefix}glomp
├ ${prefix}happy
├ ${prefix}dance
├ ${prefix}cringe
├ ${prefix}cuddle
├ ${prefix}highfive
├ ${prefix}shinobu
├ ${prefix}megumin
└ ${prefix}handhold

╭「 *𝐄𝐃𝐈𝐂𝐎𝐄𝐒 𝐈𝐌𝐆* 」
├ ${prefix}ktpmaker
├ ${prefix}candy
├ ${prefix}christmas
├ ${prefix}3dchristmas
├ ${prefix}sparklechristmas
├ ${prefix}deepsea
├ ${prefix}scifi
├ ${prefix}rainbow
├ ${prefix}waterpipe
├ ${prefix}spooky
├ ${prefix}pencil
├ ${prefix}circuit
├ ${prefix}discovery
├ ${prefix}metalic
├ ${prefix}fiction
├ ${prefix}demon
├ ${prefix}transformer
├ ${prefix}berry
├ ${prefix}thunder
├ ${prefix}magma
├ ${prefix}3dstone
├ ${prefix}neonlight
├ ${prefix}glitch
├ ${prefix}harrypotter
├ ${prefix}brokenglass
├ ${prefix}papercut
├ ${prefix}watercolor
├ ${prefix}multicolor
├ ${prefix}neondevil
├ ${prefix}underwater
├ ${prefix}graffitibike
├ ${prefix}snow
├ ${prefix}cloud
├ ${prefix}honey
├ ${prefix}ice
├ ${prefix}fruitjuice
├ ${prefix}biscuit
├ ${prefix}wood
├ ${prefix}chocolate
├ ${prefix}strawberry
├ ${prefix}matrix
├ ${prefix}blood
├ ${prefix}dropwater
├ ${prefix}toxic
├ ${prefix}lava
├ ${prefix}rock
├ ${prefix}bloodglas
├ ${prefix}hallowen
├ ${prefix}darkgold
├ ${prefix}joker
├ ${prefix}wicker
├ ${prefix}firework
├ ${prefix}skeleton
├ ${prefix}blackpink
├ ${prefix}sand
├ ${prefix}glue
├ ${prefix}1917
└ ${prefix}leaves

╭「 *𝐆𝐑𝐔𝐏𝐎𝐒* 」
├ ${prefix}linkgroup
├ ${prefix}revoke
├ ${prefix}kick
├ ${prefix}add
├ ${prefix}promote
├ ${prefix}demote
├ ${prefix}setname
├ ${prefix}setdesk
├ ${prefix}setppgrup
├ ${prefix}tagall
├ ${prefix}hidetag
├ ${prefix}hidetag2
├ ${prefix}totag
└ ${prefix}ephemeral

╭「 *𝐃𝐎𝐍𝐎 𝐁𝐎𝐓* 」
├ ${prefix}bc
├ ${prefix}bcgc
├ ${prefix}bcpvtchat
├ ${prefix}chat
├ ${prefix}join
├ ${prefix}culik
├ ${prefix}leave
├ ${prefix}block
├ ${prefix}unblock
├ ${prefix}setppbot
├ ${prefix}setexif
├ ${prefix}self
├ ${prefix}public
├ ${prefix}reaction
└ ${prefix}getcs
`
  let btnn = [ 
     {quickReplyButton: {displayText: '𝐒𝐓𝐀𝐓𝐔𝐒✅', id: 'ping'}}, 
     {quickReplyButton: {displayText: '𝐃𝐎𝐍𝐎 🔥', id: 'owner'}},
     {quickReplyButton: {displayText: '𝐒𝐔𝐏𝐎𝐑𝐓𝐄 🤖', id: 'suporte'}}
  ]
  let templateMessage = {
  document: global.thumb,
  fileName: global.packname,
  mimetype: 'application/pptx',
  jpegThumbnail: global.thumb,
  caption: `${menunya}`,
  footer: '𝙀𝙨𝙩𝙚 𝙗𝙤𝙩 𝙖𝙞𝙣𝙙𝙖 𝙚 𝘽𝙚𝙩𝙖 𝙈𝘿\n𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙖𝙟𝙪𝙙𝙚, 𝙨𝙚 𝙝𝙤𝙪𝙫𝙚𝙧 𝙪𝙢 𝙚𝙧𝙧𝙤 𝙧𝙚𝙥𝙤𝙧𝙩𝙚 𝙪𝙨𝙖𝙣𝙙𝙤 𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙤𝙪 𝙚𝙣𝙩𝙧𝙚 𝙚𝙢 𝙘𝙤𝙣𝙩𝙖𝙩𝙤 𝙘𝙤𝙢 𝙙𝙤𝙣𝙤\n\n© 𝕷𝖚𝖆𝖓 𝕻𝖊𝖗𝖊𝖎𝖗𝖆',
  templateButtons: btnn
  }
  izuku.sendMessage(m.chat, templateMessage, {quoted: ftroli})
  }
  break
case 'suporte': {
  try {
  let ingfo = `╭「 *𝐒𝐔𝐏𝐎𝐑𝐓𝐄 24/7* 」
├ 𝐋𝐍 𝐂𝐨𝐦𝐩𝐚𝐧𝐲 𝐂𝐡𝐚𝐭
├ 𝐋𝐮𝐚𝐧 𝐏𝐞𝐫𝐞𝐢𝐫𝐚 - 𝐃𝐞𝐯
└ 𝐈𝐳𝐮𝐤𝐮 𝐌𝐃
`
  let btn = [
     {quickReplyButton: {displayText: '𝐒𝐭𝐚𝐭𝐮𝐬 𝐁𝐨𝐭🤖', id: 'ping'}},
     {quickReplyButton: {displayText: '𝐃𝐨𝐧𝐨🔥', id: 'owner'}}
  ]
  izuku.sendButtonDocumen(m.chat, ingfo, global.ownerName, btn, m)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'owner': {
  try {
  izuku.sendContact(m.chat, global.ownerNumber, ftroli)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'listpc': {
  try {
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
  let teks = `╭「 *𝐋𝐢𝐬𝐭𝐚 𝐃𝐞 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐬* 」\n└ 𝐓𝐨𝐭𝐚𝐥 𝐃𝐞 𝐂𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐬 : ${anu.length}\n\n`
  for (let i of anu) {
  let nama = store.messages[i].array[0].pushName
      teks += `╭ *𝐍𝐨𝐦𝐞 :* ${nama}\n├ *𝐔𝐬𝐮𝐚𝐫𝐢𝐨 :* @${i.split('@')[0]}\n└ *𝐂𝐡𝐚𝐭 :* https://wa.me/${i.split('@')[0]}\n\n──────────────────\n\n`
  }
  izuku.sendTextWithMentions(m.chat, teks, m)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'listgc': {
  try {
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
  let teks = `╭「 *𝐋𝐢𝐬𝐭𝐚 𝐆𝐫𝐮𝐩𝐨𝐬* 」\n└ 𝐓𝐨𝐭𝐚𝐥 𝐆𝐫𝐮𝐩𝐨𝐬 : ${anu.length} 𝐆𝐫𝐮𝐩𝐨\n\n`
  for (let i of anu) {
  let metadata = await izuku.groupMetadata(i)
      teks += `╭ *𝐍𝐨𝐦𝐞 :* ${metadata.subject}\n├ *𝐃𝐨𝐧𝐨 𝐃𝐨 𝐆𝐫𝐮𝐩𝐨 :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Desconhecido'}\n├ *ID :* ${metadata.id}\n├ *𝐂𝐫𝐢𝐚𝐝𝐨 𝐞𝐦 :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n└ *𝐌𝐞𝐦𝐛𝐫𝐨𝐬 :* ${metadata.participants.length}\n\n──────────────────\n\n`
  }
  izuku.sendTextWithMentions(m.chat, teks, m)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'apagar': case 'del': case 'd': {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!isBaileys) return m.reply('𝐍𝐚𝐨 𝐟𝐮𝐢 𝐞𝐮 𝐪𝐮𝐞 𝐞𝐧𝐯𝐢𝐞𝐢 𝐚 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 𝐜𝐨𝐦𝐨 𝐞 𝐪𝐮𝐞 𝐞𝐮 𝐯𝐨𝐮 𝐚𝐩𝐚𝐠𝐚𝐫!')
  izuku.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
  }
  break
case 'scb': {
  try {
  fkatalog('Desculpe, mana, este script de bot ainda é privado, talvez mais tarde eu compartilhe o script')
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'request': case 'reqfitur': case 'reqf': {
  if (!args.join(" ")) return m.reply(`𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} 𝐀𝐝𝐢𝐜𝐢𝐨𝐧𝐚𝐫 𝐫𝐞𝐜𝐮𝐫𝐬𝐨 𝐝𝐞 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝`)
  try {
  teks = `╭「 *𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐜𝐚𝐨 𝐃𝐞 𝐑𝐞𝐜𝐮𝐫𝐬𝐨* 」\n├ 𝐍𝐮𝐦𝐞𝐫𝐨 : @${m.sender.split("@")[0]}\n└ 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐫 : ${args.join(" ")}`
  for (let i of global.ownerNumber) {
  izuku.sendMessage(i + "@s.whatsapp.net", {text: teks, mentions:[m.sender]}, {quoted:m})
  }
  izuku.sendMessage(m.chat, {text: global.mess.sukses, mentions:[m.sender]}, {quoted: m})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'report': case 'lapor': {
  if (!args.join(" ")) return m.reply(`𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Baixe O Recurso De Erro De Reprodução`)
  try {
  teks = `╭「 *Relatório De Erro* 」\n├ Número : @${m.sender.split("@")[0]}\n└ Relatório : ${args.join(" ")}`
  for (let i of global.ownerNumber) {
  izuku.sendMessage(i + "@s.whatsapp.net", {text: teks, mentions:[m.sender]}, {quoted:m})
  }
  izuku.sendMessage(m.chat, {text: global.mess.sukses, mentions:[m.sender]}, {quoted:m})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  try {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
️Velocidade de resposta ${latensi.toFixed(4)} _Segundo_ \n ${oldd - neww} _milissegundos_\nTempo de execução : ${runtime(process.uptime())}

💻 Informações do servidor
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_Uso de memória NodeJS_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Uso total da CPU_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.reply(respon)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
//Owner Menu
case 'bcgc': case 'bcgroup': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Texto*`)
  let getGroups = await izuku.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  for (let i of anu) {
  await sleep(8000)
  let tksbc = `「 *TRANSMISSÃO* 」\n\n${text}`
  let btnn = [
     {quickReplyButton: {displayText: 'Status Bot🤖', id: 'ping'}},
     {quickReplyButton: {displayText: 'Dono🔥', id: 'owner'}},
     {quickReplyButton: {displayText: 'Suporte👋', id: 'suporte'}},
     {quickReplyButton: {displayText: 'Grupo OFc', id: 'scb'}}
  ]
  let templateMessage = {
  document: global.thumb,
  fileName: global.packname,
  mimetype: 'application/pdf',
  fileLength: 0,
  jpegThumbnail: global.thumb,
  caption: `${tksbc}`,
  footer: global.ownerName,
  templateButtons: btnn
  }
  izuku.sendMessage(i, templateMessage)
  }
  m.reply(mess.sukses)
  }
  break
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Texto*`)
  let anu = await store.chats.all().map(v => v.id)
  let getGroups = await izuku.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anuan = groups.map(v => v.id)
  for (let yoy of anu && anuan) {
  const template = generateWAMessageFromContent(yoy, proto.Message.fromObject({ 
   templateMessage: { 
    hydratedTemplate: { 
     hydratedContentText: `「 *TRANSMISSÃO* 」\n\n${text}`, 
     locationMessage: {
     jpegThumbnail: global.thumb }, 
     hydratedFooterText: global.ownerName, 
     hydratedButtons: [
     {quickReplyButton: {displayText: 'Status Bot🤖', id: 'ping'}}, 
     {quickReplyButton: {displayText: 'Dono🔥', id: 'owner'}}
     ]
    }
   }
  }), { userJid: m.chat });
  izuku.relayMessage(yoy, template.message, { messageId: template.key.id } )
  }
  m.reply(mess.sukses)
  }
  break
case 'bchat': case 'bcpvtchat': case 'bcchat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Texto*`)
  let anunuan = await store.chats.all().map(v => v.id)
  for (let yoi of anunuan) {
  const template = generateWAMessageFromContent(yoi, proto.Message.fromObject({ 
   templateMessage: { 
    hydratedTemplate: { 
     hydratedContentText: `「 *TRANSMISSÃO* 」\n\n${text}`, 
     locationMessage: {
     jpegThumbnail: global.thumb }, 
     hydratedFooterText: global.ownerName, 
     hydratedButtons: [
     {quickReplyButton: {displayText: 'Status Bot🤖', id: 'ping'}},
     {quickReplyButton: {displayText: 'Dono🔥', id: 'owner'}}
     ]
    }
   }
  }), { userJid: m.chat });
  izuku.relayMessage(yoi, template.message, { messageId: template.key.id } )
  }
  m.reply(mess.sukses)
  }
  break
case 'chat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply('*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete*')
  try {
  if (args[0] === 'mute') {
    izuku.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'unmute') {
    izuku.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'archive') {
    izuku.chatModify({ archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'unarchive') {
    izuku.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'read') {
    izuku.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'unread') {
    izuku.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'apagar') {
    izuku.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
  }
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'join': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply('Digite o link do grupo!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Links inválidos!')
  m.reply(mess.wait)
  try {
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await izuku.groupAcceptInvite(result).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(mess.error))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'culik': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  try {
  let pantek = []
  for (let mem of participants) {
  pantek.push(mem.jid)
  }
  izuku.groupParticipantsUpdate(args[0], pantek)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'leave': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  try {
  await izuku.groupLeave(m.chat).then((res) => m.reply('Ver você de novo\nIzuku-Bot Saindo em breve\nPorque o dono mandou')).catch((err) => m.reply(mess.error))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'block': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await izuku.updateBlockStatus(users, 'block').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(mess.error))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'unblock': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await izuku.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(mess.error))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'setppbot': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!quoted) throw `Mandar/m.reply Imagem com legenda ${prefix + command}`
  if (!/image/.test(mime)) throw `Mandar/m.reply Imagem com legenda ${prefix + command}`
  if (/webp/.test(mime)) throw `Mandar/m.reply Imagem com legenda ${prefix + command}`
  m.reply(mess.wait)
  try {
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  await izuku.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.sukses)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'setexif': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply(`*Contoh : ${prefix + command} packname|author*`)
  try {
  global.packname = text.split("|")[0]
  global.author = text.split("|")[1]
  m.reply(`╭ Nome do pacote : ${global.packname}\n└ Author : ${global.author}`)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  try {
  izuku.public = true
  m.reply(mess.sukses)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  try {
  izuku.self = false
  m.reply(mess.sukses)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'react': case 'reaction': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  try {
  reactionMessage = {
    react: {
      text: args[0],
      key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
  }
  izuku.sendMessage(m.chat, reactionMessage)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'getcase': case 'getcs': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!args[0]) return m.reply("Qual case você quer pegar??")
  try {
  m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./command/izuku.js').toString().split(`case '${args[0]}'`)[1].split(rfx)[0] + rfx)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
//Group Menu
case 'linkgc': case 'linkgrup': case 'linkgroup': case 'linkgroups': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  try {
  let response = await izuku.groupInviteCode(m.chat)
  izuku.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'revoke': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  try {
  await izuku.groupRevokeInvite(from)
  m.reply(mess.sukses)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'kick': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Quem quer ser removido???')
  if (args[0].startsWith('08')) return m.reply('Use o código do país 55')
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await izuku.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'add': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Quem você quer adicionar??')
  if (args[0].startsWith('08')) return m.reply('Use o código do país 55 mano')
  try {
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await izuku.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'promote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Quem que você quer promover como adm??')
  if (args[0].startsWith('08')) return m.reply('Use o código do país 55 mano')
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await izuku.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'demote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Quem que você quer remover o adm??')
  if (args[0].startsWith('08')) return m.reply('Use o código do país 55 mano')
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await izuku.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'setname': case 'setsubject': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Texto*`)
  try {
  await izuku.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'setdesc': case 'setdesk': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Texto*`)
  try {
  await izuku.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Enviar/Responder imagem com legenda ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Enviar/Responder imagem com legenda ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Enviar/Responder imagem com legenda ${prefix + command}`)
  try {
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  await izuku.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
  m.reply(mess.sukses)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'tagall': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  try {
  let teks = `╭ *𝐌𝐚𝐫𝐜𝐚𝐧𝐝𝐨 𝐓𝐨𝐝𝐨𝐬*\n└ *𝐌𝐞𝐧𝐬𝐬𝐚𝐠𝐞𝐦 : ${q ? q : 'Vazio'}*\n\n`
  for (let mem of participants) {
  teks += `•> @${mem.id.split('@')[0]}\n`
  }
  izuku.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  try {
  izuku.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'hidetag2': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  try {
  if (/sticker/.test(mime)) {
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  izuku.sendMessage(m.chat, { sticker : fs.readFileSync(media), mentions: participants.map(a => a.id)}, { quoted: ftroli })
  await fs.unlinkSync(media)
  } else if (/image/.test(mime)) {
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  izuku.sendMessage(m.chat, { image : fs.readFileSync(media), caption:m.quoted ? m.quoted.caption : "", mentions: participants.map(a => a.id)}, { quoted: ftroli })
  await fs.unlinkSync(media)
  } else if (/video/.test(mime)) {
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  izuku.sendMessage(m.chat, { video : fs.readFileSync(media), mimetype:"video/mp4", caption:m.quoted ? m.quoted.caption : "", mentions: participants.map(a => a.id)}, { quoted: ftroli })
  await fs.unlinkSync(media)
  } else if (/audio/.test(mime)) {
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  izuku.sendMessage(m.chat, { audio : fs.readFileSync(media), mimetype:"audio/mp4", ptt:true, mentions: participants.map(a => a.id)}, { quoted: ftroli })
  await fs.unlinkSync(media)
  } else {
  izuku.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftroli })
  }
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'totag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!m.quoted) return m.reply(`Responder mensagem com legenda ${prefix + command}`)
  try {
  izuku.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'ephemeral': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply('Insira o valor enable/disable')
  try {
  if (args[0] === 'enable') {
  await izuku.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await izuku.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  }
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'group': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply('Insira o valor open/close')
  try {
  if (args[0] === 'close'){
  await izuku.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await izuku.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${prefix + command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${prefix + command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await izuku.sendButtonText(m.chat, buttonsgroup, `Modo Abrir/Fechar Grupo️`, `Por Favor Clique No Botão Abaixo, Se O Botão Não Aparecer, Digite ${command} open/close`, m)
  }
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isOwner && !m.key.fromMe) return m.reply(mess.admin)
  if (!text) return m.reply('Insira o valor open/close')
  try {
  if (args[0] === 'open'){
  await izuku.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await izuku.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(mess.sukses)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${prefix + command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${prefix + command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await izuku.sendButtonText(m.chat, buttons, `Modo De Edição De Informações Do Grupo`, `Por Favor Clique No Botão Abaixo, Se O Botão Não Aparece, Digita ${command} open/close`, m)
  }
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
//Converter Menu
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
  if (!quoted) return m.reply(`Responder vídeo/imagem com legenda ${prefix + command}`)
  m.reply(mess.wait)
  try {
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await izuku.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo de 10 segundos!')
  let media = await quoted.download()
  let encmedia = await izuku.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 1-9 Segundo`
  }
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'stikerwm': {
  if (!m.quoted) throw m.reply(`Responder vídeo/imagem com legenda ${prefix + command} Texto|Texto`)
  let [teks1, teks2] = text.split`|`
  if (!teks1) return m.reply(`Enviar/responder imagem/vídeo com legenda ${prefix + command} texto 1|texto2`)
  if (!teks2) return m.reply(`Enviar/responder imagem/vídeo com legenda ${prefix + command} texto 1|texto2`)
  m.reply(mess.wait)
  try {
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await izuku.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo de 10 segundos!')
  let media = await quoted.download()
  let encmedia = await izuku.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
  await fs.unlinkSync(encmedia)
  } else {
    throw `Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 1-9 Segundo`
  }
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
  if (!/image/.test(mime)) return m.reply(`Mandar/reply Imagem/sticker Com legenda ${prefix + command} Texto|Texto`)
  if (!text) return m.reply(`Mandar/reply Imagem/sticker Com legenda ${prefix + command} Texto|Texto`)
  m.reply(mess.wait)
  try {
  atas = text.split('|')[0] ? text.split('|')[0] : '-'
  bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let dwnld = await quoted.download()
  let inni = await floNime(dwnld)
  let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${inni.result.url}`
  let encmedia = await izuku.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
  await fs.unlinkSync(encmedia)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break     
case 'emojimix': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} 😅+😊*`)
  let [emoji1, emoji2] = text.split`+`
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
  for (let res of anu.results) {
  let encmedia = await izuku.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
  await fs.unlinkSync(encmedia)
  }
  }
  break 
case 'emojimix2': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} 😅*`)
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
  for (let res of anu.results) {
  let encmedia = await izuku.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
  await fs.unlinkSync(encmedia)
  }
  }
  break
case 'attp': case 'ttp': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Texto*`)
  try {
  await izuku.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'RoF3X-MD', '© FxSx', m, {asSticker: true})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'style': case 'styletext': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Texto*`)
  try {
  let anu = await styletext(text)
  let teks = `Estilo de texto de ${text}\n\n`
  for (let i of anu) {
  teks += `•> *${i.name}* : ${i.result}\n\n`
  }
  m.reply(teks)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'imagenobg': case 'removebg': case 'remove-bg': {
  if (!m.quoted) return m.reply(`Enviar/Responder imagem com legenda ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Enviar/Responder imagem com legenda ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Enviar/responder adesivo com legenda ${prefix + command}`)
  let remobg = require('remove.bg')
  let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
  let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
  hmm = await './src/remobg-' + getRandom('')
  localFile = await izuku.downloadAndSaveMediaMessage(quoted, hmm)
  console.log(localFile)
  outputFile = await './src/hremo-' + getRandom('.png')
  m.reply(mess.wait)
  try {
  remobg.removeBackgroundFromImageFile({
  path: localFile,
  apiKey: apinobg,
  size: "regular",
  type: "auto",
  scale: "100%",
  outputFile
  }).then(async (result) => {
  console.log(`File saved to ${outputFile}`);
  await izuku.sendMessage(m.chat, {
  image: fs.readFileSync(outputFile),
  caption: '*Sucesso*'
  }, {
  quoted: m
  })
  const base64img = result.base64img;
  await sleep(7000)
  await fs.unlinkSync(localFile)
  await fs.unlinkSync(outputFile)
  }).catch((errors) => {
  console.log(JSON.stringify(errors));
  });
  } catch (err) {
  m.reply(util.format(err))
  await fs.unlinkSync(localFile)
  }
  }
  break
case 'estetik': {
  if (!m.quoted) return reply(`Enviar/Responder imagem com legenda ${prefix + command}`)
  if (!/image/.test(mime)) return reply(`Enviar/Responder imagem com legenda ${prefix + command}`)
  if (/webp/.test(mime)) return reply(`Enviar/responder adesivo com legenda ${prefix + command}`)
  let remobg = require('remove.bg')
  let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
  let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
  hmm = await './src/remobg-' + getRandom('')
  localFile = await izuku.downloadAndSaveMediaMessage(quoted, hmm)
  outputFile = './src/hremo-' + getRandom('.png')
  m.reply(mess.wait)
  try {
  remobg.removeBackgroundFromImageFile({
  path: localFile,
  apiKey: apinobg,
  size: "regular",
  type: "auto",
  scale: "100%",
  outputFile
  }).then(async result => {
  console.log(outputFile)
  let tes = await fs.readFileSync(outputFile)
  let anu = await TelegraPh(outputFile)
  console.log(anu)
  let hsil = await getBuffer(`https://oni-chan.my.id/api/Fmake/estetik?picturl=${anu}`)
  await sleep(9000)
  await izuku.sendMessage(m.chat, {image: hsil, caption: global.mess.sukses}, {quoted: m})
  await sleep(15000)
  await fs.unlinkSync(localFile)
  await fs.unlinkSync(outputFile)
  })
  } catch (err) {
  m.reply(util.format(err))
  await fs.unlinkSync(localFile)
  }
  }
  break
case 'toimage': case 'toimg': {
  if (!m.quoted) return m.reply('Responder adesivo')
  if (!/webp/.test(mime)) return m.reply(`Responder adesivo com legenda *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  izuku.sendMessage(m.chat, { image: buffer, caption: global.mess.sukses}, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break
case 'tomp4': case 'tovideo': {
  if (!m.quoted) return m.reply('Responder gif de adesivo')
  if (!/webp/.test(mime)) return m.reply(`Responder ao adesivo gif com legenda *${prefix + command}*`)
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await izuku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: global.mess.sukses} }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'toaud': case 'toaudio': {
  if (m.quoted) return m.reply(`Envie/responda o vídeo/áudio que deseja usar como áudio com legenda ${prefix + command}`)
  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Envie/responda o vídeo/áudio que deseja usar como áudio com legenda ${prefix + command}`)
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  izuku.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mp4'}, { quoted : m })
  }
  break
case 'tomp3': {
  if (!m.quoted) return m.reply(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
  if (/document/.test(mime)) return m.reply(`Kirim/Responder Vídeo/Áudio Quem Quer Ser MP3 Com Legenda ${prefix + command}`)
  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  izuku.sendMessage(m.chat, {document: audio, mimetype: 'audio/mp4', fileName: `Converter por ${izuku.user.name}.mp3`}, { quoted : m })
  }
  break
case 'tovn': case 'toptt': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Responda ao vídeo/áudio que você deseja ser VN com legenda ${prefix + command}`)
  if (!m.quoted) return m.reply(`Responda ao vídeo/áudio que você deseja ser VN com legenda ${prefix + command}`)
  m.reply(mess.wait)
  let media = await quoted.download()
  let { toPTT } = require('../lib/converter')
  let audio = await toPTT(media, 'mp4')
  izuku.sendMessage(m.chat, {audio: audio, mimetype:'audio/mp4', ptt:true }, {quoted: m})
  }
  break
case 'togif': {
  if (!quoted) throw 'Imagem de resposta'
  if (!/webp/.test(mime)) throw `Responder adesivo com legenda *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await izuku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: global.mess.sukses}, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
case 'tourl': {
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
  try {
  let set
  if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
  if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
  if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
  if (/earrape/.test(command)) set = '-af volume=12'
  if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
  if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
  if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
  if (/reverse/.test(command)) set = '-filter_complex "areverse"'
  if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
  if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
  if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
  if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
  if (/audio/.test(mime)) {
  m.reply(mess.wait)
  let media = await izuku.downloadAndSaveMediaMessage(quoted)
  let ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(err)
  let buff = fs.readFileSync(ran)
  izuku.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
  fs.unlinkSync(ran)
  })
  } else m.reply(`Responda ao áudio que deseja alterar com uma legenda *${prefix + command}*`)
  } catch (err) {
  m.reply(mess.error)
  }
  break
//Maker Menu
case 'ktpmaker': {
  if (args.length == 0) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 :\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar*`)
  get_args = args.join(" ").split("|")
  nik = get_args[0]
  if (!nik) return m.reply('Número de identificação da família, certifique-se de que não se pareça com o NIKE original, ok?')
  prov = get_args[1]
  if (!prov) return m.reply('qual província')
  kabu = get_args[2]
  if (!kabu) return m.reply('qual bairro você é?')
  name = get_args[3]
  if (!name) return m.reply('qual o seu nome')
  ttl = get_args[4]
  if (!ttl) return m.reply('local de nascimento data')
  jk = get_args[5]
  if (!jk) return m.reply('sexo masculino ou feminino')
  jl = get_args[6]
  if (!jl) return m.reply('Qual é o seu endereço?')
  rtrw = get_args[7]
  if (!rtrw) return m.reply('Quantos RT/RW sis')
  lurah = get_args[8]
  if (!lurah) return m.reply('qual vila você é?')
  camat = get_args[9]
  if (!camat) return m.reply('qual bairro você é?')
  agama = get_args[10]
  if (!agama) return m.reply('qual é a sua religião')
  nikah = get_args[11]
  if (!nikah) return m.reply('sem status ainda')
  kerja = get_args[12]
  if (!kerja) return m.reply('nenhum trabalho ainda')
  warga = get_args[13]
  if (!warga) return m.reply('nenhuma região aindaa')
  until = get_args[14]
  if (!until) return m.reply('O tempo de expiração ainda não existe')
  gd = get_args[15]
  if (!gd) return m.reply('sem grupo sanguíneo')
  img = get_args[16]
  if (!img) return m.reply('O URL da imagem ainda não existe')
  m.reply(mess.wait)
  bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
  console.log(bikin)
  ardaktp = await getBuffer(bikin)
  await sleep(8000)
  await izuku.sendMessage(m.chat, { image: ardaktp, caption: global.mess.sukses }, { quoted: m })
  }
  break;
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Texto*`) 
  m.reply(mess.wait)
  let link
  if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
  if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
  if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
  if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
  if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
  if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
  if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
  if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
  if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
  if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
  if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
  if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
  if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
  if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
  if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
  if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
  if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
  if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
  if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
  if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
  if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
  if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
  if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
  if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
  if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
  if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
  if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
  if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
  if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
  if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
  if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
  if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
  if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
  if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
  if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
  if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
  if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
  if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
  if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
  if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
  if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
  if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
  if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
  if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
  if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
  if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
  if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
  if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
  if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
  if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
  if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
  if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
  if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
  if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
  if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
  if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
  if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
  let anu = await maker.textpro(link, text)
  izuku.sendMessage(m.chat, { image: { url: anu }, caption: global.mess.sukses }, { quoted: m })
  }
  break
//𝐇𝐄𝐍𝐓𝐀𝐈
  case 'hentai': 
m.reply(mess.wait)
 buffer = `https://brizas-api.herokuapp.com/random/hentai/pussy?apikey=izuku10`
izuku.sendMessage(m.chat, { image: { url: buffer }, caption: global.mess.suckess }, { quoted: m })
 case 'hentai2': 
m.reply(mess.wait)
 buffer = `https://brizas-api.herokuapp.com/random/hentai/creampie?apikey=izuku10`
izuku.sendMessage(m.chat, { image: { url: buffer }, caption: global.mess.suckess }, { quoted: m })
break
 case 'hentai3': 
m.reply(mess.wait)
 buffer = `https://brizas-api.herokuapp.com/random/hentai/tentacles?apikey=izuku10`
izuku.sendMessage(m.chat, { image: { url: buffer }, caption: global.mess.suckess }, { quoted: m })
break
 case 'hentai4': 
m.reply(mess.wait)
 buffer = `https://brizas-api.herokuapp.com/random/hentai/manga?apikey=izuku10`
izuku.sendMessage(m.chat, { image: { url: buffer }, caption: global.mess.suckess }, { quoted: m })
break
 case 'hentai5': 
m.reply(mess.wait)
 buffer = `https://brizas-api.herokuapp.com/random/hentai/incest?apikey=lizuku10`
izuku.sendMessage(m.chat, { image: { url: buffer }, caption: global.mess.suckess }, { quoted: m })
break
 case 'hentaigif': 
m.reply(mess.wait)
 buffer = `https://brizas-api.herokuapp.com/random/hentai/hentaigif?apikey=lizuku10`
izuku.sendMessage(m.chat, { image: { url: buffer }, caption: global.mess.suckess }, { quoted: m })
break
//Random
case 'jodohku': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let me = m.sender
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let jawab = `Sua parceira(o) é\n\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n\nFelicidades ao casal`
  let ments = [me, jodoh]
  let buttons = [{buttonId: 'jodohku', buttonText: {displayText: 'Jodohku' }, type: 1 }]
  izuku.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: ments})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'jadian': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let jawab = `Aham Algo Aconteceu Aqui\n\n@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}\n\nVocê pode obter o imposto?`
  let menst = [orang, jodoh]
  let buttons = [{buttonId: 'jadian', buttonText: {displayText: 'Jadian' }, type: 1 }]
  izuku.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: menst})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'beban': case 'bebangc': case 'bbngc': case 'bbn': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let bn = member[Math.floor(Math.random() * member.length)]
  let jawab = `Quer ver a carga do grupo?${readmore}\n\n@${bn.split('@')[0]}`
  let menst = [bn]
  let buttons = [{buttonId: 'beban', buttonText: {displayText: 'Fardo' }, type: 1 }]
  izuku.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: ments})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'yatim': case 'ytem': case 'nggapunyabapak': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let ytm = member[Math.floor(Math.random() * member.length)]
  let jawab = `Órfãos de Yahaha\n\n@${ytm.split('@')[0]}`
  let menst = [ytm]
  let buttons = [{buttonId: 'yatim', buttonText: {displayText: 'Yatim' }, type: 1 }]
  izuku.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: menst})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'bonito': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let tng = member[Math.floor(Math.random() * member.length)]
  let jawab = `Bonito\n\n@${tng.split('@')[0]}\n\nTua mae não te vende não ²`
  let menst = [tng]
  let buttons = [{buttonId: 'bonito', buttonText: {displayText: 'Bonito' }, type: 1 }]
  izuku.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: menst})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'lindo': {
  if (!m.isGroup) return m.reply(mess.group)
  try {
  let member = participants.map(u => u.id)
  let ctk = member[Math.floor(Math.random() * member.length)]
  let jawab = `Dede Gemes aqui\n\n@${ctk.split('@')[0]}\n\nCalma ae lindão 🤣`
  let menst = [ctk]
  let buttons = [{buttonId: 'lindo', buttonText: {displayText: 'Lindo' }, type: 1 }]
  izuku.sendButtonText(m.chat, buttons, jawab, global.ownerName, m, {mentions: menst})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'pinterest': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Naruto*`)
  m.reply(mess.wait)
  try {
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐚 𝐈𝐦𝐚𝐠𝐞𝐦♻️'}, type: 1}]
  izuku.sendMessage(m.chat, { image: { url: result }, caption: 'Link da imagen : '+result, buttons: buttonspinterest }, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'wallpaper': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Naruto HD*`)
  m.reply(mess.wait)
  try {
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `${prefix + command} ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}]
  izuku.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'quotesanime': {
  m.reply(mess.wait)
  try {
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐚𝐬 𝐂𝐨𝐭𝐚𝐜𝐨𝐞𝐬'}, type: 1}]
  izuku.sendButtonText(m.chat, buttonsquotes, `${result.quotes}\n\n𝐁𝐲 : ${result.karakter}`, global.ownerName, m)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'wikimedia': {
  if (!text) throw '𝐓𝐢𝐭𝐮𝐥𝐨 𝐃𝐚 𝐂𝐨𝐧𝐬𝐮𝐥𝐭𝐚'
  try {
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `${prefix + command} ${text}`, buttonText: {displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐨 𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `╭ 𝐓𝐢𝐭𝐮𝐥𝐨 : ${result.title}\n├ 𝐅𝐨𝐧𝐭𝐞 : ${result.source}\n└ 𝐋𝐢𝐧𝐤 𝐃𝐚 𝐈𝐦𝐚𝐠𝐞𝐧 : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  izuku.sendMessage(m.chat, buttonMessage, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'kucing': {
  m.reply(mess.wait)
  try {
  nnnyaa = fs.readFileSync('./lib/kucing.js');
  jsonData = JSON.parse(nnnyaa);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  cingall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ image: cingall }, { upload: izuku.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    imageMessage: message.imageMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: global.ownerName,
     hydratedButtons: [{
     callButton: {
       displayText: '𝐃𝐨𝐧🔥',
       phoneNumber: '+5511914297086'
     }
  }, {
     quickReplyButton: {
       displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐚 𝐈𝐦𝐚𝐠𝐞𝐦',
       id: 'kucing'
     }
    }]
   }
  }
  }), { userJid: m.chat, quoted: m })
  izuku.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'boneka': {
  m.reply(mess.wait)
  try {
  nyaa = fs.readFileSync('./lib/boneka.js');
  jsonData = JSON.parse(nyaa);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  boneall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ image: boneall }, { upload: izuku.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    imageMessage: message.imageMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: global.ownerName,
     hydratedButtons: [{
     callButton: {
       displayText: '𝐃𝐨𝐧𝐨🔥',
       phoneNumber: '+5511914297086'
     }
  }, {
     quickReplyButton: {
       displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐚 𝐈𝐦𝐚𝐠𝐞𝐦',
       id: 'boneka'
     }
    }]
   }
  }
  }), { userJid: m.chat, quoted: m })
  izuku.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'couple': case 'ppcp': {
  m.reply(mess.wait)
  try {
  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
  let random = anu[Math.floor(Math.random() * anu.length)]
  izuku.sendMessage(m.chat, { image: { url: random.female }, caption: global.mess.sukses }, { quoted: m })
  let buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐚 𝐈𝐦𝐚𝐠𝐞𝐦'}, type: 1}]
  let buttonMessage = {
  image: { url: random.male },
  caption: global.mess.sukses,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  izuku.sendMessage(m.chat, buttonMessage, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'meme': {
  m.reply(mess.wait)
  try {
  nyaa = fs.readFileSync('./lib/meme.js');
  jsonData = JSON.parse(nyaa);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  memeall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ image: memeall }, { upload: izuku.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    imageMessage: message.imageMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: global.ownerName,
     hydratedButtons: [{
     callButton: {
       displayText: '𝐃𝐨𝐧𝐨🔥',
       phoneNumber: '+5511914297086'
     }
  }, {
     quickReplyButton: {
       displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐚 𝐈𝐦𝐚𝐠𝐞𝐦',
       id: 'meme'
     }
    }]
   }
  }
  }), { userJid: m.chat, quoted: m })
  izuku.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'darkjokes': case 'darkjok': case 'darkjoke': {
  m.reply(mess.wait)
  try {
  nyyya = fs.readFileSync('./lib/darkjokes.js');
  jsonData = JSON.parse(nyyya);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  jokall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ image: jokall }, { upload: izuku.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    imageMessage: message.imageMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: global.ownerName,
     hydratedButtons: [{
     callButton: {
       displayText: '𝐃𝐨𝐧𝐨🔥',
       phoneNumber: '+5511914297086'
     }
  }, {
     quickReplyButton: {
       displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐚 𝐈𝐦𝐚𝐠𝐞𝐦',
       id: 'darkjokes'
     }
    }]
   }
  }
  }), { userJid: m.chat, quoted: m })
  izuku.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'cowok': {
  m.reply(mess.wait)
  try {
  ennya = fs.readFileSync('./lib/cowok.js');
  jsonData = JSON.parse(ennya);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  wokall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ image: wokall }, { upload: izuku.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    imageMessage: message.imageMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: global.ownerName,
     hydratedButtons: [{
     callButton: {
       displayText: '𝐃𝐨𝐧𝐨🔥',
       phoneNumber: '+5511914297086'
     }
  }, {
     quickReplyButton: {
       displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐚 𝐈𝐦𝐚𝐠𝐞𝐦',
       id: 'cowok'
     }
    }]
   }
  }
  }), { userJid: m.chat, quoted: m })
  izuku.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'cewek': {
  m.reply(mess.wait)
  try {
  nayyya = fs.readFileSync('./lib/cewek.js');
  jsonData = JSON.parse(nayyya);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  wekall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ image: wekall }, { upload: izuku.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    imageMessage: message.imageMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: global.ownerName,
     hydratedButtons: [{
     callButton: {
       displayText: '𝐃𝐨𝐧𝐨🔥',
       phoneNumber: '+5511914297086'
     }
  }, {
     quickReplyButton: {
       displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐨 𝐈𝐦𝐚𝐠𝐞𝐦',
       id: 'cewek'
     }
    }]
   }
  }
  }), { userJid: m.chat, quoted: m })
  izuku.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'doraemon': {
  m.reply(mess.wait)
  try {
  natyya = fs.readFileSync('./lib/doraemon.js');
  jsonData = JSON.parse(natyya);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  emonall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ image: emonall }, { upload: izuku.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    imageMessage: message.imageMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: global.ownerName,
     hydratedButtons: [{
     callButton: {
       displayText: '𝐃𝐨𝐧𝐨🔥',
       phoneNumber: '+5511914297086'
     }
  }, {
     quickReplyButton: {
       displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐚 𝐈𝐦𝐚𝐠𝐞𝐦',
       id: 'doraemon'
     }
    }]
   }
  }
  }), { userJid: m.chat, quoted: m })
  izuku.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'asupan': {
  m.reply(mess.wait)
  try {
  yyya = fs.readFileSync('./lib/asupan.js');
  jsonData = JSON.parse(yyya);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  supall = await getBuffer(randKey.result)
  let message = await prepareWAMessageMedia({ video: supall }, { upload: izuku.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
   templateMessage: {
    hydratedTemplate: {
    videoMessage: message.videoMessage,
    hydratedContentText: global.mess.sukses,
    hydratedFooterText: global.ownerName,
     hydratedButtons: [{
     callButton: {
       displayText: '𝐃𝐨𝐧𝐨🔥',
       phoneNumber: '+5511914297086'
     }
  }, {
     quickReplyButton: {
       displayText: '𝐏𝐫𝐨𝐱𝐢𝐦𝐨 𝐈𝐦𝐚𝐠𝐞𝐦',
       id: 'asupan'
     }
    }]
   }
  }
  }), { userJid: m.chat, quoted: m })
  izuku.relayMessage(m.chat, template.message, { messageId: template.key.id })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
//Downloader
case 'play': case 'ytplay': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Biu Do Piseiro*`)
  try {
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [
     {buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: '𝐌𝐮𝐬𝐢𝐜𝐚🎵'}, type: 1}, 
     {buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: '𝐕𝐢𝐝𝐞𝐨🎥'}, type: 1}
  ]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: `╭ *𝐓𝐢𝐭𝐮𝐥𝐨 :* ${anu.title}\n├ *𝐃𝐮𝐫𝐚𝐜𝐚𝐨 :* ${anu.timestamp}\n├ *𝐕𝐢𝐬𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐨𝐞𝐬 :* ${anu.views}\n├ *𝐄𝐧𝐯𝐢𝐚𝐝𝐨 :* ${anu.ago}\n├ *𝐂𝐚𝐧𝐚𝐥 :* ${anu.author.url}\n└ *𝐋𝐢𝐧𝐤 :* ${anu.url}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  izuku.sendMessage(m.chat, buttonMessage, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'ytmp4': case 'ytvideo': case 'ytv': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} a ligação 360p*`)
  if (!isUrl(text)) return m.reply('*𝐋𝐢𝐧𝐤 𝐈𝐧𝐯𝐚𝐥𝐢𝐝𝐨⚠️*')
  if (!text.includes('youtube')/('youtu.be')) return m.reply('*𝐋𝐢𝐧𝐤 𝐈𝐧𝐯𝐚𝐥𝐢𝐝𝐨⚠️*')
  await m.reply(mess.wait)
  try {
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('𝐎 𝐚𝐫𝐪𝐮𝐢𝐯𝐨 𝐞𝐱𝐫𝐜𝐞𝐝𝐞 𝐨 𝐥𝐢𝐦𝐢𝐭𝐞, 𝐟𝐚𝐜𝐚 𝐨 𝐝𝐨𝐧𝐰𝐥𝐨𝐚𝐝 𝐯𝐨𝐜𝐞 𝐦𝐞𝐬𝐦𝐨 : '+media.dl_link)
  let captiony = `╭ 𝐓𝐢𝐭𝐮𝐥𝐨 : ${media.title}\n├ 𝐓𝐚𝐦𝐚𝐧𝐡𝐨 : ${media.filesizeF}\n├ URL : ${isUrl(text)}\n├ 𝐅𝐨𝐫𝐦𝐚𝐭𝐨 : Mp4\n└ 𝐑𝐞𝐬𝐨𝐥𝐮𝐜𝐚𝐨 : ${args[1] || '360p'}`
  izuku.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', caption: captiony }, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'ytmp3': case 'ytaudio': case 'yta': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} 𝐥𝐢𝐧𝐤 128kbps*`)
  if (!isUrl(text)) return m.reply('*𝐋𝐢𝐧𝐤 𝐈𝐧𝐯𝐚𝐥𝐢𝐝𝐨⚠️*')
  if (!text.includes('youtube')/('youtu.be')) return m.reply('*𝐋𝐢𝐧𝐤 𝐈𝐧𝐯𝐚𝐥𝐢𝐝𝐨⚠️*')
  await m.reply(mess.wait)
  try {
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('𝐎 𝐚𝐫𝐪𝐮𝐢𝐯𝐨 𝐞𝐱𝐫𝐜𝐞𝐝𝐞 𝐨 𝐥𝐢𝐦𝐢𝐭𝐞 𝐦𝐚𝐱𝐢𝐦𝐨, 𝐟𝐚𝐜𝐚 𝐨 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐯𝐨𝐜𝐞 𝐦𝐞𝐬𝐦𝐨 : '+media.dl_link)
  let captio = `╭ 𝐓𝐢𝐭𝐮𝐥𝐨 : ${media.title}\n├ 𝐓𝐚𝐦𝐚𝐧𝐡𝐨 : ${media.filesizeF}\n├ Url : ${isUrl(text)}\n├ 𝐅𝐨𝐫𝐦𝐚𝐭𝐨 : Mp3\n└ 𝐑𝐞𝐬𝐨𝐥𝐮𝐜𝐚𝐨 : ${args[1] || '128kbps'}`
  izuku.sendImage(m.chat, media.thumb, captio, m)
  izuku.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt: false }, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'yts': case 'ytsearch': {
  m.reply(mess.wait)
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Biu Do Piseiro*`)
  try {
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '╭「 *Dados Obtidos* 」\n└ Palavras-chave : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `╭ Não : ${no++}\n├ Modelo : ${i.type}\n├ ID do vídeo : ${i.videoId}\n├ Título : ${i.title}\n├ Visualizações : ${i.views}\n├ Duração : ${i.timestamp}\n├ Enviado : ${i.ago}\n├ Author : ${i.author.name}\n└ Url : ${i.url}\n\n────────────\n\n`
  }
  izuku.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'twitter': case 'twdl': case 'twmp4': {
  if (!args[0]) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} a ligação*`)
  try {
  let lotwit = await aiovideodl(args[0])
  let tekks = `╭ *Rubrica :* ${lotwit.title ? lotwit.title : "undefined"}\n├ *Modelo :* ${lotwit.medias[1].extension}\n├ *Tamanho :* ${lotwit.medias[1].formattedSize}\n└ *Link :* ${lotwit.medias[1].url}`
  let buttons = [
     {buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Qualidade ${lotwit.medias[0].quality}`}, type: 1},
     {buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Qualidade ${lotwit.medias[2].quality}`}, type: 1}
  ]
  let buttonMessage = {
  video: {url:lotwit.medias[1].url},
  caption: tekks,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  izuku.sendMessage(m.chat, buttonMessage, {quoted:m})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'twddl': {
  try {
  izuku.sendMessage(m.chat, {video:{url:args[0]}, mimetype:"video/mp4", caption: global.mess.sukses}, {quoted: m})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'facebook': case 'fbdl': case 'fbmp4': case 'fb': {
  if (!args[0]) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} A ligação*`)
  try {
  let resd = await aiovideodl(args[0])
  let tekss = `╭ *Modelo :* video/${resd.medias[0].extension}\n├ *Qualidade :* ${resd.medias[0].quality}\n└ *Tamanho :* ${resd.medias[0].formattedSize}`
  let buttons = [
     {buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'Qualidade HD'}, type: 1}
  ]
  let buttonMessage = {
  video: {url:resd.medias[0].url},
  caption: tekss,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  izuku.sendMessage(m.chat, buttonMessage, {quoted:m})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'fbddl': {
  try {
  izuku.sendMessage(m.chat, {video:{url:args[0]}, mimetype:"video/mp4", caption: global.mess.sukses}, {quoted: m})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'mediafire': case 'mdf': {
  if (!args[0]) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} a ligação*`)
  if (!isUrl(args[0])) return m.reply("Onde está o URL??")
  try {
  let fmedi = await mediafire(args[0])
  teksss = `╭ Nome : ${fmedi[0].name}\n├ Tipo Mime : application/${fmedi[0].mime}\n├ Tamanho : ${fmedi[0].size}\n└ Link : ${fmedi[0].link}`
  m.reply(teksss)
  izuku.sendMessage(m.chat, {document: {url: fmedi[0].link}, mimetype: fmedi[0].mime, fileName: fmedi[0].name}, {quoted: m})
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
//Tools
case 'get': {
  if (!args[0]) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} a ligação*`)
  if (!isUrl(text)) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} a ligação*`)
  try {
  let gts = await fetchJson(args.join(" "))
  m.reply(gts)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'translate': case 'terjemahan': {
  if (!args.join(" ")) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Texto*`)
  try {
  tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
  ipo = tes.info
  dtk = tes.translate
  m.reply(`╭ Traduzir : ${dtk}\n└ Resultados : ${ipo}`)
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
case 'volumereq': {
  if (!args.join(" ")) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} 10*`)
  media = await izuku.downloadAndSaveMediaMessage(quoted, "volume")
  if (/audio/.test(mime)) {
  rname = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(mess.error)
  jadie = fs.readFileSync(rname)
  izuku.sendMessage(m.chat, {audio:jadie, mimetype: 'audio/mp4', ptt: false}, {quoted: m})
  fs.unlinkSync(rname)
  })
  } else if (/video/.test(mime)) {
  rname = getRandom('.mp4')
  exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(mess.error)
  jadie = fs.readFileSync(rname)
  izuku.sendMessage(m.chat, {video: jadie, mimetype: 'video/mp4', caption: global.mess.sukses}, {quoted: m})
  fs.unlinkSync(rname)
  })
  } else {
  m.reply("Enviar vídeo/áudio")
  }
  }
  break
case 'bassreq': {
  if (!args.join(" ")) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} 10*`)
  var req = args.join(' ')
  media = await izuku.downloadAndSaveMediaMessage(quoted, "bass")
  if (/audio/.test(mime)) {
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(mess.error)
  hah = fs.readFileSync(ran)
  izuku.sendMessage(m.chat, {audio:hah, mimetype: 'audio/mp4', ptt: false}, {quoted: m})
  fs.unlinkSync(ran)
  })
  } else if (/video/.test(mime)) {
  ran = getRandom('.mp4')
  exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(mess.error)
  hah = fs.readFileSync(ran)
  izuku.sendMessage(m.chat, {video: hah, mimetype: 'video/mp4', caption: global.mess.sukses}, {quoted: m})
  fs.unlinkSync(ran)
  })
  } else {
  m.reply("Enviar vídeo/áudio")
  }
  }
  break
case 'temporeq': {
  if (!args.join(" ")) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} 10*`)
  var req = args.join(' ')
  media = await izuku.downloadAndSaveMediaMessage(quoted, "tempo")
  if (/audio/.test(mime)) {
  ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(mess.error)
  hah = fs.readFileSync(ran)
  izuku.sendMessage(m.chat, {audio:hah, mimetype:'audio/mp4', ptt: false}, {quoted:m})
  fs.unlinkSync(ran)
  })
  } else if (/video/.test(mime)) {
  ran = getRandom('.mp4')
  exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(mess.error)
  hah = fs.readFileSync(ran)
  izuku.sendMessage(m.chat, {video: hah, mimetype:'video/mp4', caption: global.mess.sukses}, {quoted:m})
  fs.unlinkSync(ran)
  })
  } else {
  m.reply("Enviar vídeo/áudio")
  }
  }
  break
//Database
case 'setcmd': {
  if (!m.quoted) return m.reply('*Responda o adesivo!*')
  if (!m.quoted.fileSha256) throw 'Hash SHA256 ausente'
  if (!text) return m.reply(`Para comandar o que?`)
  let hash = m.quoted.fileSha256.toString('base64')
  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'Você não tem permissão para alterar este comando de adesivo'
  global.db.sticker[hash] = {
    text,
    mentionedJid: m.mentionedJid,
    creator: m.sender,
    at: + new Date,
    locked: false,
  }
  m.reply(mess.sukses)
  }
  break
case 'delcmd': {
  let hash = m.quoted.fileSha256.toString('base64')
  if (!hash) throw `Tidak ada hash`
  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'Você não tem permissão para excluir este comando de adesivo'              
  delete global.db.sticker[hash]
  m.reply(mess.sukses)
  }
  break
case 'listcmd': {
  let teks = `*Listar hash*\nInformações: *bold* hash está bloqueado\n${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
  izuku.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
  }
  break
case 'lockcmd': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!m.quoted) return m.reply('*Responder adesivo!*')
  if (!m.quoted.fileSha256) throw 'Hash SHA256 ausente'
  let hash = m.quoted.fileSha256.toString('base64')
  if (!(hash in global.db.sticker)) throw 'Hash não encontrado no banco de dados'
  global.db.sticker[hash].locked = !/^un/i.test(command)
  m.reply(mess.sukses)
  }
  break
case 'addmsg': {
  if (!m.quoted) return m.reply('*Responder à mensagem!*')
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} Nome do arquivo*`)
  let msgs = global.db.database
  if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
  msgs[text.toLowerCase()] = quoted.fakeObj
  let buttons = [
      {buttonId: `${prefix}listmsg`, buttonText: {displayText: 'Listar mensagem'}, type: 1}
  ]
  let buttonMessage = {
  document: global.thumb2,
  fileName: 'RoF3X-BoT',
  mimetype: 'application/docx',
  fileLength: 0,
  jpegThumbnail: global.thumb2,
  caption: `Mensagem adicionada com sucesso na lista de mensagens como *'${text}'*\n\nAcesse com ${prefix}getmsg ${text}\nOu clique no botão abaixo\n\nVer lista de mensagens com ${prefix}listmsg`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4,
  contextInfo:{
  externalAdReply: {
  title: `Ola ${pushname}`,
  body: `${wib}`,
  previewType: "PHOTO",
  thumbnailUrl: ``,
  thumbnail: global.thumb2,
  sourceUrl: global.linkgc
  }}
  }
  izuku.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
  }
  break
case 'getmsg': {
  if (!text) return m.reply(`*𝐄𝐱𝐞𝐦𝐩𝐥𝐨 : ${prefix + command} FileName\n\nLihat list pesan dengan ${prefix}listmsg*`)
  let msgs = global.db.database
  if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
  izuku.copyNForward(m.chat, msgs[text.toLowerCase()], true)
  }
  break
case 'listmsg': case 'listmess': case 'listmes': case 'listmessage': {
  try {
  let msgs = JSON.parse(fs.readFileSync('./storage/db.json'))
  let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
  listMsgs = []
  for (let i of seplit) {
  listMsgs.push({title: `${i.nama}`, rowId: `${i.nama}`, description: `${getContentType(i.message).replace(/Message/i, '')}`})
  }
  const sections = [
  {title: "Número de mensagens " + seplit.length, rows: listMsgs}
  ]
  const listMessage = {
  text: "Por favor, clique abaixo, para ver a lista de mensagens de resposta",
  footer: global.ownerName,
  title: "「 Listar mensagem de resposta 」",
  buttonText: "Listar mensagem",
  sections
  }
  izuku.sendMessage(m.chat, listMessage, {quoted: ftroli})
  } catch {
  m.reply(`Nenhuma mensagem de resposta foi adicionada à lista ainda`)
  }
  }
  break
case 'delmsg': case 'deletemsg': {
  let msgs = global.db.database
  if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' não listado na lista de mensagens`)
  delete msgs[text.toLowerCase()]
  m.reply(`Excluído com sucesso '${text}' da lista de mensagens`)
  }
  break
//Anime
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick':
case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully':
case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap':
case 'waifu': case 'smile': case 'wave': case 'awoo': case 'blush':
case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe':
case 'cuddle': case 'highfive': case 'shinobu': case 'megumin': case 'handhold': {
  m.reply(mess.wait)
  try {
  axios.get(`https://api.waifu.pics/sfw/${command}`)
  .then(({data}) => {
  izuku.sendFile(m.chat, data.url, global.mess.sukses, m)
  })
  } catch (err) {
  m.reply(mess.error)
  }
  }
  break
//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }
if (isCmd && budy.toLowerCase() != undefined) {
  if (m.chat.endsWith('broadcast')) return
  if (m.isBaileys) return
  let msgs = global.db.database
  if (!(budy.toLowerCase() in msgs)) return
  izuku.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
  }

  } // switch
  } /* try*/catch (err) {
    console.log(util.format(err))
  }
} // module


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
