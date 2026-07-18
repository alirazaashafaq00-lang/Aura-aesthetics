import { Navbar } from "@/components/marketing/navbar/Navbar";
import { Footer } from "@/components/marketing/shared/Footer";
import { WhatsAppButton } from "@/components/marketing/shared/WhatsAppButton";
import { ChatBot } from "@/components/marketing/shared/ChatBot";
import { LuxuryCursor } from "@/components/marketing/shared/LuxuryCursor";
import { Preloader } from "@/components/marketing/shared/Preloader";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <LuxuryCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </>
  );
}
