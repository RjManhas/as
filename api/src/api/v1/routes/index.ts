import { FastifyInstance } from 'fastify';

async function v1Routes(fastify: FastifyInstance) {
    fastify.register(require('./health/index'), { prefix: '/health' });
}
export = v1Routes;
