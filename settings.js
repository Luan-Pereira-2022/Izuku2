const fs = require('fs')
const chalk = require('chalk')


global.thumb = fs.readFileSync('./media/imgnya.jpg')
global.thumb2 = fs.readFileSync('./media/imgnya2.jpg')
global.linkgc = 'https://chat.whatsapp.com/D3IjArLzOcV8Jup2ExbGzP'
global.userB = []
global.ownerNumber = ['5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086','5511914297086']
global.ownerName = '© 𝑳𝑼𝑨𝑵 ♻️ℹ️'
global.packname = '𝐈𝐳𝐮𝐤𝐮 𝐌𝐃'
global.author = '© 𝑳𝑼𝑨𝑵 ♻️ℹ️'
global.prefa = ['!','#','?','/','.']
global.sessionName = 'sesi'
global.mess = {
  admin: '*𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨 𝐩𝐨𝐝𝐞 𝐬𝐞𝐫 𝐮𝐬𝐚𝐝𝐨 𝐩𝐞𝐥𝐨 𝐚𝐝𝐦 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨 𝐌𝐞𝐦𝐛𝐫𝐨 𝐂𝐨𝐦𝐮𝐦 ℹ️*',
  botAdmin: '*𝐍𝐚𝐨 𝐜𝐨𝐧𝐬𝐢𝐠𝐨 𝐟𝐚𝐳𝐞𝐫 𝐢𝐬𝐬𝐨 𝐬𝐞𝐦 𝐬𝐞𝐫 𝐚𝐝𝐦 𝐚𝐦𝐢𝐠𝐨😪*',
  botOwner: '*𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨 𝐩𝐨𝐝𝐞 𝐬𝐞𝐫 𝐮𝐬𝐚𝐝𝐨 𝐩𝐞𝐥𝐨 𝐩𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨 𝐛𝐨𝐭🙊*',
  group: '*𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨 𝐩𝐨𝐝𝐞 𝐬𝐞𝐫 𝐮𝐬𝐚𝐝𝐨 𝐚𝐩𝐞𝐧𝐚𝐬 𝐞𝐦 𝐠𝐫𝐮𝐩𝐨🙈*',
  private: '*𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐬𝐩𝐞𝐜𝐢𝐚𝐢𝐬 𝐝𝐞 𝐜𝐨𝐧𝐯𝐞𝐫𝐬𝐚 𝐩𝐫𝐢𝐯𝐚𝐝𝐚*',
  wait: '*[ 💚 ] 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞𝐬𝐭𝐨𝐮 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐚𝐧𝐝𝐨 𝐬𝐞𝐮 𝐩𝐞𝐝𝐢𝐝𝐨...*',
  sukses: '*𝐒𝐞𝐮 𝐩𝐞𝐝𝐢𝐝𝐨 𝐟𝐨𝐢 𝐮𝐦𝐚 𝐨𝐫𝐝𝐞𝐦 𝐞 𝐚 𝐨𝐫𝐝𝐞𝐦, 𝐚𝐪𝐮𝐢 𝐞𝐬𝐭𝐚 𝐚 𝐨𝐫𝐝𝐞𝐦 𝐝𝐨 𝐩𝐞𝐝𝐢𝐝𝐨😈*',
  error: '*𝐄𝐫𝐫𝐨 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐫𝐞𝐩𝐨𝐫𝐭𝐞 𝐨 𝐞𝐫𝐫𝐨 𝐚𝐨 𝐜𝐫𝐢𝐚𝐝𝐨𝐫 𝐮𝐬𝐚𝐧𝐝𝐨 /reportar 𝐞 𝐦𝐚𝐢𝐬 𝐚 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦...*'
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})