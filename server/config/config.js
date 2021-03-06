var env = process.env.NODE_ENV || 'development';
console.log(' E N V I R O M E N T  :', env);

if(env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];
    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    })
}
