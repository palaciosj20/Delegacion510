const express = require('express');
require('dotenv').config();
const apiKeyAuth = require('./middleware/checkapiKey');
//aca van los require de las rutas papito

const api = express();
api.use(apiKeyAuth);
api.use(express.json())

//aca van los api.use() de las rutas papito

module.exports=api;