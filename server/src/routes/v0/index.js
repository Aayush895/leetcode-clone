import express from 'express';
import healthCheckRoutes from './healthRoutes/health.routes.js';
import authRoutes from './Authentication/auth.routes.js';
const router = express.Router();

router.use('/v0', healthCheckRoutes);
router.use('/v0', authRoutes);

export default router;
