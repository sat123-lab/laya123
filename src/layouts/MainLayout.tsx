import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTop";
import { LAYA_SCROLL_ID } from "@/lib/scrollRoot";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-dvh flex flex-col relative overflow-hidden">
      <Header />
      {/* Hero/content start below logo header; scroll from under that invisible line */}
      <div id={LAYA_SCROLL_ID} className="laya-scroll-root">
        <main>{children}</main>
        <Footer />
      </div>
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
