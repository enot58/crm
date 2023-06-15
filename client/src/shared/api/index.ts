//shared/api — работа с API.

import { useLoginMutation, useRegisterMutation, useCheckQuery } from "./auth";
import { authApi } from "./auth";
import { userDescriptionApi } from "./user-description";

export { authApi, userDescriptionApi };
export { useLoginMutation, useRegisterMutation, useCheckQuery };
