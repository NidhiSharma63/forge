import { useCallback } from "react";
import useAuth from "../api/queries/useAuth";
const useTemplate = () => {
  const { useLogoutQuery } = useAuth();
  const { mutateAsync: logout } = useLogoutQuery();

  const handleLogout = useCallback(async () => {
    await logout();
  }, [logout]);
  return { handleLogout };
};

export default useTemplate;
