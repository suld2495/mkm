import { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminLayout from "./AdminLayout";
import AdminNav from "./AdminNav";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AdminMainLayout = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.data) {
      navigate('/');
    }
  }, [user.data, navigate]);
  return (
    <div className="admin">
      <AdminNav />
      <div>
        <AdminHeader />
        <main>
          <AdminLayout>{children}</AdminLayout>
        </main>
      </div>
    </div>
  )
};

export default AdminMainLayout;