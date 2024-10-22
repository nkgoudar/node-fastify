import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

export default async function (fastify) {
  await fastify.register(swagger, {
    swagger: {
      info: {
        title: "API Documentation",
        description: "API for managing users and products",
        version: "1.0.0",
      },
      host: "localhost:3000", // Replace with your host
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  });

  // Optional: Register swagger-ui for the UI interface
  await fastify.register(swaggerUI, {
    routePrefix: "/docs", // The URL path for the Swagger UI
    swagger: {
      info: {
        title: "API Documentation",
        version: "1.0.0",
      },
      host: "localhost:3000", // Replace with your host
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  });
}
