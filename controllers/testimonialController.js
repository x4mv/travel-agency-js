import { Testimonial } from "../models/Testimoniales.js";


const guardarTestimonial = async (req, res) => {

    // validando formulario 
    const {nombre, correo, mensaje } = req.body;
    
    // validando que no esten vacios 

    const errores = [];
    if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === ''){
        errores.push({mensaje: 'Todos los campos son obligatorios apa!!!'})
    }else{
        console.log(`${nombre} ${correo} ${mensaje}`);
    }
    
    if (errores.length > 0){
        // consulta los testimonios
        const testimonios = await Testimonial.findAll()
        
        // mostrar la vista con los errores 


        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre, 
            correo,
            mensaje,
            testimonios
        })
    }else{
        // almacenar en la DB
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }

    }
}

export { 
    guardarTestimonial
}