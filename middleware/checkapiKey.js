require('dotenv').config();//cargamos dotenv

const checkApiKey = (req, res, next) =>{//next seria como para continuar con el resto del codigo en el index
    const apiKey = req.header('x-api-key');//esto es lo que sacamos del get, header es el nombre de la "variable" donde viene la api key
    if (apiKey === process.env.API_KEY){//si la api key que viene del get coincide con la del .env
        next();//sigue
    }else{//si no
        res.status(401).json({message: 'API Key inválida o faltante'});//api key mala bro
    }
}

module.exports = checkApiKey;//lo exportamos asi al otro archivo