import "./globals.css";

export const metadata = {
  title: "RMD",
  description: "RMD app",
};

// layout wraps page. So everthing in page is equivalent to children
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
