import { authRoutes } from "../routes/auth.js";
import { orderRoutes } from "../routes/order.js";
import { categoryRoutes, productRoutes } from "../routes/products.js";
//tiền tố
const prefix = "/api";

export const registerRoutes = async (fastify) => {
  fastify.register(authRoutes, { prefix: prefix });
  fastify.register(productRoutes, { prefix: prefix });
  fastify.register(categoryRoutes, { prefix: prefix });
  fastify.register(orderRoutes, { prefix: prefix });
};
