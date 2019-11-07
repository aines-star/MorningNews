var mongoose = require('mongoose');
var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://aines:doudou@cluster0-jhdco.mongodb.net/newsroom?retryWrites=true&w=majority',
    options,
    function(err) {
     if (err) {
       console.log(err);
     } else {
       console.info('Database meteoapp connection OK');
     }
    }
);