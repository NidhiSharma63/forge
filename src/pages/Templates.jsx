import useAuth from "../api/queries/useAuth";

const Templates = () => {
  const { useLogoutQuery } = useAuth();
  const { mutateAsync: logout } = useLogoutQuery();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Templates;
