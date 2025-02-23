import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function AppLayout() {
  return (
    <div className="relative mx-auto">
      <Header />

      <main className="mt-80px">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
