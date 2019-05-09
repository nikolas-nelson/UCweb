
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
    // authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBjOTk0MTc3LWM4ODQtNDdmYi04ZmM5LTc3NzgzOWEwNjE4YSIsImlhdCI6MTU0NDgyMzU4Niwic3ViIjoiZGV2ZWxvcGVyL2NhOTgxNjYxLTA5YTYtNzg1Mi0yYzIxLWI0MWE4NWIxM2VmMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgyLjAuMjAwLjM2IiwiODIuMC4yMDAuMzYiXSwidHlwZSI6ImNsaWVudCJ9XX0.IAZcEMx1r3M5EWT9l0YxdbFGnpEJlopPlGDIE5tzSst2mrgoEKx4Iwku42wV58qfIHOlN4N3ZNLGahPMTFUrvQ"
  }
};

app.get("/clan", (req, res) => {
  const request = https.request(options, (response) => {
    let httpResult = '';
    response.on('data', (chunk) => {
      httpResult += chunk;
    });
    response.on('end', () => {
      res.send(httpResult);
    });
  });

  request.on('error', (e) => {
    console.log('problem with request: ' + e.message);
  });

  request.end();

});


app.listen(3000, () => console.log('running on port 3000'));
