const functions = require('firebase-functions');

const   express       = require('express')
  , https         = require('https')
  , bodyParser    = require('body-parser')
  , app           = express()
  , cors          = require('cors');


app.use(cors());
app.use(bodyParser.json());

const options = {
  host: 'api.clashofstats.com',
  port: 443,
  path: '/clans/YUPJGL2R/',
  headers: {
    accept: "application/json",
  }
};

app.get("/clan",(req, res) => {
  const request = https.request(options, (response) =>{
    let httpResult = '';
    response.on('data',  (chunk) => {
      httpResult += chunk;
    });
    response.on('end', () => {
      res.send(httpResult);
    });
  });

  request.on('error',(e) => {
    console.log('problem with request: ' + e.message);
  });

  request.end();

});

exports.app = functions.https.onRequest(app);
