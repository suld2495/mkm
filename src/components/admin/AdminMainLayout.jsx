import { useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminLayout from "./AdminLayout";
import AdminNav from "./AdminNav";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { adminState } from "../../store/admin";

const AdminMainLayout = ({ children }) => {
  const adminValue = useRecoilValue(adminState);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminValue) return;

    if (!user.data) {
      navigate('/');
    }
  }, [user.data, adminValue, navigate]);
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