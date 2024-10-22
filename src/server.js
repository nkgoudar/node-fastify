import registerRoutes from "./api/routes/index.js";
import setupSwagger from "./docs/swagger.js";
import app from "./app.js"; // Import the Fastify instance from app.js

(async function () {
  await setupSwagger(app);
  await registerRoutes(app);
  // Define the port to listen on
  const PORT = process.env.PORT || 3000;

  // Start the server
  app.listen({ port: PORT }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  });
})();
