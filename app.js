const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const debug = require('debug')('monitoring');
const path = require('path');

const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 8080);


const server = app.listen(app.get('port'), function () {
	debug('Express server listening on port ' + server.address().port);
});