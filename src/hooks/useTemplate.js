import { useCallback } from "react";
import { useNavigate } from "react-router";
import useAuth from "../api/queries/useAuth";
const useTemplate = () => {
  const { useLogoutQuery } = useAuth();
  const { mutateAsync: logout } = useLogoutQuery();

  // navigation
  const navigation = useNavigate();

  const handleLogout = useCallback(async () => {
    await logout();
  }, [logout]);

  // handle navigate to template screen
  const handleTemplate = useCallback(() => {
    navigation("/template");
  }, [navigation]);

  // handle navigate to editor screen
  const handleEditor = useCallback(() => {
    navigation("/editor");
  }, [navigation]);
  return { handleLogout, handleTemplate, handleEditor };
};

export default useTemplate;
