import { Testimonial } from '../models/Testimoniales.js';
import { Viaje } from '../models/Viaje.js';



const paginaInicio = async  (req, res) => { // req => lo que se envia || res => lo que express nos responde
    

    // hacer las consultas con un promise
    const promisesDb = []

    // consulta por 3 viajes 
    promisesDb.push(Viaje.findAll({limit : 3}));

    // consulta por 3 testimonios
    promisesDb.push(Testimonial.findAll({limit : 3}));

    try {
        // consultar tres testimonios
        const resultado = await Promise.all(promisesDb)


        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes : resultado[0],
            testimonios : resultado[1],
        })

    } catch (error) {
        console.log(error);
    }
    
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
        pagina: 'Proximos viajes',
        viajes
    })
}

// muestra los detalles del viaje 

const paginaDetalleViaje = async (req, res) =>{ 

    const { slug } = req.params;


    try {
        
        const viaje = await Viaje.findOne({where: { slug }})
        res.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje
        })

    } catch (error) {
        console.log(error);
    }
}


const paginaTestimoniales = async (req, res) => { // req => lo que se envia || res => lo que express nos responde
    

    try {

        const testimonios = await Testimonial.findAll()

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimonios,
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}