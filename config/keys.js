if(process.env.NODE_ENV === 'production'){
  module.exports = require('./prod');
}else{
  module.exports = require('./dev');
}

/*
Production variablelari degistirmek icin
heroku server a giris yap. Yeni key ler ata.
*/