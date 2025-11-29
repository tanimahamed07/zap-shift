import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRout = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();
  if (loading || roleLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  if (role !== "admin") {
    return (
      <div>
        <p>Forbidden Access</p>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default AdminRout;
