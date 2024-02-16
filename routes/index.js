import express from 'express';

const router  = express.Router();


router.get('/', (req, res) => { // req => lo que se envia || res => lo que express nos responde
    res.send('Hola mundo')
});

router.get('/nosotros', (req, res) => { // req => lo que se envia || res => lo que express nos responde
    res.render('nosotros')
});

export default router;