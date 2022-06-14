const express = require('express');
const cors = require('cors');

class Server{
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 3001

    this.middleware();
    this.routes();
  }


  middleware(){
    this.app.use( cors() )
    this.app.use( express.json() )
    this.app.use( express.static('public') )
  }

  routes(){
    this.app.use( '/api/users', require('../routes/users'));
  }


  listen(){
    this.app.listen(this.port,()=>{
      console.log("App is listen on port: ", this.port);
    });
  }
}

module.exports = Server;