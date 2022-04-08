const express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config()

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer(this.app);

    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio Público
        this.app.use(express.static("public"));

        // Lectura y parseo del body
        this.app.use(express.json());

        // API Endpoints
        this.app.use('/api/user', require('../routes/user'))
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar Server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto:', this.port);
        });
    }

}


module.exports = Server;
