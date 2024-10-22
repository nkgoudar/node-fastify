import Fastify from "fastify";

const app = Fastify({ logger: true });


app.get("/", (request, reply) => {
  reply.send("Hello there!");
});

export default app;
