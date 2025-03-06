import "./globals.css";

export const metadata = {
  title: "RMD",
  description: "RMD App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
