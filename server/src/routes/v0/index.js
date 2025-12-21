import express from 'express';
import healthCheckRoutes from './healthRoutes/health.routes.js';
const router = express.Router();

router.use('/v0', healthCheckRoutes);

export default router;
