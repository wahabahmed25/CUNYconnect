//title header used in CUNy portal/main page

import { useUserData } from "../user context/useUserData"
const PortalTitle = () => {
    const {userData, loading} = useUserData();
    if (loading) return <p>Loading...</p>;

  return (
    <div className="">
      <p className="text-black text-2xl mt-10 sm:text-3xl md:text-4xl font-bold mb-10 text-center">
        Welcome Back, {userData?.name?.split(" ")[0]?.toUpperCase()}!
      </p>
    </div>
  )
}

export default PortalTitle
