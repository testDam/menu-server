var express = require('express');
const PORT = process.env.PORT
var app = express()
var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = '{"botName": "주간메뉴를 알리는 Bot", "botIconImage": "https://thumbs.gfycat.com/QuarrelsomeDismalBobolink-size_restricted.gif", "attachments" : [{"title" : "실리콘파크 식당 주간메뉴 (06.22~06.29)","titleLink" : "http://whatsup.nhnent.com/shortCut/boardArticle/299928","text" : "이번주 메뉴입니다.","imageUrl": "https://i.ibb.co/c8sk091/aadf8cc0-854d-4a14-a1c2-63c4762f17e3.png"}]}';

var options = {
    url: '$hook_url',
    method: 'POST',
    headers: headers,
    body: dataString
};

app.listen(process.env.PORT || 8080)

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
