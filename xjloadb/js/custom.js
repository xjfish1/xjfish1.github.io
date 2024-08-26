//const GameDownUrlIos = ""; // iOS
const GameDownUrlIos = "itms-services://?action=download-manifest&url=https://kh109gm.kkd666.com/xjby/xingji.plist"; // iOS
const GameDownUrlAndroid = "https://kh109gm.kkd666.com/xjby/xingjibuyu.apk"; // Android

const TITLE = "星际捕鱼"; // 当前名字
const DATE = "2024-08-21"; // 更新时间
const VERSION = "2.0.24.8(build 1)"; // 当前版本

function getDevice() {
    const u = navigator.userAgent;
    const AdrType = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('android') > -1 || u.indexOf('linux') > -1 || u.indexOf('Windows') > -1;
    const iOSType = u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('Mac OS X') > -1;
    if (AdrType) {
        return "android"
    } else if (iOSType) {
        return "ios"
    }
}

document.title = TITLE;

// 二维码内容
var text = window.location.href;
var imgUrl = '';
var name = TITLE;
var about = '关于' + TITLE;
var size = '';
var time = DATE;
var version = VERSION;
const type = this.getDevice();
if (type == "ios") {   // iOS
    // text = GameDownUrlIos;
    imgUrl = './image/img_ios.png';
    size = '767.54MB';
} else {    // android
    // text = GameDownUrlAndroid;
    imgUrl = './image/img_android.png';
    size = '789.20MB';
}

// create qrcode
var div = document.getElementById("gameqrcode")
new QRCode(div, text);

var canvas = div.children[0];
canvas.style.display = "none";

var img = div.children[1];
img.style.width = '100%';

// description
var divdes = document.getElementById("gameios")
var imgdes = divdes.children[0];
imgdes.src = imgUrl;

// name
var divname = document.getElementById("gamename")
var pname = divname.children[0];
pname.textContent = name;

// about
var divabout = document.getElementById("gamenamesmall")
var pabout = divabout.children[0];
pabout.textContent = about;

// size
var divsize = document.getElementById("gamesize")
var psize = divsize.children[0];
psize.textContent = size;

// time
var divtime = document.getElementById("gametime")
var ptime = divtime.children[0];
ptime.textContent = time;

// version
var divversion = document.getElementById("gameversion")
var pversion = divversion.children[0];
pversion.textContent = version;

wechatOrQQBrowser();

const $btnDown = $('#gamedownload');
$btnDown.click(function () {
    deviceType();
});

$('.mask').click(function () {
});

function wechatOrQQBrowser() {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/ QQ\//i) == " qq\/") {
        $('.mask').show();
        $('.showbg').hide();
    } else {
        $('.mask').hide();
        $('.showbg').show();
    }
}

function deviceType() {
    const type = this.getDevice();
    if (type == "android") {
        window.location.href = GameDownUrlAndroid;
    } else if (type == "ios") {
        window.location.href = GameDownUrlIos;
    }
}