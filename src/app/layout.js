import { Header } from "./containers/Header";
import "./globals.css";

export const metadata = {
  title: "RMD",
  description: "RMD app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <section className="p-8">{children}</section>
      </body>
    </html>
  );
}
