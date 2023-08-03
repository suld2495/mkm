import Header from "./Header";
import SubBanner from "./SubBanner";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SubBanner />
      {children}
    </>
  );
};

export default Layout;