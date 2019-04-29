var Syslogd = require('syslogd');
const parser = require("nsyslog-parser");


Syslogd(function(info) {
   console.log(info);
   // var logline = info.msg
   // console.log(parser(logline));
})
.listen(514, function(err) {
    console.log('start')
    if (err){
        console.error(err);
    }
})