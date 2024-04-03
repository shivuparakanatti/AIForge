
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import StoreProvider from "./StoreProvider";
import { CrispProvider } from "@/components/crisp-provide";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIForge",
  description: "AIForge",
};

export default function RootLayout({ children }) {
  return (
   

      <StoreProvider>

    <html lang="en">
      <CrispProvider/>

      <body className={inter.className}>{children}</body>
    </html>
      </StoreProvider>
  

    

  );
}
