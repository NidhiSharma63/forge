import { useCallback } from "react";
import { useNavigate } from "react-router";
import useAuth from "../api/queries/useAuth";

const useTemplateComp = () => {
  const { useLogoutQuery } = useAuth();
  const { mutateAsync: logout } = useLogoutQuery();
  // const { useGetAllTemplatesQuery } = useTemplate();
  // const { data: allTemplate } = useGetAllTemplatesQuery();

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

  const handleNavigateToEditorWithId = useCallback((id) => {
    navigation(`editor/${id}`);
  }, []);
  return {
    handleLogout,
    handleTemplate,
    handleEditor,
    handleNavigateToEditorWithId,
  };
};

export default useTemplateComp;
