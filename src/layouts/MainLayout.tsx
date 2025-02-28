import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
