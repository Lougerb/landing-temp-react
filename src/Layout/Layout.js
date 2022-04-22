import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Homepage from "../Homepage/Homepage";

const Layout = ({ props }) => {
  return (
    <div id="wrap">
      <Header />
      <div className="l-main">
        <Homepage />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
