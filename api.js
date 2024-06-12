bla = process.cwd()
__path = process.cwd()

//=======[ PORTA DE ACESSO ]======\\
const PORT = process.env.PORT || 4048

//=======[ REQUISIÇÕES ]======\\
const ffmpeg = require('fluent-ffmpeg');
const uuid = require('uuid').v4
const fs = require('fs')
const hx = require('hxz-api');
const axios = require('axios')
const zrapi = require('zrapi')
const jpeg = require('jpeg-js')
const { GOOGLE_IMG_SCRAP , GOOGLE_QUERY } = require('google-img-scrap');
const yts = require('yt-search')
const translate = require('translate-google-api')
const multer = require('multer')
const Ddos = require('ddos')
const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const fetch = require('node-fetch')
const FormData = require('form-data')
const canvacord = require("canvacord")
const lyricsFinder2 = require('lyrics-finder');
const uber = require('uberduck-api')
var { igstory} = require('./base de dados/scrape.js');
const { Youtube } = require('ytdownloader.js')
var canvasx = require('discord-canvas')
var { fromBuffer } = require('file-type')
const BrainlySearch = require('./base de dados/brainly.js')
const {fetchJson} = require('./base de dados/myfunc')
const isUrl = require("is-url")
//var aexm = require('@lolikillers/aexm-api');
var gerarnick = require('./base de dados/gerarnick.js')
var { mediafireDl } = require('./base de dados/mediafire.js');
const twtdl = require('./base de dados/twtdl.js')
const yt = require("@ernestoyoofi/yt.loader-to");
var buffer = require('./base de dados/upload.js')
var exec = require('child_process').exec;
var { Maker } = require('imagemaker.js')
var TikTokScraper = require('tiktok-scraper');
var download = require('@phaticusthiccy/open-apis')
const Correios = require('cep-address-finder')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
var thiccysapi = require('textmaker-thiccy');
var { pinterest } = require('./base de dados/funções.js')
const { download_Url } = require("./base de dados/function.js");
const mintake = require(bla + '/base de dados/modules/mintake');
const mumaker = require(bla + '/base de dados/modules/mumaker');
var wiki = require("@dada513/wikipedia-search")
const ytdl = require("ytdl-core")
var { searchSpotify, getTrackSpotify, getAlbumSpotify, getPlaylistSpotify, getArtistSpotify, getDownloadMultiLink, getDownloadSingleLink } = require('./base de dados/spotify.js')
const NASA = require('@killovsky/nasa');
var trans = require('@vitalets/google-translate-api')
const SANIME = require('selfietoanime');
var Deezer = require("deezer-web-api");
var DeezerClient = new Deezer();
const {savefrom} = require('./base de dados/savefrom.js')
const Pokemon = require('pokemon.js');
const cors = require('cors')
const GleysonBotsl = require("./base de dados/listdl.js")
const testing = require("./base de dados/listdl2.js")
const BitlyClient = require('bitly').BitlyClient
const TinyURL = require('tinyurl');
const unfetch = require('isomorphic-unfetch');
const { getData, getPreview, getTracks, getDetails } = require('spotify-url-info')(unfetch)
const { wikimedia } = require("./base de dados/scraper/wikimedia.js")
const { wall } = require("./base de dados/scraper/scraper.js")

var { color } = require('./base de dados/color.js')
var { ytMp3, ytMp4, ytPlay, ytPlayMp4, ytSearch, ytVideosSearch} = require('./base de dados/yt.js')
const { fbdown } = require("./base de dados/facebook.js")
const { ytDonlodMp3_3, ytDonlodMp4_3, ytPlayMp3_3, ytPlayMp4_3, ytSearch_3 } = require("./base de dados/youtubev3");
const {  facebook } = require('./base de dados/downloader.js')
const { gis } = require('./base de dados/gimage.js')
var { ytMp3_2, ytMp4_2, ytPlay_2 } = require('./base de dados/youtubev2.js')
var { nerding, gpwhatsapp, apkmody, pornhubsrc, uptodown, igstalk, soundl, playstore, manga, anime, hentaistube, pornogratis, filme, wattpad } = require('./base de dados/scraper2.js')
var { pensadorSearch, wallpaper2 } = require('./base de dados/scrapper-api.js')
var { tiktok2, FacebookMp4 } = require('./base de dados/downloader.js')
var { PlayStoreSearch, MercadoLivreSearch, AmazonSearch, AmericanasSearch, SubmarinoSearch, Horoscopo } = require('./base de dados/scraper/pesquisas.js')
var { pinterestVideoV2 } = require('./base de dados/pinterest.js')
var { kwai } = require('./base de dados/kwai.js')
var { InArtificial, CorretorOpenAi } = require('./base de dados/scrapper-vip.js')
var { getVideosPlaylist } = require('./base de dados/playlist.js')

var { G1, Poder360, JovemPan, Uol, CNNBrasil, Estadao } = require('./base de dados/scraper/noticias.js')

const path = require("path");

const { dirname } = require('path');

var __dirname = dirname(__filename);

var { memesDroid } = require('./base de dados/scraper/aleacrapper.js')
var { ringtone } = require('./base de dados/scraper/ringtone.js')
var { lirik } = require('./base de dados/sab_scraper.js')

const { AnimeWallpaper } = require("anime-wallpaper");
const BuscaWallpaper = new AnimeWallpaper();
const { snapsave } = require("@bochilteam/scraper")

var { facebookDownloader, instaVideoV1 } = require('./base de dados/scraper/downloaders.js')
var { LetradaMusica } = require('./base de dados/letraMusic.js')

const { musicard, comunismo, bolsonaro, bnw, blurr, affect, beautiful,circle, del, gay, invert, facepalm, dither, jail, magik, pixelate, rip, sepia, rotate, trash, wanted, wasted, bobross, mms } = require('./base de dados/canvas.js')

const { happymodr } = require('./base de dados/happymod.js')
const { wikiSearch } = require('./base de dados/wikipediaBr.js');
const { aiovideodl, umma, ytPlay_3} = require('./base de dados/scraper-2.js');
const { randomGrupos } = require('./base de dados/groups-random.js');

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};

async function getBuffer(url) {
he = await fetch(url)
.then(c => c.buffer())
return he
}

var ddos = new Ddos({burst:4, limit:30, testmode:true, whitelist:['187.21.11.237']});

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\\
// ============[ APIKEYS ]============ \\

var key = JSON.parse(fs.readFileSync("./database/apikeys.json"));
const usus_r = JSON.parse(fs.readFileSync("./database/usuarios.json"));

async function RG_US(apikey, req) {
var i4 = key.map(i => i?.apikey)?.indexOf(apikey)
if(i4 >= 0) {
key[i4].request -= 1;
fs.writeFileSync("./database/apikeys.json", JSON.stringify(key, null, 2));
var IP = req.headers['x-real-ip'] || req.connection.remoteAddress || 0;
var i3 = usus_r.map(i => i.key).indexOf(apikey);
if(i3 < 0 && !usus_r.map(i => i.IP).includes(IP?.split(":")[3])){
usus_r.push({key: apikey, IP: [IP?.split(":")[3]]})
fs.writeFileSync("./database/usuarios.json", JSON.stringify(usus_r, null, 2));
} else if(i3 >= 0 && !usus_r[i3]?.IP.includes(IP?.split(":")[3])) {
usus_r[i3].IP.push(IP?.split(":")[3])
fs.writeFileSync("./database/usuarios.json", JSON.stringify(usus_r, null, 2));
}}}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\\

// ===[INÍCIO - KEYS ENCURTAR LINK]===== \\
apicuttly = ['4786cc6a0f19de9c67ea6a4282c494323c932','2038c1a7754b408aa8f9055282638c00e668e','89d73b3a07209177d0251e30d49d66bd669ac','e841147455d0fdfbf50f74aefe63b6728adc0','27f3aa3f45cb4460bcbac69b782ca470a4570','31a8df09d5a9d8d009790df0b5642e3d76919','09b4e764ff07b10eac1682e71aaf95a78f358','75fe576ce040b619176af22f5a718b2f574f5','e24ee36f9c1519c0a779667a5182a31fb7ccf','903869065d29e23455ddca922071f4bbeb133']

//Get Api Bittly From https://bitly.com/a/sign_in?rd=/settings/api/    \\
apibitly = ['6cfc18e9bfa554714fadc10a1f6aff7555642348','2243940c230ad0d748059aee58ddf126b65fd8e7','c71b6658a1d271ddaf2a5077de3dcb9d67f68025','cddbceccdc2f1c9d11e4cdd0d2b1d1078e447c43','7915c671fbd90eca96310e5c9442d761225a1080','e5dee46eb2d69fc9f4b0057266226a52a3555356','f09ab8db9cf778b37a1cf8bc406eee5063816dec','964080579f959c0cc3226b4b2053cd6520bb60ad','a4f429289bf8bf6291be4b1661df57dde5066525','3d48e2601f25800f375ba388c30266aad54544ae','4854cb9fbad67724a2ef9c27a9d1a4e9ded62faa','d375cf1fafb3dc17e711870524ef4589995c4f69','43f58e789d57247b2cf285d7d24ab755ba383a28','971f6c6c2efe6cb5d278b4164acef11c5f21b637','ae128b3094c96bf5fd1a349e7ac03113e21d82c9','e65f2948f584ffd4c568bf248705eee2714abdd2','08425cf957368db9136484145aa6771e1171e232','dc4bec42a64749b0f23f1a8f525a69184227e301','0f9eb729a7a08ff5e73fe1860c6dc587cc523035','037c5017712c8f5f154ebbe6f91db1f82793c375']

// ===[FIM - KEYS ENCURTAR LINK]===== \\

const headers = {
'accept': '*/*',
'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53',
'Accept-Language': 'en-US,en;q=0.9,it;q=0.8,es;q=0.7',
'referer': 'https://www.google.com/',
'cookie': 'DSID=AAO-7r4OSkS76zbHUkiOpnI0kk-X19BLDFF53G8gbnd21VZV2iehu-w_2v14cxvRvrkd_NjIdBWX7wUiQ66f-D8kOkTKD1BhLVlqrFAaqDP3LodRK2I0NfrObmhV9HsedGE7-mQeJpwJifSxdchqf524IMh9piBflGqP0Lg0_xjGmLKEQ0F4Na6THgC06VhtUG5infEdqMQ9otlJENe3PmOQTC_UeTH5DnENYwWC8KXs-M4fWmDADmG414V0_X0TfjrYu01nDH2Dcf3TIOFbRDb993g8nOCswLMi92LwjoqhYnFdf1jzgK0'};

const router = express.Router();

var upload = multer()

var app = express()
 
app.use(cors())
app.set("json spaces",2)
app.use(express.static("public"))

var blacklist = require('express-blacklist');
app.use(blacklist.blockRequests('blacklist.txt'));

function delFile(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const { UltimateTextToImage, registerFont } = require("ultimate-text-to-image");

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

ffmpeg.setFfmpegPath(ffmpegPath);

registerFont((__dirname + '/base de dados/fontes/NotoEmoji.ttf'), { family: 'Noto Emoji' });
registerFont(__dirname + '/base de dados/fontes/NotoSansMono.ttf', { family: 'Noto Sans Mono' });

let randomName = (ext) => uuid().split('-')[0] + (ext ? ext : '');

var cores = ['red','lime','yellow','magenta','cyan'];

async function ttp(text, color = '#ffffff', name = randomName('.png')) {
new UltimateTextToImage(text, {
width: 500,
height: 500,
fontFamily: "Noto Emoji, Noto Sans Mono",
fontColor: color,
fontSize: 300,
minFontSize: 10,
lineHeight: 50,
autoWrapLineHeightMultiplier: 1.2,
margin: 15,
//marginBottom: 40,
align: "center",
valign: "middle",
}).render().toFile(`./assets/attp-logs/${name}`);
return `./assets/attp-logs/${name}`;
}

async function attp(text) {
let nome = randomName('');
let lista = [
ttp(text, '#ff0000', `${nome}0.png`),
ttp(text, '#ffa600', `${nome}1.png`),
ttp(text, '#ffee00', `${nome}2.png`),
ttp(text, '#2bff00', `${nome}3.png`),
ttp(text, '#00ffea', `${nome}4.png`),
ttp(text, '#3700ff', `${nome}5.png`),
ttp(text, '#ff00ea', `${nome}6.png`),
];

return new Promise(function (resolve, reject) {
// gerar webp
ffmpeg().addInput((`./assets/attp-logs/${nome}`+"%d.png"))
.addOutputOptions(['-vcodec', 'libwebp', '-vf','scale=500:500:force_original_aspect_ratio=decrease,setsar=1, pad=500:500:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse', '-loop', '50', '-preset', 'default'])
//.outputFPS(15)
.toFormat('webp')
.on('end', () => {
for (let img = 0; img < lista.length; img++) {
delFile("*png");
}
resolve('./assets/attp-logs/'+nome+'.webp')}).on('error', (err) => {
for (let img = 0; img < lista.length; img++) {
delFile("*webp");
}
reject(('erro ffmpeg ' + err));
}).save(('./assets/attp-logs/'+nome+'.webp'));
});
}

//const input = require("input");
const chalk = require('chalk');

app.use(cors());
app.set('trust proxy', 1);
/*
const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const { NewMessage } = require("telegram/events");

const Grupos = [
{ chat: "noxbuscas2", bot: "Noxbuscabot" },
];

//COLOCA SEUS BAGULHO AQ

const apiId = `21844566`; //https://my.telegram.org/auth

const apiHash = `ff82e94bfed22534a083c3aee236761a`; //https://my.telegram.org/auth

const stringSession = new StringSession(`1AQAOMTQ5LjE1NC4xNzUuNTUBuw4J/rSTftH3OTaxSk1p1gAnLWmZmvq/XpIaTKKWvrMOc83qkVTpeBG+G95w06sqMd+9195g1UqxAQhgztVUb9rVIQKbIe9RffU4DtIYAFDy/aU6RgU2UQ0g4YN10FZQdCCBqbXgQm2719vMjOP8QRRZG3DC1xLuOH7ysEYQUDZ5Wk6RjMVF2msaRVFPJpi+N3bfLqB3bPU6y/TKV5RRtG8SP+N57PzPqrQSo9XBvhuhTZd3j8h7cZVGeft9cgFn7FLFEVYpaP4w2e7RL03lB+mZixyt7oJWYgWBKnr1Yd9EikyALfCTe97EWnO4H5YXwcjMy/SopU0l3aUTSE7SWeA=`)
//FIM

const telegram = new TelegramClient(stringSession, apiId, apiHash, {
	connectionRetries: 5
});

(async () => {
	await telegram.start({
		phoneNumber: "5511959969604", // SEU NUMERO DE TELEFONE AQUI DA CONTA DO TELEGRAM QUE DESEJA USAR!
		password: async () => await input.text("insira sua senha: "),
		phoneCode: async () =>
			await input.text("Insira o codigo recebido no seu telegram: "),
		onError: (err) => console.log(err)
	});
	console.log("TELEGRAM: Conectado com sucesso!");
	console.log(telegram.session.save());
	await telegram.sendMessage("me", { message: "To Online!" });
})();

*/
////PAGINA INICIAL Q IRA REDIRECIONAR PRA /DOC
 
router.use(ddos.express);
app.get("/", (req,res,next) => {
console.log("Beep");
res.end("Boop");
})
app.use(router);

app.get('/admin',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "moderador.html"))})

app.get('/add-key',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "add-apikey.html"))})

app.get('/del-key',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "del-apikey.html"))})

app.get('/ver-key',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "ver-apikey.html"))})

app.get('/captcha',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "captcha.html"))})

app.get('/docs',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "docs.html"))})

app.get('/planos',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "planos.html"))})

app.get('/api/add-key',(req, res) => {
a = req.query.a
if(!a.includes("&")) return res.json({message: "Faltando o and"})
var [apikey, senha, rq] = a.split("&")
var senhaofc = "gley"
if(senha != senhaofc) return res.json({message: "Senha invalida.."})
if(!apikey) return res.json({message: "Cadê a key?"})
if(key.map(i => i.apikey).includes(apikey)) {
return res.json({message: "Essa key já está inclusa dentro do sistema.."})
} else {
key.push({apikey: apikey, request: rq})
fs.writeFileSync("./database/apikeys.json", JSON.stringify(key))
return res.json({message: `Apikey ${apikey} registrada com sucesso..`})
}
})

app.get('/api/del-key',(req, res) => {
a = req.query.a
if(!a.includes("&")) return res.json({message: "Faltando o and"})
var [apikey, senha] = a.split("&")
var senhaofc = "gley"
if(senha != senhaofc) return res.json({message: "Senha invalida..."})
if(!apikey) return res.json({message: "Cadê a key?"})
if(!key.map(i => i.apikey).includes(apikey)) {
return res.json({message: "Essa key não está inclusa.."})
} else {
var i2 = key.map(i => i.apikey).indexOf(apikey)
key.splice(i2, 1)
fs.writeFileSync("./database/apikeys.json", JSON.stringify(key))
return res.json({message: `Apikey ${apikey} tirada com sucesso..`})
}
})

app.get('/api/keyerrada',(req, res) => {
apikey = req.query.apikey;
var ITC = key.map(i => i?.apikey)?.indexOf(apikey);
if(ITC < 0) {
return res.json({message:'Apikey inválida ou requests esgotados!'})
} else {return res.json({message:`Apikey Funcionando perfeitamente ✔️ - Limite de Request: ${key[ITC]?.request}`})}})

app.get('/welcome', async (req, res, next) => {
if (!req.query.titulo) return res.json({ status: 404, error: 'Insira o parametro: titulo'})
if (!req.query.nome) return res.json({ status: 404, error: 'Insira o parametro: nome'})
if (!req.query.perfil) return res.json({ status: 404, error: 'Insira o parametro: perfil'})
if (!req.query.fundo) return res.json({ status: 404, error: 'Insira o parametro: fundo'})
if (!req.query.grupo) return res.json({ status: 404, error: 'Insira o parametro: grupo'})

let welcomer = await new canvasx.Welcome()
.setUsername(req.query.nome)
.setDiscriminator("2022")
.setText("title", req.query.titulo)
.setText("message", req.query.grupo)
.setAvatar(req.query.perfil)
.setColor('border', '#00100C')
.setColor('username-box', '#00100C')
.setColor('discriminator-box', '#00100C')
.setColor('message-box', '#00100C')
.setColor('title', '#00FFFF')
.setBackground(req.query.fundo)
.toAttachment()
let base64 = `${welcomer.toBuffer().toString('base64')}`
require('fs').writeFileSync(bla+'/assets/welkom.png', base64, 'base64')
res.sendFile(bla+'/assets/welkom.png')
})

app.get('/api/eletronica.mp3', (req, res) => {
json = fs.readFileSync('./base de dados/audios/eletronica.mp3')
res.type('mp3')
res.send(json)
})

app.get('/loli', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/shota', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/random/metadinha', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
         json = JSON.parse(fs.readFileSync(bla +'/base de dados/metadinha.json').toString())
         random = json[Math.floor(Math.random() * json.length)]
         res.json(random) 
})

app.get('/+18/loli', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/nsfwlolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/api/facebook', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RG_US(apikey, req);
fbdown(url).then(data => {
res.json({
status: true,
código: 999,
resultado: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/info_celular', async(req, res) => {
try {
celular = req.query.celular
if(!celular)return res.json({status:false, motivo:'Coloque o parâmetro: celular'})
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
axios(`https://www.techtudo.com.br/busca/?q=`+celular, Headers={headers}).then(rs => {
var $ = cheerio.load(rs.data)
const DFN_UR = $(".widget--navigational__title").text().toLowerCase()
axios(`https://www.techtudo.com.br/tudo-sobre/${DFN_UR.replace(new RegExp(" ", "gi"), "-")}/`, Headers={headers}).then(rsp => {
var $ = cheerio.load(rsp.data)  
var RST = []
var titulo = $("h1").text()
var BT = $("div").find(".content-row").text()
var BT2 = $("div").find(".all-about").text()
res.json({status: true, código: 999, criador: `@TioMidz`, resultado: { nomeCelular: titulo, informações: BT2.trim(), resumoExtra: BT.trim().replace(new RegExp("  ", "gi"), "\n\n")}})}).catch(e => {res.json({message: "Error"})})}).catch(e => {res.json({message: "Error"})})} catch {return res.json({message: "Erro...Aguarde ou fale com algum administrador.."})}})

app.get('/api/horoscopo/v2', async (req, res) => {
try {
apikey = req.query.apikey
signo = req.query.signo
if(!signo) return res.json({message: "Faltando o parametro signo"})
if(!apikey)return res.json({message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
DFN_SG = signo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!JSON.stringify(["aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"]).includes(DFN_SG)) return res.json({message: "Este signo não existe, os signos existentes são: Áries, Touro, Gêmeos, Câncer, Leão, Virgem, Libra, Escorpião, Sagitário, Capricórnio, Aquário e Peixes."})
var { horoshoje } = require("./base de dados/horoscopo.js");
RG_US(apikey, req);
await horoshoje(DFN_SG).then(signo => {
res.json({status: 200, resultado: signo})
}).catch(e => {
return res.json({message: "Erro.."})
})
} catch (e) {
return res.json({message: "Erro.."})
}
})


app.get('/api/spotify', async(req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message : "Parâmetro URL - FALTANDO!"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://api.lolhuman.xyz/api/spotify?apikey=gataDios&url=${url}`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.result;
             res.json({
                 status: true,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/playstoredl', async(req, res, next) => {
apikey = req.query.apikey
package = req.query.package
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!package) return res.json({ status : false,  message : "Parâmetro package - FALTANDO!"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://api.lolhuman.xyz/api/apkdownloader?apikey=gataDios&package=${package}`))
    .then(response => response.json())
        .then(hasil => {

        var result = hasil.result;
             res.json({
                 status: true,
                 result
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/search/wikipedia',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: QUERY'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro: APIKEY'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
wikiSearch(query)
.then(hasil => {
res.json({
status:true,
resultado: hasil
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/search/pensador',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: QUERY'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro: APIKEY'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
pensadorSearch(query)
.then(dados => {
res.json({
status:true,
resultado: dados
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/search/wallpaper',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: QUERY'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro: APIKEY'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
wallpaper2(query)
.then(result => {
res.json({
status:true,
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/download/tiktok2',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
message:'Cadê o parâmetro: URL'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro: APIKEY'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
tiktok2(url).then(result => {
res.json({
status:true,
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/download/youtube',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
message:'Cadê o parâmetro: url'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro: apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
ytDonlodMp3_3(url).then(result => {
res.json({
status:true,
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/download/tiktok', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RG_US(apikey, req);
testing.musically(url).then(data => {
res.json({
status: true,
código: 999,
resultado: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/letramusic',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: query'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro: APIKEY'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
lirik(query).then(hasil => {
res.json({
status:true,
resultado: hasil
})
}).catch(e => {
console.log(e)
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/letramusic2',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: query'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro: APIKEY'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
lyricsFinder2(query).then(data => {
res.json({
status:true,
resultado: data
})
}).catch(e => {
console.log(e)
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/emojimix', async (req, res, next) => {
	var emoji1 = req.query.emoji1
	var emoji2 = req.query.emoji2
	apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro: APIKEY'})
	if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
	if (!emoji1) return res.json({ status : false, message : "[!] parâmetros de entrada  emoji1"})
	if (!emoji2) return res.json({ status : false, message : "[!] parâmetros de entrada  emoji2"})  
	RG_US(apikey, req);
	let data = await Kibar(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	let jadi = data.results[Math.floor(Math.random() * data.results.length)]
	if (!jadi ) return res.json({erro: "Erro no Servidor Interno."})
	for (let ress of data.results) {
	resul = await getBuffer(ress.url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
}
})


app.get('/download/facebook', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RG_US(apikey, req);
FacebookMp4(url).then(resultado => {
res.json({
status: true,
código: 999,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/filme', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RG_US(apikey, req);
filme(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
code_by: `@GleysonBots`,
pesquisa: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})


app.get('/api/pornogratis', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RG_US(apikey, req);
 pornogratis(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})


app.get('/api/nerding', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RG_US(apikey, req);
 nerding(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})


app.get('/api/playstore', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RG_US(apikey, req);
PlayStoreSearch(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/mercadolivre', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RG_US(apikey, req);
MercadoLivreSearch(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/amazon', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RG_US(apikey, req);
AmazonSearch(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/pinterest_mp4', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RG_US(apikey, req);
pinterestVideoV2(url).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/americanas', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RG_US(apikey, req);
AmericanasSearch(nome).then(dados => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/yt-playlist', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RG_US(apikey, req);
getVideosPlaylist(url).then(resJson => {
res.json({
pesquisa: resJson
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/submarino', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RG_US(apikey, req);
SubmarinoSearch(nome).then(dados => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})


app.get('/api/horoscopo', async(req, res, next) => {
apikey = req.query.apikey;
signo = req.query.signo
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!signo) return res.json({ status : false,  message: "Coloque o parametro: signo"})
 RG_US(apikey, req);
Horoscopo(signo).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/randomgp', async(req, res, next) => {
apikey = req.query.apikey;
categoria = req.query.categoria
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!categoria) return res.json({ status : false,  message: "Coloque o parametro: categoria"})
 RG_US(apikey, req);
randomGrupos(categoria).then(dados => {
res.json({
pesquisa: dados
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/download/kwai', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RG_US(apikey, req);
kwai(url).then(hasil => {
res.json(hasil)}).catch(e => {
console.log(e)
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/outros/openai', async(req, res, next) => {
apikey = req.query.apikey;
pergunta = req.query.pergunta
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!pergunta) return res.json({ status : false,  message: "Coloque o parametro: pergunta"})
 RG_US(apikey, req);
InArtificial(pergunta).then(hasil => {
res.json({
status: 200,
resultado: hasil
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/outros/openai/corretor', async(req, res, next) => {
apikey = req.query.apikey;
texto = req.query.texto
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!texto) return res.json({ status : false,  message: "Coloque o parametro: texto"})
 RG_US(apikey, req);
CorretorOpenAi(texto).then(hasil => {
res.json({
status: 200,
resultado: hasil
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/memes', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
memesDroid().then(dados => {
res.json({
pesquisa: dados
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/ringtone', async(req, res, next) => {
query = req.query.query
apikey = req.query.apikey;
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
  if (!query) return res.json({ status : false,  message: "Coloque o parametro: query"})
  RG_US(apikey, req);
ringtone(query).then(hasil => {
res.json({
status: 200,
resultado: hasil
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/globo', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
G1().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/jovempan', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
JovemPan().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/poder360', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
Poder360().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/uol', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
Uol().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/estadao', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
Estadao().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/cnnbrasil', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
CNNBrasil().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/gpwhatsapp', async(req, res, next) => {
q = req.query.q;
apikey = req.query.apikey;
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
  if(!q)return res.json({status:false,message:'Cadê o parâmetro q?'})
  RG_US(apikey, req);
 gpwhatsapp(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/playmp4-2', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!q) return res.json({ status : false,  message : "Cade o parametro q?"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/ytplaymp4?nome=${q}&apikey=p7ori`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/ytmp4-2', async(req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/ytmp4?link=${url}&apikey=p7ori`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

router.all('/api/musicas/itunes', async (req, res) => {
musica = req.query.musica
if(!musica)return res.json({
status:false,
motivo:'Coloque o parâmetro: musica'
})
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
auu = await Kibar(`https://api.popcat.xyz/itunes?q=${musica}`)
res.json({
status: true,
código: 999,
resultado: {
linkAcesso: `${auu.url}`,
nomeMusic: `${auu.name}`,
nomeArtista: `${auu.artist}`,
nomeAlbum: `${auu.album}`,
lançamento: `${auu.release_date}`,
preço: `${auu.price}`,
segundos: `${auu.length}`,
gênero: `${auu.genre}`,
thumbnail: `${auu.thumbnail}`
}
})
})

app.get('/api/igstory', async (req, res, next) => {
          apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"}) 
RG_US(apikey, req);
        if(key.map(i => i.apikey)?.includes(apikey)){
       igstory(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/pinterest', (req, res) => {
(async() => {
apikey = req.query.apikey
text = req.query.text
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!text) return res.json({ status : false,  message : "Cade o parametro text?"})
RG_US(apikey, req);
pin = await pinterest(text)
ac = pin[Math.floor(Math.random() * pin.length)]
res.type('jpg')
res.send(await getBuffer(ac))
})()
})

app.get('/api/download', (req, res) => {
(async() => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
RG_US(apikey, req);
wew = await savefrom(url)
res.type('mp4')
res.send(await getBuffer(wew.url[0].url))
})()
})

app.get('/api/imitar/mickey', (req, res) => {
(async() => {
apikey = req.query.apikey
texto = req.query.texto
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!texto) return res.json({ status : false,  message : "Cadê o parametro texto?"})
RG_US(apikey, req);
uber.getAudioUrl("pub_motekhcekzerxfxjro", "pk_d2d564c1-7942-4afc-9368-7520fc024603", 'mickey-mouse', texto).then(async getBuf => {
res.type('mp3')
res.send(await getBuffer(getBuf))
})
})()
})

app.get('/api/imitar/chapolin', (req, res) => {
(async() => {
apikey = req.query.apikey
texto = req.query.texto
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!texto) return res.json({ status : false,  message : "Cadê o parametro texto?"})
RG_US(apikey, req);
uber.getAudioUrl("pub_motekhcekzerxfxjro", "pk_d2d564c1-7942-4afc-9368-7520fc024603", 'chapolin-br', texto).then(async getBuf => {
res.type('mp3')
res.send(await getBuffer(getBuf))
})
})()
})

app.get('/api/imitar/eminem', (req, res) => {
(async() => {
apikey = req.query.apikey
texto = req.query.texto
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!texto) return res.json({ status : false,  message : "Cadê o parametro texto?"})
RG_US(apikey, req);
uber.getAudioUrl("pub_motekhcekzerxfxjro", "pk_d2d564c1-7942-4afc-9368-7520fc024603", 'eminem', texto).then(async getBuf => {
res.type('mp3')
res.send(await getBuffer(getBuf))
})
})()
})

app.get('/api/imitar/faustao', (req, res) => {
(async() => {
apikey = req.query.apikey
texto = req.query.texto
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!texto) return res.json({ status : false,  message : "Cadê o parametro texto?"})
RG_US(apikey, req);
uber.getAudioUrl("pub_motekhcekzerxfxjro", "pk_d2d564c1-7942-4afc-9368-7520fc024603", 'faustao', texto).then(async getBuf => {
res.type('mp3')
res.send(await getBuffer(getBuf))
})
})()
})

app.get('/api/imitar/ibere', (req, res) => {
(async() => {
apikey = req.query.apikey
texto = req.query.texto
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!texto) return res.json({ status : false,  message : "Cadê o parametro texto?"})
RG_US(apikey, req);
uber.getAudioUrl("pub_motekhcekzerxfxjro", "pk_d2d564c1-7942-4afc-9368-7520fc024603", 'ibere', texto).then(async getBuf => {
res.type('mp3')
res.send(await getBuffer(getBuf))
})
})()
})

app.get("/api/open-ai_txt", async(req, res, next) => {
async function PRGT() {
try {
var { Configuration, OpenAIApi } = require("openai") //precisa baixar o módulo (npm i openai)
var { q, TOKEN_GPT } = req.query
var configopen = new Configuration({ apiKey: TOKEN_GPT.trim() }); //coloca sua key aqui
 var openai = new OpenAIApi(configopen); //configuração do openai (sincronização da sua key)
 if(!q) return res.json({message: 'Em que posso te ajudar?, pergunte e eu te responderei 🙂'})
 if(!TOKEN_GPT) return res.json({resultado: `Faltando definir o token: &TOKEN_GPT=SEU
 TOKEN`})
 var resopen = await openai.createCompletion({
frequency_penalty: 0.5, //não sei
max_tokens: 3000, //quantidade máxima de palavra-chave
model: "text-davinci-003", //modelo de respostas
presence_penalty: 0, //não sei
prompt: q, //o que deseja  
temperature: 1, //respostas exatas (não entendi muito bem na documentação)
top_p: 1, //não sei
});
respgpt = resopen.data.choices[0].text.includes('\n') ? resopen.data.choices[0].text.replace('\n\n', '') : resopen.data.choices[0].text
res.json({resultado: respgpt})
} catch (e) {
console.log(e)
res.json({resultado: "Erro / Talvez seu token expirou, espere um tempo para tentar novamente."})
}
}
PRGT().catch(async(e) => {
console.log(e)
res.json({resultado: "Erro / Talvez seu token expirou, espere um tempo para tentar novamente."})
})
})

app.get("/api/open-ai_img", async(req, res, next) => {
async function PRGT2() {
try {
var { Configuration, OpenAIApi } = require("openai") //precisa baixar o módulo (npm i openai)
var { q, TOKEN_GPT } = req.query
var configopen = new Configuration({ apiKey: TOKEN_GPT.trim()}); //coloca sua key aqui
var openai = new OpenAIApi(configopen); //configuração do openai (sincronização da sua key)
 if(!q) return res.json({resultado: 'Em que posso te ajudar? Peça algo, como: hulk com raiva 🙂'})
 if(!TOKEN_GPT) return res.json({message: `Faltando definir o token: &TOKEN_GPT=SEU
 TOKEN`})
 var respimg = await openai.createImage({
 prompt: q, //o que deseja
 n: 1, //quantidade de imagem
 size: "1024x1024", //tamanho (aceita apenas: 256x256, 512x512, e 1024x1024)
 });
res.type("jpeg")
res.send(await getBuffer(respimg.data.data[0].url))
} catch {
return res.json({resultado: "Erro / Talvez seu token expirou, espere um tempo para tentar novamente."})
}
}
PRGT2().catch(async() => {
return res.json({resultado: "Erro / Talvez seu token expirou, espere um tempo para tentar novamente."})
})
})

router.get('/api/yugioh', async (req, res, next) => {
var imagem = req.query.imagem; var titulo = req.query.titulo; var apikey = req.query.apikey; var desc = req.query.desc; var atk = req.query.atk; var def = req.query.def;
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro apikey?'})
if(!titulo)return res.json({status:false,message:'Cadê o parâmetro titulo?'})
if(!desc)return res.json({status:false,message:'Cadê o parâmetro desc?'})
if(!atk)return res.json({status:false, motivo:'Cadê o parâmetro atk?'})
if(!def)return res.json({status:false, motivo:'Cadê o parâmetro def?'})
if(!imagem)return res.json({status:false, motivo:'Cadê o parâmetro imagem?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    hasil = `https://api.lolhuman.xyz/api/yugioh?apikey=gataDios&img=${imagem}&title=${titulo}&desc=${desc}&atk=${atk}&def=${def}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/gostosinha.jpg', data)
        res.sendFile(bla+'/assets/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/api/attp', async (req, res) => {
try {
texto = req.query.texto
apikey = req.query.apikey
if(!texto) return res.json({message: "Faltando o parametro texto"})
if(!apikey)return res.json({message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
await attp(texto).then(img => {
res.sendFile(img, { root: __dirname})
}).catch(e => {
return res.json({message: "Erro.. "+e})
})
} catch (e) {
return res.json({message: "Erro.. "+e})
}
})

router.get('/api/ssweb', async (req, res, next) => {
      var link = req.query.link
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
      if(!link)return res.json({status:false, motivo:'Cadê o parâmetro link?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
GleysonBotsl.ssweb(link).then((data) => { 
		if (!data) return res.json({erro: `ERROR 404`})
		res.set({'Content-Type': 'image/png'})
		res.send(data) 
		}).catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/ytmp4-2', async(req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/ytmp4?link=${url}&apikey=p7ori`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/imgprapdf', async(req, res, next) => {
apikey = req.query.apikey
file = req.query.file
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!file) return res.json({ status : false,  message : "Cade o parametro file?"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://api.lolhuman.xyz/api/convert2pdf?apikey=gataDios&filename=SabAPI.jpg&file=${file}`))
    .then(response => response.json())
        .then(hasil => {
             res.json({
                 status: true,
                 
                 result: `${hasil.result}`
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/ia/gbard', async(req, res, next) => {
apikey = req.query.apikey
query = req.query.query
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://xanax-apis.online/ias/bard?q=${query}&apikey=x-vitorsabs`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/ia/bing', async(req, res, next) => {
apikey = req.query.apikey
query = req.query.query
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://xanax-apis.online/ias/bing?pesquisa=${query}&apikey=x-vitorsabs`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/ia/gpt', async(req, res, next) => {
apikey = req.query.apikey
query = req.query.query
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://vihangayt.me/tools/chatgpt?q=${query}`))
    .then(response => response.json())
        .then(hasil => {
        var resultado = hasil.data;
             res.json({
                 status: true,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/pesquisa_agora', async(req, res, next) => {
apikey = req.query.apikey
query = req.query.query
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"}) 
RG_US(apikey, req);
  if(key.map(i => i.apikey)?.includes(apikey)){
    fetch(encodeURI(`https://apis.bronxyshost.com/api-bronxys/pesquisa_agora?pesq=${query}&apikey=sigma22`))
    .then(response => response.json())
        .then(hasil => {
             res.json({
                 status: 200,
                 message: `${hasil.msg}`
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/esporte_noticias', async(req, res, next) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
if(key.map(i => i.apikey)?.includes(apikey)){
fetch(encodeURI(`https://api.bronxyshost.com.br/api-bronxys/esporte_noticias?apikey=sigma22`)).then(response => response.json()).then(resultado => {
             res.json({
                 status: 200,
                 resultado 
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/fazernick', async (req, res) => {
apikey = req.query.apikey  
let nome = req.query.nome || res.json({message: 'insira o parâmetro: ?nome='})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
await gerarnick(nome)
.then(nicks => {
res.send(nicks) 
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/mediafire', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
RG_US(apikey, req);
mediafireDl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/wikimedia', async (req, res, next) => {
apikey = req.query.apikey
query = req.query.query
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"})
RG_US(apikey, req);
wikimedia(query)
.then(hasil => {
var resultado = hasil;
res.json({
status: 200,
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/gimage',(req,res) => {
apikey = req.query.apikey
txt = req.query.txt
if(!txt) return res.json({message: "Faltando o parametro txt"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GOOGLE_IMG_SCRAP({
search: txt,
query: {
EXTENSION: GOOGLE_QUERY.EXTENSION.JPG
},
limit: 5,
domains: ["alamy.com", "istockphoto.com", "vecteezy.com", "pinterest.com", "google.com"],
excludeWords: ["black", "white"], //If you don't like black and white cats
custom: "name=content&name2=content2",
safeSearch: false,
 // excludeDomains: ["istockphoto.com", "alamy.com"]
}).then(e => {
resultado = e
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
}) 
})


app.get('/api/tiktok-4', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
     TikTokScraper.getVideoMeta(url)
         .then(data => {
             console.log(data)
             var resultado = data;
res.json({
resultado
             })
         })
         .catch(e => {
             res.json({erro:'Erro no Servidor Interno'})
         })
})

app.get('/api/wattpad',  async (req, res, next) => {
apikey = req.query.apikey
query = req.query.query
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
wattpad(query).then(result => {
res.json({
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/tiktok-3',  async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
aexm.ttdownloader(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/instareels', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
download.lib_reels(url).then(data => {
var resultado = data.payload;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/tiktok-2', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
download.tiktok(url).then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

// LOGOS 2 TEXTO

app.get('/api/marvel', async (req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/3ddragon', async (req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/cartoon', async (req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/3d-cartoon-text-effect-generator-online-1123.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/deepsea', async (req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/thorstyle', async (req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto)return res.json({status:false,message:'cade o parametro texto'})
if(!texto2)return res.json({status:false,message:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/hologram', async (req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/hologram-color-3d-text-effect-generator-online-1117.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/pornhub', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/space',  async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!texto2) return res.json({status:false,message:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/stone', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/steel', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/3d-steel-text-effect-877.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/grafity', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/glitch3', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/america', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


// LOGOS 1 TEXTO

router.get('/api/ephoto/brilhante', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/tao-hieu-ung-chu-phat-sang-online-834.html", [nome]).then((data) => {
return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.jpg', function(){
RG_US(apikey, req);
 return res.sendFile(path.resolve('./assets/ephoto.jpg'))
})
})
});

router.get('/api/ephoto/blur', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/hieu-ung-viet-chu-len-cua-kinh-mua-tam-trang-dep-682.html", [nome]).then((data) => {
return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.jpg', function(){
RG_US(apikey, req);
 return res.sendFile(path.resolve('./assets/ephoto.jpg'))
})
})
});

router.get('/api/ephoto/goldt', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-vang-moi-271.html", [nome]).then((data) => {
return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.jpg', function(){
RG_US(apikey, req);
 return res.sendFile(path.resolve('./assets/ephoto.jpg'))
})
})
});

router.get('/api/ephoto/tela', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-tren-vai-62.html", [nome]).then((data) => {
return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.jpg', function(){
RG_US(apikey, req);
 return res.sendFile(path.resolve('./assets/ephoto.jpg'))
})
})
});

router.get('/api/ephoto/vietnam', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/tao-hieu-ung-chu-quoc-ky-viet-nam-truc-tuyen-884.html", [nome]).then((data) => {
return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.jpg', function(){
RG_US(apikey, req);
return res.sendFile(path.resolve('./assets/ephoto.jpg'))
})
})
});

router.get('/api/ephoto/seta', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
let radio = "e0723d60-fc0d-421f-bf8f-a9b9b61e4be6"
mintake.ephoto("https://ephoto360.com/tao-hieu-ung-mui-ten-dinh-kem-chu-ky-nhieu-mau-846.html", [nome],radio)
  .then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.jpg', function(){
RG_US(apikey, req);
return res.sendFile(path.resolve('./assets/ephoto.jpg'))
})
})
});

router.get('/api/ephoto/grafite', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
nome2 = req.query.texto2;
if (nome === undefined || nome2 === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & texto2 & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/viet-chu-graffiti-nghe-thuat-tren-tuong-day-mau-sac-792.html", [nome, nome2]).then((data) => {
return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.jpg', function(){
RG_US(apikey, req);
 return res.sendFile(path.resolve('./assets/ephoto.jpg'))
})
})
});

router.get('/api/ephoto/pubgv', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/tao-avatar-video-pubg-phong-cach-nhieu-song-glitch-627.html", [nome,]).then((data) => {
    return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.mp4', function(){
RG_US(apikey, req);
 return res.sendFile(path.resolve('./assets/ephoto.mp4'))
 })
  })
});

router.get('/api/ephoto/anonovo', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/tao-thiep-video-new-year-countdown-2022-888.html", [nome]).then((data) => {
return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.mp4', function(){
RG_US(apikey, req);
 return res.sendFile(path.resolve('./assets/ephoto.mp4'))
 })
  })
});

router.get('/api/ephoto/natalmsg', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/tao-thiep-video-giang-sinh-dep-va-an-tuong-danh-tang-ban-be-va-nguoi-than-885.html", [nome]).then((data) => {
return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.mp4', function(){
RG_US(apikey, req);
 return res.sendFile(path.resolve('./assets/ephoto.mp4'))
 })
  })
});

router.get('/api/ephoto/trigrev', async (req, res) => {
apikey = req.query.apikey;
nome = req.query.texto;
if (nome === undefined || apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
mintake.ephoto2("https://ephoto360.com/hieu-ung-video-logo-con-ho-ky-thuat-so-862.html", [nome]).then((data) => {
return download_Url(`https://s1.ephoto360.com${data}`, './assets/ephoto.mp4', function(){
RG_US(apikey, req);
 return res.sendFile(path.resolve('./assets/ephoto.mp4'))
 })
  })
});

// LOGOS - PHOTOOXY

router.get('/api/photooxy/flaming', async (req, res, next) => {
var text1 = req.query.texto
if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/photooxy/shadow-sky', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/photooxy/metallic', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/photooxy/naruto', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/photooxy/pubg', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var Texto2 = req.query.texto2
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/photooxy/under-grass', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})    
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/photooxy/harry-potter', async (req, res, next) => {
	var text1 = req.query.texto
    if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
    var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/photooxy/flower-typography', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/art-effects/flower-typography-text-effect-164.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/photooxy/picture-of-love', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/photooxy/coffee-cup', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/photooxy/butterfly', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/photooxy/night-sky', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/photooxy/carved-wood', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/photooxy/illuminated-metallic', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/photooxy/sweet-candy', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);  
GleysonBotsl.photooxy("https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/1917', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/robotr2', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/robot-r2-d2-text-effect-903.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/purpleshiny', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/purple-shiny-glass-text-effect-906.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/rock', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/rock-text-effect-online-915.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/1917', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/peridot-stone-text-effect-916.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/ninjalogo', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"}) 
	var text2 = req.query.texto
	if (!text2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-ninja-logo-online-935.html", [text1, text2])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/toxic', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/captain', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/captain-america-text-effect-905.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/stargreen', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/decorate-green-text-effect-918.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/denimtext', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/denim-text-effect-online-919.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/ultragloss', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/ultra-gloss-text-effect-online-920.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/goldfoil', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/gold-foil-balloon-text-effect-922.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/steeltext', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/steel-text-effect-online-921.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/wicker', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/wicker-text-effect-online-932.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/joker', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-logo-joker-online-934.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/metaldark', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/metal-dark-gold-text-effect-online-939.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/darkgold', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/metal-dark-gold-text-effect-online-939.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/halloweenfire', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/fabric', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/firework', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/glossycarbon', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/glossy-carbon-text-effect-965.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get("/api/consultas:", async (req, res) => {
//var type = req.query.type
if(!type)return res.json({ status:false, resultado:'Cade o parametro type??'})
//query = req.query.query
if(!q)return res.json({ status:false, resultado:'Cade o parametro q??'})
apikey = req.query.apikey
if(!apikey)return res.json({ status:false, resultado:'Cade o parâmetro apikey??'})
	var db = JSON.parse(fs.readFileSync("db.json"));
    var achou2 = false;
	const type = req.params.type.toLowerCase() || '';
	const query = req.params.q.toLowerCase() || '';
 if (!query) return res.json({
                 status: true,

               "resultado": {
               "str": "[❌] Ensira o tipo de consulta [❌]"
               }
             })
 if (type.search(/cpf|cpf1|cpf2|cpf3|cpf4|cpf5|cpf6|cpf7||cpf8tel|tel1|tel2|cnpj|score|nome|nome1|nome2|nome3|nome4|parentes|beneficios|placa|placa1|placa2|vizinhos|site|ip|cep|cep1|bin|email1|email2|vacina|vacina1|vacina2|rg|fotorj|fotocr|chassi|vazou|mae|pai|pix|cns|html|motor|nascimento/) === -1) return res.send('Tipo de consulta invalida');
	console.log(`[CONSULTA] : ${type} = ${query}`);
	if (db && db[type] && db[type][query]) return res.send(db[type][query]);

	const Consultar = {
		nego() {
			if (query.length != 11) return res.json({err:'O CPF deve conter 11 digitos!'})

			telegram.sendMessage(Grupos[0].chat, {
				message: `/cpf2 ${query}`
			})
				.catch((e) => res.json({
                 status: true,

               "resultado": {
               "str": "[❌] Não foi possível fazer consulta.[❌]"
               }
             })
				);
		}
	}
	if (Consultar[type]) Consultar[type]();
	else await telegram.sendMessage(Grupos[0].chat, {
		message: `/${type} ${query}`
	})
		.catch((e) =>{
			res.json({
                 status: true,

               "resultado": {
               "str": "[❌] Não foi possível fazer consulta.[❌]"
               }
             })

			console.log("DEBUG NO CÓDIGO:",e)
		});
	async function OnMsg(event) {
		const message = event.message;
		const textPure =
			message && message.text ?
			message.text :
			message && message.message ?
			message.message : '';
		const text =
			message && message.text ?
			message.text.toLowerCase() :
			message && message.message ?
			message.message.toLowerCase() : '';
		const msgMarked = await message.getReplyMessage();
		const msgMarkedText =
			msgMarked && msgMarked.text ?
			msgMarked.text.toLowerCase() :
			msgMarked && msgMarked.message ?
			msgMarked.message.toLowerCase() : '';
		const sender = await message.getSender();
		const senderId = sender && sender.username ? sender.username : '';
		const chat = await message.getChat();
		const chatId = chat && chat.username ? chat.username : '';
		msgggveri = msgMarkedText.replace(/\/|-|\.|\`|\*/g, '').toLowerCase()
				queryverii = query.replace(/\/|-|\.|\`|\*/g, '').toLowerCase()
				txtuuuveri = text.replace(/\/|-|\.|\`|\*/g, '').toLowerCase()
		for (let i of Grupos) {
			try {
				if ((chatId == i.chat && senderId == i.bot) && (msgggveri.includes(queryverii) || txtuuuveri.includes(queryverii) )) {
					achou2 = true;
					await telegram.markAsRead(chat);
					//console.log(`text: ${textPure}, msgMarked: ${msgMarkedText}`)
					if (text.includes("⚠️"))return res.json({
                 status: true,

               "resultado": {
               "str": "[⚠️] NÃO ENCONTRANDO! [⚠️]"
               }
             })
					if (text.includes("Inválido") || text.includes("INVÁLIDO"))
						res.json({
                 status: true,

               "resultado": {
               "str": "[⚠️] INVALIDO! [⚠️]"
               }
             })

				}

				if ((chatId == i.chat && senderId == i.bot) && (msgggveri.includes(queryverii) || txtuuuveri.includes(queryverii) )) {
					achou2 = true;
					await telegram.markAsRead(chat);
					let str = textPure;
					str = str.replace(/\*/gi, "");
					str = str.replace(/\`/gi, "");
					str = str.replace(/\+/gi, "");
					str = str.replace(/\[/gi, "");
					str = str.replace(/\]/gi, "");
					str = str.replace(/\(/gi, "");
					str = str.replace(/\)/gi, "");
					str = str.replace(/\•/gi, "");
					str = str.replace(/\n\n\n/gi, "\n\n");
					str = str.replace(/CONSULTA DE CPF 2 \n\n/gi, "CONSULTA DE CPF ");
					str = str.replace(/🔍 CONSULTA DE CPF1 COMPLETA 🔍/gi, "CONSULTA DE CPF ");
					str = str.replace(/🔍 CONSULTA DE CPF3 COMPLETA 🔍/gi, "CONSULTA DE CPF ");
					str = str.replace(/🔍 CONSULTA DE CPF 4 🔍/gi, "CONSULTA DE CPF ");
                    str = str.replace(/BY: @MkBuscasRobot/gi, "");
					str = str.replace(/\n\nUSUÁRIO: NT CONSULTA/gi, '');
					str = str.replace(/USUÁRIO: NT CONSULTA\n\n/gi, '');
					str = str.replace(/ USUÁRIO: NT CONSULTA/gi, '');
					str = str.replace(/🔍|V1|V2/gi, '');
					str = str.replace(/COMPLETA/gi, '');
					str = str.replace(/CONSULTA DE CPF 2/gi, 'CONSULTA DE CPF');
					str = str.replace(/\n  \n𝘶𝘴𝘦𝘳: gleysonBots\n𝘣𝘺: @Noxbuscabot/gi, "");
					str = str.replace(/\n\n𝘶𝘴𝘦𝘳: gleysonBots\n𝘣𝘺: @Noxbuscabot/gi, '');
					str = str.replace(/REF: @refmkbuscas/gi, '');
					str = str.replace(/EMPTY/gi, "");
					str = str.replace(/\n\n\n\n/gi, "\n\n");
					str = str.replace(/USUÁRIO: NT CONSULTA/gi, '');
					str = str.replace(/COMPLETA/gi, '');
					str = str.replace(/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗖𝗣𝗙\n\n/gi, '');
					str = str.replace(/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗣𝗟𝗔𝗖𝗔\n\n/gi, '');
					str = str.replace(/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗧𝗘𝗟𝗘𝗙𝗢𝗡𝗘\n\n/gi, '');
					str = str.replace(/𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗡𝗢𝗠𝗘\n\n/gi, '');




					let json = {};
					const linhas = str.split("\n");
					for (const t of linhas) {
						const key = t.split(": ");
						key[0] = key[0]
							.replace(/\//g, " ")
							.toLowerCase()
							.replace(/(?:^|\s)\S/g, function (a) {
								return a.toUpperCase();
							})
							.replace(/ |•|-|•|/g, "");
						json[key[0]] = key[1];
					}
					if (db && db[type]) db[type][query] = str;
					else db[type] = {}, db[type][query] = str;
					fs.writeFileSync("db.json", JSON.stringify(db, null, "\t"));


					res.json({
                 status: true,

               "resultado": {
               str
               }
             })
				}
				return;
			} catch (e) {
				if (achou2) return;
				res.json({
                 status: true,

               "resultado": {
               "str": "[❌]error no servidor, não foi possivel fazer a consulta[❌]"
               }
             })
				console.log(e);
			}
		}
	}
	telegram.addEventHandler(OnMsg, new NewMessage({}));
	setTimeout(() => {
		if (achou2) return;
		res.json({
                 status: true,

               "resultado": {
               "str": "[⏳]servidor demorou muito para responder[⏳]"
               }
             })
	}, 90000);
});

router.get('/api/textpro/deluxe', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/deluxe-silver-text-effect-970.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/deluxegold', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/deluxe-gold-text-effect-966.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/holographic', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/horrorgift', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/horror-gift-text-effect-866.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/minion', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/galaxystyle', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/glossyblue', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/dark', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/metal-dark-gold-text-effect-984.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/sandsummer', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/sandengraved', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/sandwriting', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/winter', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/technology', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/scifi', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/americanflag', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-american-flag-3d-text-effect-online-1051.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/drug', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/plastic-bag-drug-text-effect-867.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/3ddeep', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/retro', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
texto3 = req.query.texto3;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!texto3) return res.json({message: "Cade o parametro texto3"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
Maker().TextPro("https://textpro.me/80-s-retro-neon-text-effect-online-979.html", [`${texto}`, `${texto2}`, `${texto3}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

router.get('/api/textpro/naturalleaves', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/multicolor', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/merrychristmas', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/christmas', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/holiday', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/candycane', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/generator', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/glue', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/wonderful', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/watercolor', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/glitch', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/textpro/blackpink', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/textpro/berry', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/textpro/neon', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/neontext', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/neon-text-effect-online-963.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/logobear', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req); 
	mumaker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/textpro/3dchristmas', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/3d-christmas-text-effect-by-Name-1055.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/textpro/thunder', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/textpro/3dboxtext', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/api/textpro/glitch2', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/glitchtiktok', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/video-game-classic', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);	
	mumaker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/marvel-studios', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);	
	mumaker.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/ninja-logo', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-ninja-logo-online-935.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/green-horror', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);   
	mumaker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/magma', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/3d-neon-light', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/3d-orange-juice', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	 	var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/chocolate-cake', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/textpro/strawberry', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	mumaker.textpro("https://textpro.me/strawberry-text-effect-online-889.html", [text1])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/angelwing', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/hackneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/fpsmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/equipemascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/make-team-logo-online-free-432.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/txtquadrinhos', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/3dsilver', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/frozen', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/goldtext', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/gold-text-effect-158.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/starballons', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ffavatar', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ffbanner', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/mascotegame', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/mascoteavatar', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-avatar-mascot-style-364.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/wingeffect', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/angelglx', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/wings-galaxy-206.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/gizquadro', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/writing-chalk-on-the-blackboard-30.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/blackpink', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/girlmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/logogame', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/romantic', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/fire', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/smoke', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/papel', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/narutologo', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lovemsg', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lovemsg2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lovemsg3', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/coffecup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/coffecup2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/florwooden', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/madeira', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/gameplay', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/googlesg', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
texto3 = req.query.texto3;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!texto3) return res.json({message: "Cade o parametro texto3"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/other-design/make-google-suggestion-photos-238.html", [`${texto}`, `${texto2}`, `${texto3}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lobometal', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/harryp', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/cup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/txtborboleta', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/shadow', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/cemiterio', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/metalgold', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/efeitoneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/transformer', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/narutologo2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/3dstone', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/fiction', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/esmeralda', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-luxury-3d-emerald-text-effects-online-1126.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/cattxt', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neondevil', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/demonfire', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/colaq', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/luxury', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/berry', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/matrix', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/horror', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/nuvem', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon3', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neve', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/xmas-cards-3d-online-942.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/areia', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/vidro', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/dropwater-text-effect-872.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/style', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/blood', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/pink', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/carbon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/glossy-carbon-text-effect-965.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/metalblue', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/jeans', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/denim-text-effect-online-919.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/jokerlogo', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-logo-joker-online-934.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/natal', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/ossos', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/skeleton-text-effect-online-929.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/asfalto', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/road-warning-text-effect-878.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/break', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/glitch2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/glitch', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!texto2) return res.json({status:false,message:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})


app.get('/api/lapis', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/3dgold', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/halloween', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lava', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/lava-text-effect-online-914.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/toxic', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/demongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/metalfire', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/hot-metal-text-effect-843.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/thunder', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/thunderv2', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/green-neon-text-effect-874.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon1', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon3d', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/rainbow', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/gelo', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
mumaker.textpro("https://textpro.me/ice-cold-text-effect-862.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

// FIM LOGOS

const {
PlayLinkMP3,
PlayLinkMP4,
PlayAudio,
PlayVideo,
ytSearch2
} = require("./base de dados/youtubev1.js");

var criador = "@GleysonBots"
 
app.get('/youtube/playmp3', async(req, res, next) => {
apikey = req.query.apikey;
 q = req.query.q
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
RG_US(apikey, req);
PlayAudio(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
 console.log(e)
res.json({
 message: `Erro no Servidor Interno`
 })})})
 
 router.all('/youtube/playmp3-2', async (req, res) => {
q = req.query.q
if(!q)return res.json({
status:false,
motivo:'Coloque o parâmetro: q'
})
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
auu = await Kibar(`https://ayu.p7api.xyz/api/dl/play?nome=${q}&apikey=saladakk`)
res.json({
status: true,
código: 999,
resultado: {
título: `${auu.resultado.título}`,
thumb: `${auu.resultado.thumb}`,
canal: `${auu.resultado.canal}`,
publicado: `${auu.resultado.publicado}`,
link: `${auu.resultado.link}`,
}
})
})
 
 app.get('/youtube/playmp4', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
RG_US(apikey, req);
PlayVideo(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})

 app.get('/youtube/mp3', async(req, res, next) => {
 apikey = req.query.apikey;
 link = req.query.link
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!link) return res.json({ status : false,  message: "Coloque o parametro: LINK"})
RG_US(apikey, req);
PlayLinkMP3(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})

app.get('/api/pokemon-search', async(req, res, next) => {
apikey = req.query.apikey;
name = req.query.name
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!name) return res.json({ status : false,  message: "Coloque o parametro: name"})
RG_US(apikey, req);
Pokemon.setLanguage('portuguese');
Pokemon.getPokemon(name).then((data) => { 
res.json(data)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/spotifysearch', async(req, res, next) => {
 apikey = req.query.apikey;
 query = req.query.query
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!query) return res.json({ status : false,  message: "Coloque o parametro: query"})
RG_US(apikey, req);
searchSpotify(query).then((resolve) => { 
res.json(resolve)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/spotifydl', async(req, res, next) => {
 apikey = req.query.apikey;
 id = req.query.id
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!id) return res.json({ status : false,  message: "Coloque o parametro: id"})
RG_US(apikey, req);
getDownloadSingleLink(id).then((resultado) => { 
res.json(resultado)
console.log(resultado)
}).catch(e => {
console.log(e)
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/nasaphoto', async(req, res, next) => {
 apikey = req.query.apikey;
 data = req.query.data
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!data) return res.json({ status : false,  message: "Coloque o parametro: data > Exemplo: 19-10-2007"})
RG_US(apikey, req);
NASA.APOD('DEMO_KEY', `${data}`, false, false).then((data) => {
 res.json(data)
console.log(data)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/cep', async(req, res, next) => {
apikey = req.query.apikey;
code = req.query.code
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!code) return res.json({ status : false,  message: "Preencha ou adicione o parâmetro code"})
RG_US(apikey, req);
await Correios.getAddressByCEP(`${code}`).then((data) => {
res.json(data)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/instagram', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message: "cade o parametro url?"})
RG_US(apikey, req);
mumaker.instagram(url).then(data => {
res.json({status: true, código: 200, resultado: data})
}).catch(e => {
res.json({status: false, código: 404, message: `Erro no Servidor Interno`})
})
})

app.get('/api/twitter', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message: "cade o parametro url?"})
RG_US(apikey, req);
twtdl(url).then(data => {
res.json({status: true, código: 200, resultado: { images: data.images, videos: data.videos, gifs: data.gifs}})
}).catch(e => {
res.json({status: false, código: 404, message: `Erro no Servidor Interno`})
})
})

 app.get('/youtube/mp4', async(req, res, next) => {
 apikey = req.query.apikey;
 link = req.query.link
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!link) return res.json({ status : false,  message: "cade o parametro link?"})
RG_US(apikey, req);
PlayLinkMP4(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})

 app.get('/youtube/pesquisar', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RG_US(apikey, req);
 ytSearch2(q).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/pornhubsrc', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RG_US(apikey, req);
 pornhubsrc(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/download', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RG_US(apikey, req);
savefrom(url).then(form => {
res.json({
status: true,
criador: `${criador}`,
resultado: form
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/download2', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RG_US(apikey, req);
snapsave(url).then(data => {
res.json({
status: true,
criador: `${criador}`,
result: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno: ${e}`
})})})

app.get('/api/uptodown', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RG_US(apikey, req);
 uptodown(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/igstalk', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RG_US(apikey, req);
 igstalk(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/api/canvas/phub',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, message: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, message: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, message: 'Coloque o nome no parametro'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
bla = { username: nome, message: msg, image:foto}
res.type('jpg')
res.send(await canvacord.Canvas.phub(bla))
})()
})

app.get('/api/canvas/youtube',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, message: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, message: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, message: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
bla = { username: nome, content: msg, avatar: foto, dark:false }
res.type('jpg')
res.send(await canvacord.Canvas.youtube(bla))
})()
})

app.get('/api/canvas/lgbt',(req, res) => {
(async() => {
link = req.query.link
if (!link) return res.status(408).send({ status: 408, message: 'Coloque o link no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
res.type('jpg')
res.send(await canvacord.Canvas.rainbow(link))
})()
})

router.get('/vip/imgpraanime', async (req, res, next) => {
var apikey = req.query.apikey;
var img = req.query.img
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!img)return res.json({status:false,motivo:'Cadê o parâmetro img?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    hasil = `http://api.lolhuman.xyz/api/imagetoanime?apikey=gataDios&img=${img}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/gostosinha.jpg', data)
        res.sendFile(bla+'/assets/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.all('/api/cartoon', async (req, res) => {
apikey = req.query.apikey;
img = req.query.img;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!img)return res.json({status:false,message:'- Cadê o parâmetro img?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
auu = await Kibar(`https://xzn.wtf/api/aitoonme?url=${img}&apikey=darkzy_7`)
res.json({
status: true,
resultado: {
url_imagem: `${auu.url}`
}
})
})

router.get('/api/emoji/apple', async (req, res, next) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
	if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	var emj = req.query.emj	
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada emj"})
	if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	emoji.get(emj)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[0].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/api/emoji/google', async (req, res, next) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
	RG_US(apikey, req);
	emoji.get(emj)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[1].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/api/emoji/samsung', async (req, res, next) => {
		var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
	if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	emoji.get(emj)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[2].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})


router.get('/api/emoji/microsoft', async (req, res, next) => {
		var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
		apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
	if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	emoji.get(emj)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[3].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/api/emoji/whatsapp', async (req, res, next) => {
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
	apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
	if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	emoji.get(emj) 
    .then(async emoji => {
	resul = await getBuffer(emoji.images[4].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/api/emoji/twitter', async (req, res, next) => {
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
		apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
	if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	emoji.get(emj) 
    .then(async emoji => {
	resul = await getBuffer(emoji.images[5].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/api/emoji/facebook', async (req, res, next) => {
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
		apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
	if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	emoji.get(emj) 
    .then(async emoji => {
	resul = await getBuffer(emoji.images[6].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/api/emoji/skype', async (req, res, next) => {
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
		apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
	if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	emoji.get(emj) 
    .then(async emoji => {
	resul = await getBuffer(emoji.images[7].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

app.get('/api/canvas/hitler',(req, res) => {
(async() => {
 link = req.query.link
if (!link) return res.status(408).send({ status: 408, menssagem: 'Coloque o link no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
res.type('jpg')
res.send(await canvacord.Canvas.hitler(link))
})()
})

app.get('/api/canvas/kiss',(req, res) => {
(async() => {
link = req.query.link
link2 = req.query.link2
if (!link) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!link2) return res.status(408).send({ status: 408, menssagem: 'Coloque a url2 no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
  res.type('jpg')
  res.send(await canvacord.Canvas.kiss(link, link2))
})()
})

// Agradecimento a Paulo da Japa-Apis \\
router.get('/api/canvas/musicard', musicard)  
router.get('/api/canvas/comunismo', comunismo)  
router.get('/api/canvas/bolsonaro', bolsonaro)
router.get('/api/canvas/bnw', bnw) 
router.get('/api/canvas/affect', affect) 
router.get('/api/canvas/blur', blurr) 
router.get('/api/canvas/beautiful', beautiful)   
router.get('/api/canvas/circle', circle) 
router.get('/api/canvas/del', del) 
router.get('/api/canvas/invert', invert) 
router.get('/api/canvas/gay', gay) 
router.get('/api/canvas/facepalm', facepalm)    
router.get('/api/canvas/dither', dither) 
router.get('/api/canvas/jail', jail) 
router.get('/api/canvas/magik', magik) 
router.get('/api/canvas/rip', rip)   
router.get('/api/canvas/sepia', sepia) 
router.get('/api/canvas/rotate', rotate) 
router.get('/api/canvas/pixelate', pixelate) 
router.get('/api/canvas/trash', trash) 
router.get('/api/canvas/wasted', wasted)
router.get('/api/canvas/wanted', wanted)
router.get('/api/canvas/bobross', bobross)
router.get('/api/canvas/mms', mms)

router.get('/api/happymod', happymodr)

app.get('/about',(req, res) => {
res.json({
status:true,
dono:'@GleysonBots',
message:'Projeto em beta'
})
})

app.get('/api/antiporno',async (req,res,next) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
fetch(`https://nsfw-demo.sashido.io/api/image/classify?url=${url}`).then(e => {
res.json(e)
})
})

router.get('/api/screenshotweb', async (req, res, next) => {
url = req.query.url
if(!url)return res.json({status:false, motivo:'Cadê o parâmetro url?'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    hasil = `https://api.popcat.xyz/screenshot?url=${url}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/asupan.jpg', data)
        res.sendFile(bla + '/assets/asupan.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/mirella', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/mirella?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/asupan.mp4', data)
        res.sendFile(bla+'/assets/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_emoji', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 102)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/Figurinha-emoji/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_flork', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 102)
    hasil = `https://raw.githubusercontent.com/Scheyot2/anya-bot/master/Figurinhas/figu_flork/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figurinhas_ale', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 8051)
    hasil = `https://raw.githubusercontent.com/badDevelopper/Testfigu/master/fig (${rnd}).webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/dall-e', async (req, res, next) => {
var apikey = req.query.apikey;
var text = req.query.text;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!text)return res.json({status:false,message:'- Cadê o parâmetro text?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    hasil = `https://api.lolhuman.xyz/api/dall-e?apikey=&text=${text}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/gostosinha.jpg', data)
        res.sendFile(bla+'/assets/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno. Aguarde o adm revogar o token da OpenAi'})
}    
})

router.get('/sticker/figu_memes', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 109)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/Figurinha-memes/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_anime', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 109)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-anime/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_coreana', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 43)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-coreana/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_bebe', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 17)
    hasil = `https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figbebe/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_desenho', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 109)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-desenho/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_animais', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 46)
    hasil = `https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figanimais/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_engracada', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 25)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-engracadas/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_raiva', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 29)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-raiva/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/sticker/figu_roblox', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
var rnd = Math.floor(Math.random() * 21)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/master/FIGURINHAS/figurinha-roblox/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/stickera.webp', data)
        res.sendFile(bla+'/assets/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/nsfw/ahegao', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const ahegao = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ahegao.json'));
    const randahegao = ahegao[Math.floor(Math.random() * ahegao.length)];
    data = await fetch(randahegao).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/ahegao.jpeg', data)
    res.sendFile(bla + '/assets/ahegao.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/ass', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const ass = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ass.json'));
    const randass = ass[Math.floor(Math.random() * ass.length)];
    data = await fetch(randass).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/ass.jpeg', data)
    res.sendFile(bla + '/assets/ass.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/bdsm', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const bdsm = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/bdsm.json'));
    const randbdsm = bdsm[Math.floor(Math.random() * bdsm.length)];
    data = await fetch(randbdsm).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/bdsm.jpeg', data)
    res.sendFile(bla + '/assets/bdsm.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/blowjob', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const blowjob = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/blowjob.json'));
    const randblowjob = blowjob[Math.floor(Math.random() * blowjob.length)];
    data = await fetch(randblowjob).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/blowjob.jpeg', data)
    res.sendFile(bla + '/assets/blowjob.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/cuckold', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const cuckold = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/cuckold.json'));
    const randcuckold = cuckold[Math.floor(Math.random() * cuckold.length)];
    data = await fetch(randcuckold).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/cuckold.jpeg', data)
    res.sendFile(bla + '/assets/cuckold.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/cum', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const cum = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/cum.json'));
    const randcum = cum[Math.floor(Math.random() * cum.length)];
    data = await fetch(randcum).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/cum.jpeg', data)
    res.sendFile(bla + '/assets/cum.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/ero', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const ero = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ero.json'));
    const randero = ero[Math.floor(Math.random() * ero.length)];
    data = await fetch(randero).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/ero.jpeg', data)
    res.sendFile(bla + '/assets/ero.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/femdom', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const femdom = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/femdom.json'));
    const randfemdom = femdom[Math.floor(Math.random() * femdom.length)];
    data = await fetch(randfemdom).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/femdom.jpeg', data)
    res.sendFile(bla + '/assets/femdom.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/foot', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const foot = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/foot.json'));
    const randfoot = foot[Math.floor(Math.random() * foot.length)];
    data = await fetch(randfoot).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/foot.jpeg', data)
    res.sendFile(bla + '/assets/foot.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/gangbang', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const gangbang = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/gangbang.json'));
    const randgangbang = gangbang[Math.floor(Math.random() * gangbang.length)];
    data = await fetch(randgangbang).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/gangbang.jpg', data)
    res.sendFile(bla + '/assets/gangbang.jpg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/glasses', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const glasses = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/glasses.json'));
    const randglasses = glasses[Math.floor(Math.random() * glasses.length)];
    data = await fetch(randglasses).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/glasses.jpeg', data)
    res.sendFile(bla + '/assets/glasses.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/hentai', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const hentai = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/hentai.json'));
    const randhentai = hentai[Math.floor(Math.random() * hentai.length)];
    data = await fetch(randhentai).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/hentai.jpeg', data)
    res.sendFile(bla + '/assets/hentai.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/gifs', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    const gifs = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/gifs.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/gifs.jpeg', data)
    res.sendFile(bla + '/assets/gifs.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/figu', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    const gifs = JSON.parse(fs.readFileSync(bla + '/base de dados/figurinhas.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/stickera.webp', data)
    res.sendFile(bla + '/assets/stickera.webp')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/api/stickera', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    const gifs = JSON.parse(fs.readFileSync(bla + '/base de dados/figurinhas.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/stickera.webp', data)
    res.sendFile(bla + '/assets/stickera.webp')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/jahy', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const jahy = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/jahy.json'));
    const randjahy = jahy[Math.floor(Math.random() * jahy.length)];
    data = await fetch(randjahy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/jahy.jpeg', data)
    res.sendFile(bla + '/assets/jahy.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/manga', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const manga = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/manga.json'));
    const randmanga = manga[Math.floor(Math.random() * manga.length)];
    data = await fetch(randmanga).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/manga.jpeg', data)
    res.sendFile(bla + '/assets/manga.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/masturbation', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const masturbation = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/masturbation.json'));
    const randmasturbation = masturbation[Math.floor(Math.random() * masturbation.length)];
    data = await fetch(randmasturbation).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/masturbation.jpeg', data)
    res.sendFile(bla + '/assets/masturbation.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/neko', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const neko = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/neko.json'));
    const randneko = neko[Math.floor(Math.random() * neko.length)];
    data = await fetch(randneko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/neko.jpeg', data)
    res.sendFile(bla + '/assets/neko.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/orgy', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const orgy = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/orgy.json'));
    const randorgy = orgy[Math.floor(Math.random() * orgy.length)];
    data = await fetch(randorgy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/orgy.jpeg', data)
    res.sendFile(bla + '/assets/orgy.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/panties', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const panties = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/panties.json'));
    const randpanties = panties[Math.floor(Math.random() * panties.length)];
    data = await fetch(randpanties).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/panties.jpeg', data)
    res.sendFile(bla + '/assets/panties.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/pussy', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const pussy = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/pussy.json'));
    const randpussy = pussy[Math.floor(Math.random() * pussy.length)];
    data = await fetch(randpussy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/pussy.jpeg', data)
    res.sendFile(bla + '/assets/pussy.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/neko2', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const neko2 = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/neko2.json'));
    const randneko2 = neko2[Math.floor(Math.random() * neko2.length)];
    data = await fetch(randneko2).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/neko2.jpeg', data)
    res.sendFile(bla + '/assets/neko2.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/tentacles', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const tentacles = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/tentacles.json'));
    const randtentacles = tentacles[Math.floor(Math.random() * tentacles.length)];
    data = await fetch(randtentacles).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/tentacles.jpeg', data)
    res.sendFile(bla + '/assets/tentacles.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/thighs', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const thighs = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/thighs.json'));
    const randthighs = thighs[Math.floor(Math.random() * thighs.length)];
    data = await fetch(randthighs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/thighs.jpeg', data)
    res.sendFile(bla + '/assets/thighs.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/yuri', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const yuri = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yuri.json'));
    const randyuri = yuri[Math.floor(Math.random() * yuri.length)];
    data = await fetch(randyuri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/yuri.jpeg', data)
    res.sendFile(bla + '/assets/yuri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/zettai', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const zettai = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/zettai.json'));
    const randzettai = zettai[Math.floor(Math.random() * zettai.length)];
    data = await fetch(randzettai).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/zettai.jpeg', data)
    res.sendFile(bla + '/assets/zettai.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/keneki', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const keneki = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/keneki.json'));
    const randkeneki = keneki[Math.floor(Math.random() * keneki.length)];
    data = await fetch(randkeneki).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/keneki.jpeg', data)
    res.sendFile(bla + '/assets/keneki.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/megumin', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const megumin = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/megumin.json'));
    const randmegumin = megumin[Math.floor(Math.random() * megumin.length)];
    data = await fetch(randmegumin).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/megumin.jpeg', data)
    res.sendFile(bla + '/assets/megumin.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/yotsuba', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const yotsuba = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yotsuba.json'));
    const randyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)];
    data = await fetch(randyotsuba).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/yotsuba.jpeg', data)
    res.sendFile(bla + '/assets/yotsuba.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shinomiya', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const shinomiya = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shinomiya.json'));
    const randshinomiya = shinomiya[Math.floor(Math.random() * shinomiya.length)];
    data = await fetch(randshinomiya).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/shinomiya.jpeg', data)
    res.sendFile(bla + '/assets/shinomiya.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/yumeko', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const yumeko = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yumeko.json'));
    const randyumeko = yumeko[Math.floor(Math.random() * yumeko.length)];
    data = await fetch(randyumeko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/yumeko.jpeg', data)
    res.sendFile(bla + '/assets/yumeko.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/tejina', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const tejina = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/tejina.json'));
    const randtejina = tejina[Math.floor(Math.random() * tejina.length)];
    data = await fetch(randtejina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/tejina.jpeg', data)
    res.sendFile(bla + '/assets/tejina.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/chiho', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const chiho = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/chiho.json'));
    const randchiho = chiho[Math.floor(Math.random() * chiho.length)];
    data = await fetch(randchiho).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/chiho.jpeg', data)
    res.sendFile(bla + '/assets/chiho.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/cyberspace', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const cyberspace = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/CyberSpace.json'));
    const randcyberspace = cyberspace[Math.floor(Math.random() * cyberspace.length)];
    data = await fetch(randcyberspace).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/cyberspace.jpeg', data)
    res.sendFile(bla + '/assets/cyberspace.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/gaming', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const gaming = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/GameWallp.json'));
    const randgaming = gaming[Math.floor(Math.random() * gaming.length)];
    data = await fetch(randgaming).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/gaming.jpeg', data)
    res.sendFile(bla + '/assets/gaming.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/programing', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const programing = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/Programming.json'));
    const randprograming = programing[Math.floor(Math.random() * programing.length)];
    data = await fetch(randprograming).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/programing.jpeg', data)
    res.sendFile(bla + '/assets/programing.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/wallpapertec', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const teknologi = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/Technology.json'));
    const randteknologi = teknologi[Math.floor(Math.random() * teknologi.length)];
    data = await fetch(randteknologi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/teknologi.jpeg', data)
    res.sendFile(bla + '/assets/teknologi.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/mountain', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const mountain = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/Mountain.json'));
    const randmountain = mountain[Math.floor(Math.random() * mountain.length)];
    data = await fetch(randmountain).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/mountain.jpeg', data)
    res.sendFile(bla + '/assets/mountain.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/random/toukachan', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const toukachan = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/toukachan.json'));
    const randtoukachan = toukachan[Math.floor(Math.random() * toukachan.length)];
    data = await fetch(randtoukachan).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/toukachan.jpeg', data)
    res.sendFile(bla + '/assets/toukachan.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/akira', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const akira = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/akira.json'));
    const randakira = akira[Math.floor(Math.random() * akira.length)];
    data = await fetch(randakira).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/akira.jpeg', data)
    res.sendFile(bla + '/assets/akira.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/itori', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const itori = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/itori.json'));
    const randitori = itori[Math.floor(Math.random() * itori.length)];
    data = await fetch(randitori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/itori.jpeg', data)
    res.sendFile(bla + '/assets/itori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kurumi', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const kurumi = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kurumi.json'));
    const randkurumi = kurumi[Math.floor(Math.random() * kurumi.length)];
    data = await fetch(randkurumi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/kurumi.jpeg', data)
    res.sendFile(bla + '/assets/kurumi.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/miku', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const miku = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/miku.json'));
    const randmiku = miku[Math.floor(Math.random() * miku.length)];
    data = await fetch(randmiku).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/miku.jpeg', data)
    res.sendFile(bla + '/assets/miku.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/pokemon', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const pokemon = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/pokemon.json'));
    const randpokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    data = await fetch(randpokemon).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/pokemon.jpeg', data)
    res.sendFile(bla + '/assets/pokemon.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/ryujin', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const ryujin = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ryujin.json'));
    const randryujin = ryujin[Math.floor(Math.random() * ryujin.length)];
    data = await fetch(randryujin).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/ryujin.jpeg', data)
    res.sendFile(bla + '/assets/ryujin.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/rose', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const rose = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/rose.json'));
    const randrose = rose[Math.floor(Math.random() * rose.length)];
    data = await fetch(randrose).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/rose.jpeg', data)
    res.sendFile(bla + '/assets/rose.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kaori', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const kaori = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kaori.json'));
    const randkaori = kaori[Math.floor(Math.random() * kaori.length)];
    data = await fetch(randkaori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/kaori.jpeg', data)
    res.sendFile(bla + '/assets/kaori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shizuka', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const shizuka = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shizuka.json'));
    const randshizuka = shizuka[Math.floor(Math.random() * shizuka.length)];
    data = await fetch(randshizuka).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/shizuka.jpeg', data)
    res.sendFile(bla + '/assets/shizuka.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kaga', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const kaga = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kaga.json'));
    const randkaga = kaga[Math.floor(Math.random() * kaga.length)];
    data = await fetch(randkaga).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/kaga.jpeg', data)
    res.sendFile(bla + '/assets/kaga.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kotori', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const kotori = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kotori.json'));
    const randkotori = kotori[Math.floor(Math.random() * kotori.length)];
    data = await fetch(randkotori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/kotori.jpeg', data)
    res.sendFile(bla + '/assets/kotori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/mikasa', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const mikasa = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/mikasa.json'));
    const randmikasa = mikasa[Math.floor(Math.random() * mikasa.length)];
    data = await fetch(randmikasa).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/mikasa.jpeg', data)
    res.sendFile(bla + '/assets/mikasa.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/akiyama', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const akiyama = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/akiyama.json'));
    const randakiyama = akiyama[Math.floor(Math.random() * akiyama.length)];
    data = await fetch(randakiyama).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/akiyama.jpeg', data)
    res.sendFile(bla + '/assets/akiyama.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/gremory', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const gremory = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/gremory.json'));
    const randgremory = gremory[Math.floor(Math.random() * gremory.length)];
    data = await fetch(randgremory).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/gremory.jpeg', data)
    res.sendFile(bla + '/assets/gremory.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/isuzu', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const isuzu = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/isuzu.json'));
    const randisuzu = isuzu[Math.floor(Math.random() * isuzu.length)];
    data = await fetch(randisuzu).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/isuzu.jpeg', data)
    res.sendFile(bla + '/assets/isuzu.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/cosplay', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const cosplay = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/cosplay.json'));
    const randcosplay = cosplay[Math.floor(Math.random() * cosplay.length)];
    data = await fetch(randcosplay).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/cosplay.jpeg', data)
    res.sendFile(bla + '/assets/cosplay.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shina', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const shina = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shina.json'));
    const randshina = shina[Math.floor(Math.random() * shina.length)];
    data = await fetch(randshina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/shina.jpeg', data)
    res.sendFile(bla + '/assets/shina.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kagura', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const kagura = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kagura.json'));
    const randkagura = kagura[Math.floor(Math.random() * kagura.length)];
    data = await fetch(randkagura).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/kagura.jpeg', data)
    res.sendFile(bla + '/assets/kagura.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shinka', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const shinka = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shinka.json'));
    const randshinka = shinka[Math.floor(Math.random() * shinka.length)];
    data = await fetch(randshinka).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/shinka.jpeg', data)
    res.sendFile(bla + '/assets/shinka.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/eba', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const eba = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/eba.json'));
    const randeba = eba[Math.floor(Math.random() * eba.length)];
    data = await fetch(randeba).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/eba.jpeg', data)
    res.sendFile(bla + '/assets/eba.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/deidara', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Deidara = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/deidara.json'));
    const randDeidara = Deidara[Math.floor(Math.random() * Deidara.length)];
    data = await fetch(randDeidara).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/deidara.jpeg', data)
    res.sendFile(bla + '/assets/deidara.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/random/jeni', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const jeni = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/jeni.json'));
    const randjeni = jeni[Math.floor(Math.random() * jeni.length)];
    data = await fetch(randjeni).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/jeni.jpeg', data)
    res.sendFile(bla + '/assets/jeni.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/meme', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const meme = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/meme.json'));
    const randmeme = meme[Math.floor(Math.random() * meme.length)];
    data = await fetch(randmeme).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/meme.jpeg', data)
    res.sendFile(bla + '/assets/meme.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/satanic', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const satanic = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/satanic.json'));
    const randsatanic = satanic[Math.floor(Math.random() * satanic.length)];
    data = await fetch(randsatanic).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/satanic.jpeg', data)
    res.sendFile(bla + '/assets/satanic.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/random/itachi', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Itachi = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/itachi.json'));
    const randItachi = Itachi[Math.floor(Math.random() * Itachi.length)];
    data = await fetch(randItachi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/ita.jpeg', data)
    res.sendFile(bla + '/assets/ita.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/madara', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Madara = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/madara.json'));
    const randMadara = Madara[Math.floor(Math.random() * Madara.length)];
    data = await fetch(randMadara).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/madara.jpeg', data)
    res.sendFile(bla + '/assets/madara.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/yuki', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Yuki = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yuki.json'));
    const randYuki = Yuki[Math.floor(Math.random() * Yuki.length)];
    data = await fetch(randYuki).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/yuki.jpeg', data)
    res.sendFile(bla + '/assets/yuki.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/asuna', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const asuna = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/asuna.json'));
    const randasuna = asuna[Math.floor(Math.random() * asuna.length)];
    data = await fetch(randasuna).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/asuna.jpeg', data)
    res.sendFile(bla + '/assets/asuna.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/ayuzawa', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const ayuzawa = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ayuzawa.json'));
    const randayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)];
    data = await fetch(randayuzawa).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/ayuzawa.jpeg', data)
    res.sendFile(bla + '/assets/ayuzawa.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/chitoge', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const chitoge = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/chitoge.json'));
    const randchitoge = chitoge[Math.floor(Math.random() * chitoge.length)];
    data = await fetch(randchitoge).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/chitoge.jpeg', data)
    res.sendFile(bla + '/assets/chitoge.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/emilia', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const emilia = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/emilia.json'));
    const randemilia = emilia[Math.floor(Math.random() * emilia.length)];
    data = await fetch(randemilia).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/emilia.jpeg', data)
    res.sendFile(bla + '/assets/emilia.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/hestia', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const hestia = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/hestia.json'));
    const randhestia = hestia[Math.floor(Math.random() * hestia.length)];
    data = await fetch(randhestia).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/hestia.jpeg', data)
    res.sendFile(bla + '/assets/hestia.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/inori', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const inori = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/inori.json'));
    const randinori = inori[Math.floor(Math.random() * inori.length)];
    data = await fetch(randinori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/inori.jpeg', data)
    res.sendFile(bla + '/assets/inori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/ana', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const ana = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ana.json'));
    const randana = ana[Math.floor(Math.random() * ana.length)];
    data = await fetch(randana).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/ana.jpeg', data)
    res.sendFile(bla + '/assets/ana.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/boruto', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Boruto = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/boruto.json'));
    const randBoruto = Boruto[Math.floor(Math.random() * Boruto.length)];
    data = await fetch(randBoruto).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/bor.jpeg', data)
    res.sendFile(bla + '/assets/bor.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/erza', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Erza = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/erza.json'));
    const randErza = Erza[Math.floor(Math.random() * Erza.length)];
    data = await fetch(randErza).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/erza.jpeg', data)
    res.sendFile(bla + '/assets/erza.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kakashi', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Kakasih = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kakasih.json'));
    const randKakasih = Kakasih[Math.floor(Math.random() * Kakasih.length)];
    data = await fetch(randKakasih).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/ka.jpeg', data)
    res.sendFile(bla + '/assets/ka.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/sagiri', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Sagiri = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
    data = await fetch(randSagiri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/sagiri.jpeg', data)
    res.sendFile(bla + '/assets/sagiri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/minato', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Minato = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/minato.json'));
    const randMinato = Minato[Math.floor(Math.random() * Minato.length)];
    data = await fetch(randMinato).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/minato.jpeg', data)
    res.sendFile(bla + '/assets/minato.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/naruto', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Naruto = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/naruto.json'));
    const randNaruto = Naruto[Math.floor(Math.random() * Naruto.length)];
    data = await fetch(randNaruto).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/naruto.jpeg', data)
    res.sendFile(bla + '/assets/naruto.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/nezuko', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Nezuko = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/nezuko.json'));
    const randNezuko = Nezuko[Math.floor(Math.random() * Nezuko.length)];
    data = await fetch(randNezuko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/nezu.jpeg', data)
    res.sendFile(bla + '/assets/nezu.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/onepiece', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Pic = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/onepiece.json'));
    const randPic = Pic[Math.floor(Math.random() * Pic.length)];
    data = await fetch(randPic).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/pic.jpeg', data)
    res.sendFile(bla + '/assets/pic.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/rize', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Rize = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/rize.json'));
    const randRize = Rize[Math.floor(Math.random() * Rize.length)];
    data = await fetch(randRize).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/rize.jpeg', data)
    res.sendFile(bla + '/assets/rize.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/sakura', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Sakura = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/sakura.json'));
    const randSakura = Sakura[Math.floor(Math.random() * Sakura.length)];
    data = await fetch(randSakura).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/sakura.jpeg', data)
    res.sendFile(bla + '/assets/sakura.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/sasuke', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Sasuke = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/sasuke.json'));
    const randSasuke = Sasuke[Math.floor(Math.random() * Sasuke.length)];
    data = await fetch(randSasuke).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/sasuke.jpeg', data)
    res.sendFile(bla + '/assets/sasuke.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/tsunade', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Su = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/tsunade.json'));
    const randSu = Su[Math.floor(Math.random() * Su.length)];
    data = await fetch(randSu).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/su.jpeg', data)
    res.sendFile(bla + '/assets/su.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/montor', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Mon = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/montor.json'));
    const randMon = Mon[Math.floor(Math.random() * Mon.length)];
    data = await fetch(randMon).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/montor.jpeg', data)
    res.sendFile(bla + '/assets/montor.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/mobil', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Mob = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/mobil.json'));
    const randMob = Mob[Math.floor(Math.random() * Mob.length)];
    data = await fetch(randMob).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/mobil.jpeg', data)
    res.sendFile(bla + '/assets/mobil.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/anime', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Wai23 = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/wallhp2.json'));
    const randWai23 = Wai23[Math.floor(Math.random() * Wai23.length)];
    data = await fetch(randWai23).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/wallhp2.jpeg', data)
    res.sendFile(bla + '/assets/wallhp2.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/wallhp', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Wai22 = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/wallhp.json'));
    const randWai22 = Wai22[Math.floor(Math.random() * Wai22.length)];
    data = await fetch(randWai22).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/wallhp.jpeg', data)
    res.sendFile(bla + '/assets/wallhp.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/waifu2', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Wai2 = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/waifu2.json'));
    const randWai2 = Wai2[Math.floor(Math.random() * Wai2.length)];
    data = await fetch(randWai2).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/wibu2.jpeg', data)
    res.sendFile(bla + '/assets/wibu2.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/waifu', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Wai = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/waifu.json'));
    const randWai = Wai[Math.floor(Math.random() * Wai.length)];
    data = await fetch(randWai).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/wibu.jpeg', data)
    res.sendFile(bla + '/assets/wibu.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/hekel', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    Hekel = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/hekel.json'));
    const randHekel = Hekel[Math.floor(Math.random() * Hekel.length)]
    data = await fetch(randHekel).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/hek.jpeg', data)
    res.sendFile(bla + '/assets/hek.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kucing', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    Kucing = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kucing.json'));
    const randKucing = Kucing[Math.floor(Math.random() * Kucing.length)]
    data = await fetch(randKucing).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/kucing.jpeg', data)
    res.sendFile(bla + '/assets/kucing.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/pubg', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    Pubg = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/pubg.json'));
    const randPubg = Pubg[Math.floor(Math.random() * Pubg.length)]
    data = await fetch(randPubg).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/pubg.jpeg', data)
    res.sendFile(bla + '/assets/pubg.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/ppcouple', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    Pp = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/profil.json'));
    const randPp = Pp[Math.floor(Math.random() * Pp.length)]
    data = await fetch(randPp).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/pp.jpeg', data)
    res.sendFile(bla + '/assets/pp.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/anjing', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    Anjing = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/anjing.json'));
    const randAnjing = Anjing[Math.floor(Math.random() * Anjing.length)]
    data = await fetch(randAnjing).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/ajg.jpeg', data)
    res.sendFile(bla + '/assets/ajg.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/doraemon', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    Dora = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/doraemon.json'));
    const randDora = Dora[Math.floor(Math.random() * Dora.length)]
    data = await fetch(randDora).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/dora.jpeg', data)
    res.sendFile(bla + '/assets/dora.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/elaina', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    const Elaina = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/elaina.json'))
    const randElaina = Elaina[Math.floor(Math.random() * Elaina.length)]
    //tansole.log(randLoli)
    data = await fetch(randElaina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/elaina.jpeg', data)
    res.sendFile(bla + '/assets/elaina.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/loli', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    const Loli = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/loli.json'))
    const randLoli = Loli[Math.floor(Math.random() * Loli.length)]
    //tansole.log(randLoli)
    data = await fetch(randLoli).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/loli.jpeg', data)
    res.sendFile(bla + '/assets/loli.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/yuri', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    const Yuri = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yuri.json'))
    const randYuri = Yuri[Math.floor(Math.random() * Yuri.length)]
    //tansole.log(randTech)
    data = await fetch(randYuri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Yuri.jpeg', data)
    res.sendFile(bla + '/assets/Yuri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/cecan', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const cecan = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/cecan.json'));
    const randCecan = cecan[Math.floor(Math.random() * cecan.length)];
    data = await fetch(randCecan).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/cecan.jpeg', data)
    res.sendFile(bla + '/assets/cecan.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/wallpaper/aesthetic', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Aesthetic = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/aesthetic.json'));
    const randAesthetic = Aesthetic[Math.floor(Math.random() * Aesthetic.length)];
    data = await fetch(randAesthetic).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/aesthetic.jpeg', data)
    res.sendFile(bla + '/assets/aesthetic.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/random/sagiri', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Sagiri = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
    data = await fetch(randSagiri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/sagiri.jpeg', data)
    res.sendFile(bla + '/assets/sagiri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shota', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const Shota = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shota.json'));
    const randShota = Shota[Math.floor(Math.random() * Shota.length)];
    data = await fetch(randShota).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/shota.jpeg', data)
    res.sendFile(bla + '/assets/shota.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/nsfwloli', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    

    const lol = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/nsfwloli.json'));
    const randlol = lol[Math.floor(Math.random() * lol.length)];
    data = await fetch(randlol).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/lol.jpeg', data)
    res.sendFile(bla + '/assets/lol.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/hinata', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    const Hinata = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/hinata.json'));
    const randHin = Hinata[Math.floor(Math.random() * Hinata.length)];
    data = await fetch(randHin).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Hinata.jpeg', data)
    res.sendFile(bla + '/assets/Hinata.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

 app.get('/api/soundcloud', async(req, res, next) => {
 apikey = req.query.apikey;
 url = req.query.url
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
RG_US(apikey, req);
soundl(url).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})

 app.get('/api/manga', async(req, res, next) => {
 apikey = req.query.apikey;
q = req.query.q
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
RG_US(apikey, req);
manga(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})

 app.get('/api/hentaistube', async(req, res, next) => {
 apikey = req.query.apikey;
q = req.query.q
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
RG_US(apikey, req);
hentaistube(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})
 
 app.get('/api/animes', async(req, res, next) => {
 apikey = req.query.apikey;
q = req.query.q
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
RG_US(apikey, req);
anime(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})


app.get('/api/ttp',  async (req, res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
message:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]	 				 
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`
res.type('jpg')
res.send(await getBuffer(sitee))
})

app.get('/api/fbdown',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
message:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
down.fbdown(url)
.then(e => {
res.json({
status:true,
criador: '@Vitinho ',
resultado: e})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/photooxy',(req,res) => {
url = req.query.url
text = req.query.text
if(!url)return res.json({
status:false,
message:'Cade o parametro url??'
})
if(!text)return res.json({
status:false,
message:'Cade o parametro text??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
photooxy(url, text)
.then(e => {
res.json({
status:true,
criador: '@Vitinho ',
resultado: e})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/wallpaperanime',(req,res) => {
apikey = req.query.apikey
q = 'Wallpaper anime'
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
gis(q, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
message:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get("/api/google-img", async(req, res) => {
try {
apikey = req.query.apikey
nome = req.query.nome
if(!nome) return res.json({message: "Faltando o parametro nome"})
if(!apikey)return res.json({message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
await gis(nome, logResults);
function logResults(error, results) {
if (error) {
console.log(error);
return res.json({message: "Erro.."})
} else {
return res.send(results)
}
}
} catch (e) {
return res.json({message: "Erro.."})
}
})

app.get('/api/ssweb',async (req,res,next) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
fetch('https://mnazria.herokuapp.com/api/screenshotweb?url='+url, async(error, results) => {
if(error){
console.log(error)
res.json({
status:false,
message:'Não encontrei o site'
})
} else { 
resultado = results
bala = await getBuffer(resultado.gambar)
res.type('jpg')
res.send(bala)
}
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/avatar',(req,res,next) => {
fetch(encodeURI(`https://nekos.life/api/v2/img/avatar`))
.then(response => response.json())
.then(async (data) => {
resultado =  data
bala = await getBuffer(resultado.url)
res.type('jpg')
res.send(bala)
})
.catch(e => {
res.json({erro:'erro'})
})
})

app.get('/api/legenda',async (req,res,next) => {
url = req.query.url
texto1 = req.query.texto1
texto2 = req.query.texto2
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
if(!texto1)return res.json({
status:false,
motivo:'nao_tem_texto_1'
})
if(!texto2)return res.json({
status:false,
motivo:'nao_tem_texto_2'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
bala = await getBuffer(`https://api.memegen.link/images/custom/${texto1}/${texto2}.png?background=${url}`)
res.type('jpg')
res.send(bala)
})

app.get('/api/github',(req,res,next) => {
pessoa = req.query.usuario
if(!pessoa)return res.json({
status:false,
motivo:'cade_o_usuario'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
fetch(encodeURI(`https://api.github.com/users/`+pessoa))
.then(response => response.json())
.then(date => {
gitData =  date;
res.json({
criador:"Vitinho ツ",
status:true,
resultado:{
username: gitData.login,
id: gitData.id,
Node_ID: gitData.node_id,
url: gitData.html_url,
local: (gitData.location == null) ? 'não_tem' : gitData.location,
bio: (gitData.bio == null) ? 'não_tem' : gitData.bio,
twitter:  (gitData.twitter_username == null) ? 'não_tem' : gitData.twitter_username,
seguidores: gitData.followers,
seguindo: gitData.following,
criado: gitData.created_at,
atualizado: gitData.updated_at,
procura_trabalho: (gitData.hireable == null) ? 'Não' : gitData.hireable,
Site: (gitData.blog == "") ? 'Não' : gitData.blog,
repositorios: gitData.public_repos,
admin_de_Site: (gitData.site_admin == false) ? 'Não' : gitData.site_admin,
tipo: gitData.type,
empresa: (gitData.company == null) ? 'Não' : gitData.company,
email: (gitData.email == null) ? 'Não' : gitData.email
} 
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/wiki',(req,res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
message:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
wiki.search(`${texto}`, 'pt')
.then(async (wikip) => {
const wikis = await axiosapp.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip[0].pageid}`)
const getData = Object.keys(wikis.data.query.pages)

res.json({
status:true,
resultado:wikis.data.query.pages[getData].extract
    })
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


//////YTS

app.get('/api/play', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
message:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
ytPlay(q)
.then(e => {
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/playv1', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
message:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
ytPlay_2(q)
.then(e => {
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/playv2', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
message:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
ytPlay_3(q).then(res => {
res.send(res)
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/playmp4',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
message:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
ytPlayMp4(q)
.then(e => {
res.json({
status:true,
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/playmp4-2',(req,res) => {
link = req.query.link
if(!link)return res.json({
status:false,
message:'Cade o parametro link??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
hx.youtube(link)
.then(e => {
res.json({
status:true,
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ytsrc',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
message:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
ytSearch(q)
.then(e => {
res.json({
status:true,
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ytsrc/videos',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
message:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
ytVideosSearch(q)
.then(e => {
res.json({
status:true,
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ytMp4',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
message:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
ytMp4(url)
.then(e => {
res.json({
status:true,
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/api/play_audio', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
var nome_url = req.query.nome_url;
if(!nome_url)return res.json({status:false,message:'- Cadê o parâmetro nome_url? Esse parâmetro pode ser introduzido com link do youtube ou o nome da música / video.'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
if(key.map(i => i.apikey)?.includes(apikey)){   
    hasil = `http://api.bronxyshost.com.br/api-bronxys/play?nome_url=${nome_url}&apikey=sigma22`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/asupan.mp3', data)
        res.sendFile(bla+'/assets/asupan.mp3')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/play_video', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
var nome_url = req.query.nome_url;
if(!nome_url)return res.json({status:false,message:'- Cadê o parâmetro nome_url? Esse parâmetro pode ser introduzido com link do youtube ou o nome da música / video.'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
if(key.map(i => i.apikey)?.includes(apikey)){ 
    hasil = `http://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${nome_url}&apikey=sigma22`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/asupan.mp4', data)
        res.sendFile(bla+'/assets/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/audiomeme', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
var query = req.query.query;
if(!query)return res.json({status:false,message:'- Cadê o parâmetro query?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    hasil = `https://supraz.onrender.com/api/audiomeme?quero=${query}&apikey=lhannabo`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/assets/asupan.mp4', data)
        res.sendFile(bla+'/assets/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/ia/midjourney', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
var query = req.query.query;
if(!query)return res.json({status:false,message:'- Cadê o parâmetro query?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
if(key.map(i => i.apikey)?.includes(apikey)){    
hasil = `https://vihangayt.me/tools/midjourney?q=${query}`
data = await fetch(hasil).then(v => v.buffer())   
await fs.writeFileSync(bla+'/assets/gostosinha.jpg', data)
res.sendFile(bla+'/assets/gostosinha.jpg')
} else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/ia/toanime', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,message:'- Cadê o parâmetro apikey?'})
var link = req.query.link;
if(!link)return res.json({status:false,message:'- Cadê o parâmetro link?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
if(key.map(i => i.apikey)?.includes(apikey)){    
hasil = `https://vihangayt.me/tools/toanime?url=${link}`
data = await fetch(hasil).then(v => v.buffer())   
await fs.writeFileSync(bla+'/assets/gostosinha.jpg', data)
res.sendFile(bla+'/assets/gostosinha.jpg')
} else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/linkshort/tinyurl', async (req, res, next) => {
link = req.query.link
apikey = req.query.apikey;
if (link === undefined || apikey === undefined) return res.status(404).send({status: 404,message: `insira o parâmetro link & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
var islink = isUrl(link)
if (!islink) return res.json({ status : false, message : "[!] insira uma url válido"})  
TinyURL.shorten(link, function(link, err) {
if (!err) return res.json({erro: "Erro no Servidor Interno"})
RG_US(apikey, req);
res.json({status: true, criador: `@GleysonBots`, result: link})
});	
})
	
router.get('/api/linkshort/cuttly', async (req, res, next) => {
link = req.query.link
apikey = req.query.apikey;
 if (link === undefined || apikey === undefined) return res.status(404).send({status: 404,message: `insira o parâmetro link & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
var islink = isUrl(link)
if (!islink) return res.json({ status : false, message : "[!] insira uma url válido"})  
let randomapicuttly = apicuttly[Math.floor(Math.random() * apicuttly.length)]
var hasil = await fetchJson(`https://cutt.ly/api/api.php?key=${randomapicuttly}&short=${link}`)
if (!hasil.url.shortLink) return  res.json({erro: "Erro no Servidor Interno"})
RG_US(apikey, req);
res.json({status: true, Criador: `@GleysonBots`,result: hasil.url.shortLink})
});


router.get('/api/linkshort/bitly', async (req, res, next) => {
link = req.query.link
apikey = req.query.apikey;
if (link === undefined || apikey === undefined) return res.status(404).send({status: 404,message: `insira o parâmetro link & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
var islink = isUrl(link)
if (!islink) return res.json({ status : false, message : "[!] insira uma url válido"})  
let randomapibitly = apibitly[Math.floor(Math.random() * apibitly.length)]
const bitly = new BitlyClient(randomapibitly)
RG_US(apikey, req);
bitly.shorten(link).then(function(result) {
res.json({status: true, criador: `@GleysonBots`, result : result.link})
}).catch(function(error) {
 res.json({erro: "Erro no Servidor Interno"})
});
})

router.get('/api/linkshort/tinyurlwithalias', async (req, res, next) => {
var link = req.query.link
var alias = req.query.alias
var apikey = req.query.apikey;
if (link === undefined || alias === undefined || apikey === undefined) return res.status(404).send({status: 404,message: `insira o parâmetro link & alias & apikey`});
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!islink) return res.json({ status : false, message : "[!] insira parâmetros de URL"})  
const data = { 'url': link, 'alias': shortText(alias, 30) }
TinyURL.shortenWithAlias(data).then(function(link)  {	
if (link == "Error") return res.json({erro: "Erro no Servidor Interno"})
RG_US(apikey, req);
res.json({status: true, criador: `@GleysonBots`, result: link})
})
})

router.get('/api/info/translate', async (req, res, next) => {
text = req.query.texto
ling = req.query.ling
apikey = req.query.apikey;
if (apikey === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro apikey`});
	if (!text ) return res.json({ status : false, message : "digite o parâmetro de texto."})  
	if (!ling ) return res.json({ status : false, message : "parâmetro de entrada: ling. Você pode ver a lista de idiomas em https://cloud.google.com/translate/docs/languages"})  
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
defaultLang = 'en'
tld = 'pt'
let result
try {
result = await translate(`${text}`, {
tld,
to: ling,
})
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang,
})
} finally {
res.json({
status: true,
result: result[0]
})}})

app.get('/api/editsvideo', async(req, res, next) => {
var { apikey, categoria } = req.query
if (!categoria) return res.json({ status : false,  message : "cade o parametro categoria"}) 
if(!apikey)return res.json({status:false,message:'cade o parametro apikey'})
var EDT_ALEATORIOS = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/ALEATORIOS.json").toString())
var EDT_BLEACH = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/BLEACH.json").toString())
var EDT_CHAINSAW = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/CHAINSAW.json").toString())
var EDT_DEMON_SLAYER = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/DEMON_SLAYER.json").toString())
var EDT_DRAGONBALL = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/DRAGONBALL.json").toString())
var EDT_HUNTER_X = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/HUNTER_X.json").toString())
var EDT_JUJUTSU_KAISEN = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/JUJUTSU_KAISEN.json").toString())
var EDT_NARUTO = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/NARUTO.json").toString())
RST_CTRG = [
{NAME: "aleatorios", RANDOM: EDT_ALEATORIOS[Math.floor(Math.random() * EDT_ALEATORIOS.length)]}, 
{NAME: "bleach", RANDOM: EDT_BLEACH[Math.floor(Math.random() * EDT_BLEACH.length)]},
{NAME: "chainsaw", RANDOM: EDT_CHAINSAW[Math.floor(Math.random() * EDT_CHAINSAW.length)]},
{NAME: "demon_slayer", RANDOM: EDT_DEMON_SLAYER[Math.floor(Math.random() * EDT_DEMON_SLAYER.length)]},
{NAME: "dragonball", RANDOM: EDT_DRAGONBALL[Math.floor(Math.random() * EDT_DRAGONBALL.length)]},
{NAME: "hunters", RANDOM: EDT_HUNTER_X[Math.floor(Math.random() * EDT_HUNTER_X.length)]},
{NAME: "jujutsu_kaisen", RANDOM: EDT_JUJUTSU_KAISEN[Math.floor(Math.random() * EDT_JUJUTSU_KAISEN.length)]},
{NAME: "naruto", RANDOM: EDT_NARUTO[Math.floor(Math.random() * EDT_NARUTO.length)]}
]
var EDT = RST_CTRG.map(i => i.NAME).indexOf(categoria)
if(EDT < 0) return res.json({message: "categoria indisponível."})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
RG_US(apikey, req);
if(key.map(i => i.apikey)?.includes(apikey)){
await getBuffer(RST_CTRG[EDT].RANDOM).then(editRest => {
res.type('mp4')
res.send(editRest)
}).catch(e => {
res.json({status: false, resultado:'❌️ Nenhuma resposta retornada ao servidor!️'})
})
} else {
res.json({status: false, resultado:'⏳️ Tempo de resposta esgotado!'})
}
})

app.get('/api/ytmp3', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
RG_US(apikey, req);
var { ytMp3_Down } = require('./y2mate.js')
ytMp3_Down(url).then((downloadMusicAudio) => {
res.json({
status: true,
código: 200,
resultado: downloadMusicAudio
})}).catch(e => {
console.log(e)
res.json({message: `Erro no Servidor Interno`
})
})
})

app.get('/api/ytmp4', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "404.html"))
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.json({message: "Apikey inválida ou requests esgotados!"})
if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
RG_US(apikey, req);
var { ytMp4_Down } = require('./y2mate.js')
ytMp4_Down(url).then((downloadMusicVideo) => {
res.json({
status: true,
código: 200,
resultado: downloadMusicVideo
})}).catch(e => {
console.log(e)
res.json({message: `Erro no Servidor Interno`
})
})
})

//////MOSTRA SE O APP FOI ABERTO
app.listen(PORT, () => {
console.log('Aplicativo aberto na porta: ' + PORT)
})


module.exports = router;
