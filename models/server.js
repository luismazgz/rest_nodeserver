const express = require('express');
var cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        this.middlewares();

        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json());
        //directorio público
        this.app.use(express.static('public'));
    }

    routes(){
        //se usa un miidleware para incluir las rutas
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`http://localhost:${this.port}`);
        });
    }
}
module.exports=Server;