import React from 'react'
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

export default function RiderRoute({children}) {
    const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();
  if (loading || !user || roleLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  if (role !== "rider") {
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
}
