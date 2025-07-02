//fetches the logged in users data (get req)

import { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { UserDataContext } from "./UserDataContext";
import { UseAuthUser } from "../UseAuthUser";

export const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, loading: authLoading } = UseAuthUser();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUserData({...snapshot.val(), uid: user.uid});
        }
      }
      setLoading(false);
    };

    if (!authLoading) fetchUserData();
  }, [user, authLoading]);

  return (
    <UserDataContext.Provider value={{ userData, loading }}>
      {children}
    </UserDataContext.Provider>
  );
};
