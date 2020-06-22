var express = require('express');
var app = express()
const DB = require('./db');

app.listen(process.env.PORT || 8080)

    app.get('/test', (req, res) => {        

        res.send({
        	"text": "Did you call me?",
	"responseType": "inChannel"
            "attachments": [
              {
                "title": "Silicon Park Weekly Menu Table",
                "imageUrl": "https://img9.yna.co.kr/etc/inner/KR/2019/04/08/AKR20190408066300073_01_i_P2.jpg"
              }
            ]
        })
    });
