const Alpha = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const axios = require('axios');
const Config = require('../config'); 

const Language = require('../language');
const Lang = Language.getString('weather');

var SIMI_DESC = ''  
if (Config.LANG == 'EN') SIMI_DESC = 'Are you bored? ... Fool around with SimSimi. ... World first popular Chatbot for daily conversation.'
if (Config.LANG == 'SI') SIMI_DESC = 'ඔයාට කම්මැලිද? ... සිම්සිමි සමඟ රැවටෙන්න. ... දෛනික සංවාදය සඳහා ලොව ප්‍රථම ජනප්‍රිය චැට්බෝට්.'

var NEED = ''  
if (Config.LANG == 'EN') NEED = '*Need Words. 🤓*'
if (Config.LANG == 'SI') NEED = 'වචන ලබාදෙන්න. 🤓'

if (Config.WORKTYPE == 'private') {

    Alpha.addCommand({pattern: 'simi ?(.*)', fromMe: true, desc: SIMI_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply( NEED );
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, ' \n\n*📣 Simi >>*' + ' *' + json.messages[0].response + '*\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
    });
}

else if (Config.WORKTYPE == 'public') {

    Alpha.addCommand({pattern: 'simi ?(.*)', fromMe: false, desc: SIMI_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply( NEED );
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, ' \n\n*📣 Simi >>*' + ' *' + json.messages[0].response + '*\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
    });
} 
