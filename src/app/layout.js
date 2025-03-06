import "./globals.css";
import { Header } from "./containers/Header";

export const metadata = {
  title: "RMD",
  description: "RMD App",
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
