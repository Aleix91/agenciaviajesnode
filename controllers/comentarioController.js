import { Comentario } from '../models/Comentarios.js';

const guardarComentario = async (req, res) => {
    // Validar el formulario
    const { nombre, correo, mensaje } = req.body;
    
    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre está vacío'});
    }

    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo está vacío'});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje está vacío'});
    }

    if(errores.length > 0) {
        // Consultar Comentarios Existentes
        const comentarios = await Comentario.findAll();

        // Mostrar la vista con errores
        res.render('comentarios', {
            pagina: 'Comentarios',
            errores,
            nombre,
            correo,
            mensaje,
            comentarios
        });
    } else {
        //Almacenarlo en la base de datos
        try {
            await Comentario.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/comentarios');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarComentario
}