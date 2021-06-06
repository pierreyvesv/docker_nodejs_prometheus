//index.js

const helloModule = require('./app');

module.exports = {
      hello: helloModule,
      indexfunc:function(){
       console.log('ok from index');
     }
}