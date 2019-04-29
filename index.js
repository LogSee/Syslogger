var Syslogd = require('syslogd');
const mongo = require('mongodb').MongoClient


var SYSLOG_PORT = process.env.SYSLOG_PORT || 514
var MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017'

Syslogd(function(info) {
   
   console.log(info);

})
.listen(SYSLOG_PORT, function(err) {
    console.log('Syslog Server Listening on port:', SYSLOG_PORT)
    if (err){
        console.error(err);
    }
})