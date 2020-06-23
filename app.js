var express = require('express');
var app = express()
const DB = require('./db');

app.listen(process.env.PORT || 8080)

    app.get('/', (req, res) => {        

        res.send({hook_url=https://hook.dooray.com/services/2141235803690805491/2773112445718757478/N8oGtQBiRBGCvxokp7G6Tw
curl -H "Content-Type: application/json" -X POST -d '{"botName": "주간메뉴를 알리는 Bot", "botIconImage": "https://thumbs.gfycat.com/QuarrelsomeDismalBobolink-size_restricted.gif", "attachments" : [{"title" : "실리콘파크 식당 주간메뉴 (06.22~06.29)","titleLink" : "http://whatsup.nhnent.com/shortCut/boardArticle/299928","text" : "이번주 메뉴입니다.","imageUrl": "https://i.ibb.co/c8sk091/aadf8cc0-854d-4a14-a1c2-63c4762f17e3.png"}]}' $hook_url})
    });
