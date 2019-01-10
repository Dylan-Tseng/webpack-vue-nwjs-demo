const NwBuilder = require('nw-builder');
const nw = new NwBuilder({
    files: ['./dist/**'], // use the glob format
    platforms: ['win64'],
    flavor:"normal",
    zip:false
});

// Log stuff you want
nw.on('log',  console.log);

nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});