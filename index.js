const {Client,Intents} = require('discord.js')
const client = new Client({intents: [new Intents(32767)]})
const {token} = require('./config.json')
client.login(token)

client.on('ready',()=> {
    console.log('Bot is Ready')
})


client.on('guildMemberAdd',(member)=> {
    const botsRoleId = "1075493768670740561"
    const usersRoleId = "1075445320735014944"

    if(member.user.bot){

        member.roles.add(botsRoleId)


    }else{

        member.roles.add(usersRoleId)

    }
})