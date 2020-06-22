var express = require('express');
var app = express()
const DB = require('./db');

app.listen(process.env.PORT || 8080)

    app.get('/', (req, res) => {        

        res.send({
        	text: 'Weekly Menu Table',
	responseType: 'inChannel',
            attachments: [
              {
                title: 'Silicon Park Weekly Menu Table',
                imageUrl: 'https://ifh.cc/g/6tZJBk.jpg'
              }
            ]
        })
    });
