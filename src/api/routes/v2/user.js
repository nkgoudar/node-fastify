import auth from "../../../middlewares/auth.js";
import createUser from "../../controllers/v2/user/createUser.js";
import fetchUsers from "../../controllers/v2/user/fetchUsers.js";
import createUserSchema from "../../schemas/v2/user/createUserSchema.js";
import fetchUserSchema from "../../schemas/v2/user/fetchUserSchema.js";

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
