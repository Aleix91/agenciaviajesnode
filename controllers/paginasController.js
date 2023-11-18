import { Viaje } from '../models/Viaje.js';
import { Comentario } from '../models/Comentarios.js';

const paginaInicio = async (req, res) => { // req: lo que enviamos / res: lo que express nos responde
    // Consultar 3 viajes de la BD, del modelo Viaje
    // Consultar 3 comentarios de la BD, del modelo Comentario
    const promiseDB = [];
    promiseDB.push( Viaje.findAll({limit: 3}) );
    promiseDB.push( Comentario.findAll({limit: 3}) );
    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            comentarios: resultado[1]
        });

    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar Base de Datos
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({where: { slug }});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);        
    }
}

const paginaComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.findAll();

        res.render('comentarios', {
            pagina: 'Comentarios',
            comentarios
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaComentarios,
    paginaDetalleViaje
}