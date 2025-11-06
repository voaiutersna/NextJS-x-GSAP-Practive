import "./globals.css";
import Menu from "../components/Menu"
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
