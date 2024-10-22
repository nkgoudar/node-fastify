# NodeJS boilerplate using Fastify as framework

## Folder Structure
```
📦node-dashboard
 ┣ 📂documentation
 ┃ ┣ 📂guides
 ┃ ┃ ┗ 📜index.md
 ┃ ┣ 📂references
 ┃ ┃ ┗ 📜index.md
 ┃ ┗ 📜index.md
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┣ 📂v1
 ┃ ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┃ ┣ 📜createUser.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜fetchUsers.js
 ┃ ┃ ┃ ┗ 📂v2
 ┃ ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┃ ┣ 📜createUser.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜fetchUsers.js
 ┃ ┃ ┣ 📂routes
 ┃ ┃ ┃ ┣ 📂v1
 ┃ ┃ ┃ ┃ ┗ 📜user.js
 ┃ ┃ ┃ ┣ 📂v2
 ┃ ┃ ┃ ┃ ┗ 📜user.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂schemas
 ┃ ┃ ┃ ┣ 📂v1
 ┃ ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┃ ┣ 📜createUserSchema.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜fetchUserSchema.js
 ┃ ┃ ┃ ┗ 📂v2
 ┃ ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┃ ┣ 📜createUserSchema.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜fetchUserSchema.js
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜env.js
 ┃ ┣ 📂db
 ┃ ┃ ┗ 📜mongo.js
 ┃ ┣ 📂docs
 ┃ ┃ ┗ 📜swagger.js
 ┃ ┣ 📂middlewares
 ┃ ┃ ┗ 📜auth.js
 ┃ ┣ 📂plugins
 ┃ ┣ 📂services
 ┃ ┣ 📂utils
 ┃ ┣ 📜app.js
 ┃ ┗ 📜server.js
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜eslint.config.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```