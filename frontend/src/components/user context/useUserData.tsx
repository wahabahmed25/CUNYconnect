//allows to use fetched user data through context

import { useContext } from "react";
import { UserDataContext } from "./UserDataContext";
export const useUserData = () => useContext(UserDataContext);
