import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}]
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav>
          <ul>
          {links.map(({label, route}) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
