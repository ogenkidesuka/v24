const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

// Other
global.owner = ['6283894435611','']
global.premium = ['']
global.botname = 'Vams'
global.ownername = 'Tn_Vams'
global.packname = 'Vams-Md'
global.author = 'Md-Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'jadiin bot admin dlo -_-',
owner: 'Fitur cuma buat Owner Bot',
group: 'Fitur Digunakan Hanya di Group!',
private: 'Fitur Digunakan Hanya di Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'sabah banh loading...',
endLimit: 'kasian Limit Hariannya abis awokawokawok, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Infinity",
free: 20
}
global.thumb = fs.readFileSync('./media/thumb.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
