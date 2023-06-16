//shared/api — работа с API.

import { useLoginMutation, useRegisterMutation, useCheckQuery } from "./auth";
import { authApi } from "./auth";
import { userDescriptionApi } from "./user-description";
import { userApi } from "./users";

export { authApi, userDescriptionApi, userApi };
export { useLoginMutation, useRegisterMutation, useCheckQuery };
