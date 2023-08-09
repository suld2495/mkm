import AdminHeader from "./AdminHeader";
import AdminLayout from "./AdminLayout";
import AdminNav from "./AdminNav";

const AdminMainLayout = ({ children }) => {
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