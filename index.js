import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();


// conectar la db 
db.authenticate()
    .then( () => console.log('DB conectada'))
    .catch( error => console.log(error))

//definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug 
app.set('view engine', 'pug');

// obtener el year actual 
app.use( (req, res, next ) => {
    const year = new Date();

    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
})

// definir la carpeta public para archivos estaticos
app.use(express.static('public'));

// agregar router
app.use('/', router);



app.listen(port , () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})