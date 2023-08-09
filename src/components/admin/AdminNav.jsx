import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/admin/customer/admin_logo.png" />
      </div>
      <div>
        <ul>
          <li className="main-nav">
            <span><i />고객센터</span>
            <ul>
              <li className="sub-nav"><Link to="/admin/counseling">간편상담</Link></li>
              <li className="sub-nav"><Link to="/admin/estimate">물류견적</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default AdminNav;
