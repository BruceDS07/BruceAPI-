/////////======= Módulos Usados =======////////
const ytdl = require('ytdl-core');
const axios = require('axios');
const { millify } = require("millify")

///======= API YouTube Downloader =======///
function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
});
};

function ytMp4_Down(url) {
return new Promise((async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = {video: item.url, quality: qualityLabel, size: bytes}}}
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
const downloadMusicVideo = {
title: getUrl.videoDetails.title,    
quality: resultFix[0].quality,
size: resultFix[0].size,
thumbnail: getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url,
views: millify(getUrl.videoDetails.viewCount),
channel: getUrl.videoDetails.ownerChannelName,
uploadDate: getUrl.videoDetails.uploadDate,
dl_link: tinyUrl,
description: getUrl.videoDetails.description
}
return resolve(downloadMusicVideo)
}).catch(err => {
resolve({statusCode: 404, systemResponse: "Erro detectado: "+err})
})
}));
};

function ytMp3_Down(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = {audio: item.url, size: bytes}}}
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;       
const downloadMusicAudio = {
title: getUrl.videoDetails.title,    
quality: resultFix[0].quality,
size: resultFix[0].size,
thumbnail: getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url,
views: millify(getUrl.videoDetails.viewCount),
channel: getUrl.videoDetails.ownerChannelName,
uploadDate: getUrl.videoDetails.uploadDate,
dl_link: tinyUrl,
description: getUrl.videoDetails.description
}    
resolve(downloadMusicAudio);
return resolve(downloadMusicVideo)
}).catch(err => {
resolve({statusCode: 404, systemResponse: "Erro detectado: "+err})
})
});
}

module.exports = { ytMp4_Down, ytMp3_Down };