var express = require('express');
var app = express()
const DB = require('./db');

app.listen(process.env.PORT || 8080)


    app.get('/', (req, res) => {        

        res.send({
        	"text": "Hi",
            "attachments": [
              {
                "title": "this week menu",
                "imageUrl": "https://img9.yna.co.kr/etc/inner/KR/2019/04/08/AKR20190408066300073_01_i_P2.jpg"
              }
            ]
        })
    });

