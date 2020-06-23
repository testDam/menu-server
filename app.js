var express = require('express');
var app = express()
const DB = require('./db');

app.listen(process.env.PORT || 8080)

    app.get('/', (req, res) => {        

        res.send({"text": "Weekly Menu Table","responseType": "inChannel","attachments" : [{"title" : "실리콘파크 식당 주간메뉴 (06.22~06.29)","titleLink" : "http://whatsup.nhnent.com/shortCut/boardArticle/299928","text" : "이번주 메뉴입니다.","imageUrl": "https://i.ibb.co/c8sk091/aadf8cc0-854d-4a14-a1c2-63c4762f17e3.png"}]})
    });
