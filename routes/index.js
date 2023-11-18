import express from 'express';
import { paginaComentarios, paginaInicio, paginaNosotros, paginaViajes, paginaDetalleViaje } from '../controllers/paginasController.js';
import { guardarComentario } from '../controllers/comentarioController.js';

const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/comentarios', paginaComentarios);
router.post('/comentarios', guardarComentario);

export default router;