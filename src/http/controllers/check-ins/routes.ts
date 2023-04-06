import { FastifyInstance } from 'fastify';

import { verifyJWT } from '@/http/middlewares/verify-jwt';

import { create } from './create';
import { validate } from './validate';

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT);

  app.post('/gyms/:gymId/check-in', create);

  app.patch('/check-ins/:checkInId/validate', validate);
}
