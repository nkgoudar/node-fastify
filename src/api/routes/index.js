import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)));

export default async function registerRoutes(fastify, prefix = "api") {
  const routesDirs = fs.readdirSync(__dirname); // Get the current directory of routes
  for (const routesDir of routesDirs) {
    const routeDir = path.join(__dirname, routesDir);
    if (fs.statSync(routeDir).isDirectory()) {
      const routeFiles = fs.readdirSync(routeDir);
      if (routeFiles && routeFiles.length > 0) {
        for (const routeFile of routeFiles) {
          const routes = (await import(path.join(routeDir, routeFile))).default;
          for (const {
            path,
            method,
            middlewares,
            schema,
            controller,
          } of routes) {
            if (!path || path.length === 0){
              throw new Error("Path cannot be empty");
            }
            const url = `/${prefix}/${routesDir}/${routeFile.substring(0,routeFile.length - 3)}${path}`;
            // console.log(url);
            await fastify.route({
              method,
              url,
              preHandler: middlewares,
              schema,
              handler: controller,
            });
          }
        }
      }
    }
  }
}
