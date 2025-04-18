import WhatsappLive from "@components/WhatsappLive";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


import { Footer, NavBar } from "@components";
import { Providers } from "./providers";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Providers>
        <NavBar />
        {children}
        <Footer />
        <WhatsappLive/>
        </Providers>
      </body>
    </html>
  );
}
