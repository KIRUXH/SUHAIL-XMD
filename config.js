const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "0792113328";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0113477017";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_01_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ1V4Nld5NVVFZ3RnbitvditrMFREOTN3WkJrYmdxNC9vZVlUSUY0ZHhuUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWU9lQVBEQ2dUYk9jOGhyalFfT1FNUVwiLFxuICBcInBob25lSWRcIjogXCIyOGJhZDIxYy02YzA4LTQwMGEtOTczNC1hMzU1ZThhNTY0YjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxOTksXG4gICAgICAxMTQsXG4gICAgICAzLFxuICAgICAgMjUsXG4gICAgICA0NixcbiAgICAgIDIwOCxcbiAgICAgIDIzOSxcbiAgICAgIDE1MixcbiAgICAgIDI0MixcbiAgICAgIDg3LFxuICAgICAgMTQ2LFxuICAgICAgMjI1LFxuICAgICAgMjE4LFxuICAgICAgMTIyLFxuICAgICAgNDksXG4gICAgICA5MCxcbiAgICAgIDU0LFxuICAgICAgMTczLFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTM3LFxuICAgICAgNyxcbiAgICAgIDEwOSxcbiAgICAgIDM5LFxuICAgICAgMjksXG4gICAgICAyMjcsXG4gICAgICAxOTQsXG4gICAgICAxMTcsXG4gICAgICAyMTcsXG4gICAgICAxOSxcbiAgICAgIDg1LFxuICAgICAgMTAyLFxuICAgICAgOTgsXG4gICAgICAxNDEsXG4gICAgICA5OCxcbiAgICAgIDEyMyxcbiAgICAgIDEyOCxcbiAgICAgIDk1LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4REpDMUozR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTEzNDc3MDE3OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjk2MTM2MjM3MzQzNDM6ODNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmoxdzQ0SEVOZUQ0N2tHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqU0ZybkJGVHRNVFhHS2JOZ1lTd2RXbm1IYk1UMUlhM1VBdCtvcTc5OXdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdtd1pPb3k3L1lwT0NPeTdNNTFhWFFGR2c5YXMyYkhpSlU0KzY3aWMvV0F5M2tkWlhyWFY2WlR2SS80eW11dHA5TE8zdzFYVUdrWElxekgxUTd4N0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImorcnk5U2w3UkRmUXpaSUNsT00zOHFTVWRxQTM4blplcktldmVsSEt0alVyMTJwWVY2T0d0YW8xdEdsRzhHekVtNmppOVJBMVRmOGduZURtWlp2OERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExMzQ3NzAxNzo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNzcyODkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnJTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKclMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMa2EwQmZWTHBZbUtCRzlNQnRaSDlENG9rNkxwMnpjY0tkWkZvSUVjdmxvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MDk1MjExMTIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kiruxh-XMD",
  ownername:process.env.OWNER_NAME|| "ka mwingi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
