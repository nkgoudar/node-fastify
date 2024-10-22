import auth from "../../../middlewares/auth.js";
import createUser from "../../controllers/v1/user/createUser.js";
import fetchUsers from "../../controllers/v1/user/fetchUsers.js";
import createUserSchema from "../../schemas/v1/user/createUserSchema.js";
import fetchUserSchema from "../../schemas/v1/user/fetchUserSchema.js";

export default [
  {
    method: "GET",
    path: "/fetch",
    controller: fetchUsers,
    schema: fetchUserSchema,
  },
  {
    path: "/create",
    method: "POST",
    middlewares: auth,
    schema: createUserSchema,
    controller: createUser,
  },
];
