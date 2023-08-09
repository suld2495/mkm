import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header>
      <div><strong>관리자님</strong> 반갑습니다. 좋은하루되세요!</div>
      <div>
        <Link to="/admin"><img src="/images/admin/customer/home_icon.png" /></Link>
        <button><img src="/images/admin/customer/logout_icon.png" /></button>
      </div>
    </header>
  )
};

export default AdminHeader;