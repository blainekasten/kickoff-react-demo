const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const fs = require('fs');
const React = require('react-dom/server');
const prettyJSON = require('prettyjson');
const app = express();
const read = fs.readFileSync;
const port = 53900;

// ensure webpack has been ran already
if (!fs.existsSync('./public/_server.js')) {
  console.error('ERROR: The webpack build was not found. Make sure to run `webpack --watch` first');
  process.exit(1);
}

// Catch port in use error
process.on('uncaughtException', (err) => {
  if(err.errno === 'EADDRINUSE') {
    console.error('ERROR: Port %s is already in use. Kill any processes using that port', port);
    process.exit(1);
  }
});

// serve static public
app.use(express.static('public'));
app.use(bodyParser.json());

// run react code on any request
app.get('/', (req, res) => {
  const time = Date.now();
  const reactCode = require('./public/_server.js').vi;

  res.send(
    read('./public/_index.html', 'utf8').
      replace('†react†', React.renderToString(reactCode))
  );

  console.log('Isomorphic rendering profile: %sms', (Date.now() - time));
});

app.post('/Logging/LogData', (req, res) => {
  if (typeof req.body.data.Attributes !== 'string') {
    console.log("\nVILogger (" + Date.now() + ")");
    console.log(prettyJSON.render(req.body.data));
    console.log("");
  }

  res.send('{}');
});

app.listen(port, () => {
  const command = /^win/.test(process.platform)? 'explorer' : 'open';

  console.log('Example app listening at http://localhost.thorhudl.com:%s', port);
  exec(command + ' http://localhost.thorhudl.com:53900');
});
