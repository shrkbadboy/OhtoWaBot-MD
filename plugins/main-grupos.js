let handler = async (m, { conn, command }) => {
let gps = `*◜🌸 CANALES OFICIALES 🌸◞*

🍭 ${namechannel}
${channel}

🍭 ${namechannel2}
${channel2}`

await m.react(emojis) 

await conn.sendFile(m.chat, imagen3, 'ai.jpg', gps, fkontak, null, rcanal)}

handler.tags = ['main']
handler.help = ['grupos']
handler.command = /^grupos|gruposai|linkre|aigp|gpai|gruposofc|gruposoficiales$/i
handler.register = true

export default handler
