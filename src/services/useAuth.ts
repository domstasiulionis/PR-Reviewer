export const useAuth = () => {
  const user = localStorage.getItem("user");
  return { user, isAuthenticated: !!user };
};
