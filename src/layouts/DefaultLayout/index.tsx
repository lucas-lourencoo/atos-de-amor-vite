import { Outlet } from "react-router-dom";
import BackToTop from "../../components/BackToTop";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhatsAppButton from "../../components/WhatsAppButton";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <WhatsAppButton />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
}
