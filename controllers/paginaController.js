import { Viaje } from '../models/Viaje.js';


const paginaInicio = (req, res) => { // req => lo que se envia || res => lo que express nos responde
    
    res.render('inicio', {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, res) => { // req => lo que se envia || res => lo que express nos responde
    
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => { // req => lo que se envia || res => lo que express nos responde
    
    // consultar bd para traer los resultados de viajes
    const viajes = await Viaje.findAll();

    console.log(viajes)


    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    })
}

const paginaTestimoniales = (req, res) => { // req => lo que se envia || res => lo que express nos responde
    
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}