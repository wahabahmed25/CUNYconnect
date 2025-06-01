//container for the data, doesnt actually fetch (kinda like placeholder)

import { createContext } from "react";

interface UserData {
  name?: string;
  email?: string;
}

interface UserDataContextType {
  userData: UserData | null;
  loading: boolean;
}

export const UserDataContext = createContext<UserDataContextType>({
  userData: null,
  loading: true,
});
