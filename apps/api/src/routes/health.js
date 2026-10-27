import { healthResponseSchema } from '@filler/shared';

/**
 * @param {import('fastify').FastifyInstance} fastify
 */
export default function healthRoutes(fastify) {
  // logLevel: the Docker healthcheck hits this every 10s; keep it out of the request log
  fastify.get('/health', { logLevel: 'warn', schema: { response: { 200: healthResponseSchema } } }, () => {
    return { status: 'ok' };
  });
}
