import { useUserData } from "../user context/useUserData";
const UserProfile = () => {
  const { userData, loading } = useUserData();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">User Profile</h1>
      {userData ? (
        <div className="mt-2">
          <p><strong>Name:</strong> {userData.name}</p>
          {/* Add more fields here if needed */}
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default UserProfile;
